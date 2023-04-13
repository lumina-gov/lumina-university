import { courses } from "$lib/courses/content"
import { Unit, UnitData, UnitMap, UnitStatus } from "$lib/types/unit"
import { error } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ params }) => {
    const course_import = courses[`./${params.course}/course.ts`]
    if (!course_import) {
        throw error(404, {
            message: "Course not found",
            code: "COURSE_NOT_FOUND"
        })
    }

    const course = (await course_import()).course

    return {
        course: {
            ...course,
            slug: params.course,
        },
        ...units_query_to_unit_tree(course.units_map, course.root_units),
    }
}

type UnitDataMap = {
    [key: string]: UnitData
}

function units_query_to_unit_tree(units: UnitDataMap, root_units: string[]): { units_by_id: UnitMap, root_units: Unit[] } {
    // Create a map of units by id
    const units_by_id: { [key: string]: Unit } = {}
    // Create a list of root units

    // Add units to map, and empty subunits array
    Object.entries(units).map(([slug, unit]) => {
        units_by_id[slug] = {
            ...unit,
            slug,
            subunits: [],
            status: UnitStatus.Completed
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