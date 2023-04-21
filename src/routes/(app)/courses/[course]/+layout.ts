import { courses } from "$lib/courses/content"
import { Unit, UnitData, UnitMap } from "$lib/types/unit"
import { error } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types"
import { graphql } from "$lib/gql"
import { UnitStatus } from "$lib/gql/graphql"

export const load: LayoutLoad = async ({ params, parent }) => {
    const course_import = courses[`./${params.course}/course.ts`]
    const data = await parent()
    if (!course_import) {
        throw error(404, {
            message: "Course not found",
            code: "COURSE_NOT_FOUND"
        })
    }
    const course = (await course_import()).course

    const req = await data.graph.gquery(graphql(`
        query GetCourseProgress($course_slug: String!) {
            course_progress(course_slug: $course_slug) {
                id
                status
                user_id
                unit_slug
                course_slug
                updated_at
            }
        }
    `), {course_slug: params.course})

    if (req.error ) {
        throw error(500, {
            message: req.error.message,
            code: "COURSE_PROGRESS_ERROR"
        })
    }

    const units_progress_map: { [key: string]: UnitStatus } = {}
    req.data?.course_progress.map(progress => {
        units_progress_map[progress.unit_slug] = progress.status
    })

    return {
        course: {
            ...course,
            slug: params.course,
        },
        ...units_query_to_unit_tree(course.units_map, course.root_units, units_progress_map),
    }
}

type UnitDataMap = {
    [key: string]: UnitData
}

function units_query_to_unit_tree(units: UnitDataMap, root_units: string[], units_progress_map: {[key: string]: UnitStatus} ): { units_by_id: UnitMap, root_units: Unit[] } {
    // Create a map of units by id
    const units_by_id: { [key: string]: Unit } = {}
    // Create a list of root units

    // Add units to map, and empty subunits array
    Object.entries(units).map(([slug, unit]) => {
        units_by_id[slug] = {
            ...unit,
            slug,
            subunits: [],
            status: units_progress_map[slug]
        }
    })

    // Add subunits to units
    Object.entries(units).map(([slug, unit]) => {
        if (unit.subunits) {
            unit.subunits.map(subunit_slug => {
                const subunit = units_by_id[subunit_slug]
                if (!subunit) {
                    throw error(500, {
                        message: `Subunit "${subunit_slug}" not found`,
                        code: "SUBUNIT_NOT_FOUND"
                    })
                }

                units_by_id[slug].subunits.push(subunit)
            })
        }
    })

    return {
        root_units: root_units.map(slug => {
            const unit = units_by_id[slug]
            if (!unit) {
                throw error(500, {
                    message: `Root unit "${slug}" not found`,
                    code: "ROOT_UNIT_NOT_FOUND"
                })
            }
            return unit
        }),
        units_by_id
    }
}