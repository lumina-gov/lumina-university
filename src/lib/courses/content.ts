import { UnitStatus } from "$lib/graphql/graphql-types"
import type { CourseFull, CourseRaw } from "$lib/types/course"
import type { Unit, UnitData } from "$lib/types/unit"
import { error } from "@sveltejs/kit"

export const content = import.meta.glob("./**/*.md", { as: "raw" }) as {
    [key: string]: undefined | (() => Promise<string>)
}

export const courses = import.meta.glob("./*/course.ts") as {
    [key: string]: (() => Promise<{ course: CourseRaw }>)
}

type UnitDataMap = {
    [key: string]: UnitData
}

export function has_course(course_slug: string): boolean {
    return !!courses[`./${course_slug}/course.ts`]
}

export async function get_full_course(course_slug: string, units_progress_map: Record<string, UnitStatus>): Promise<CourseFull> {
    const course_import = courses[`./${course_slug}/course.ts`]
    if (!course_import) {
        throw new Error("Course not found")
    }
    const course = (await course_import()).course
    const {units_by_slug, root_units} = units_query_to_unit_tree(course.units_by_slug, course.root_units, units_progress_map)
    return {
        course_slug: course_slug,
        ...course,
        units_by_slug,
        root_units
    }
}

function units_query_to_unit_tree(units: UnitDataMap, root_units: string[], units_progress_map: Record<string, UnitStatus> ): { units_by_slug: Record<string, Unit>, root_units: Unit[] } {
    // Create a map of units by id
    const units_by_slug: Record<string, Unit> = {}

    const entries = Object.entries(units)

    // Add units to map, and empty subunits array
    entries.map(([unit_slug, unit]) => {
        units_by_slug[unit_slug] = {
            ...unit,
            unit_slug,
            status: units_progress_map[unit_slug] ?? UnitStatus.NotStarted,
            subunits: [],
            free: unit.free ?? false
        }
    })

    // Add subunits to units
    entries.map(([slug, unit]) => {
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