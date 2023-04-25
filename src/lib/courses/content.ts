import { GetCourseProgressQuery, UnitStatus } from "$lib/gql/graphql"
import { Course, CourseWithProgress } from "$lib/types/course"
import { Unit, UnitData } from "$lib/types/unit"
import { error } from "@sveltejs/kit"

export const content = import.meta.glob("./**/*.md", { as: "raw" }) as {
    [key: string]: undefined | (() => Promise<string>)
}

export const courses = import.meta.glob("./*/course.ts") as {
    [key: string]: (() => Promise<{ course: Course }>)
}

type UnitDataMap = {
    [key: string]: UnitData
}

export async function get_full_course(course_slug: string, units_progress_map: Record<string, UnitStatus>): Promise<CourseWithProgress> {
    const course_import = courses[`./${course_slug}/course.ts`]
    if (!course_import) {
        throw new Error("Course not found")
    }
    const course = (await course_import()).course
    const {units_by_slug, root_units} = units_query_to_unit_tree(course.units_map, course.root_units, units_progress_map)
    return {
        slug: course_slug,
        name: course.name,
        description: course.description,
        root_units: root_units,
        units_by_slug: units_by_slug
    }
}


export async function get_course_description(course_slug: string | undefined): Promise<string> {
    if (!course_slug) {
        return ""
    }
    const course_import = courses[`./${course_slug}/course.ts`]
    if (!course_import) {
        throw new Error("Course not found")
    }
    const course = (await course_import()).course
    return course.description
}

function units_query_to_unit_tree(units: UnitDataMap, root_units: string[], units_progress_map: Record<string, UnitStatus> ): { units_by_slug: Record<string, Unit>, root_units: Unit[] } {
    // Create a map of units by id
    const units_by_slug: Record<string, Unit> = {}
    // Create a list of root units

    // Add units to map, and empty subunits array
    Object.entries(units).map(([slug, unit]) => {
        units_by_slug[slug] = {
            ...unit,
            slug,
            status: units_progress_map[slug] ?? UnitStatus.NotStarted,
            subunits: [],
            free: unit.free ?? false
        }
    })

    // Add subunits to units
    Object.entries(units).map(([slug, unit]) => {
        if (unit.subunits) {
            unit.subunits.map(subunit_slug => {
                const subunit = units_by_slug[subunit_slug]
                if (!subunit) {
                    throw error(500, {
                        message: `Subunit "${subunit_slug}" not found`,
                        code: "SUBUNIT_NOT_FOUND"
                    })
                }

                units_by_slug[slug].subunits.push(subunit)
            })
        }
    })

    return {
        root_units: root_units.map(slug => {
            const unit = units_by_slug[slug]
            if (!unit) {
                throw error(500, {
                    message: `Root unit "${slug}" not found`,
                    code: "ROOT_UNIT_NOT_FOUND"
                })
            }
            return unit
        }),
        units_by_slug
    }
}