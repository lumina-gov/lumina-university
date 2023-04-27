import { UnitStatus } from "$lib/gql/graphql"
import type { Course, CourseWithProgress } from "$lib/types/course"
import type { Unit, UnitData } from "$lib/types/unit"
import { error } from "@sveltejs/kit"
import type { SvelteComponent } from "svelte"

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
        course_slug: course_slug,
        name: course.name,
        description: course.description,
        icon: course.icon,
        root_units: root_units,
        units_by_slug: units_by_slug
    }
}

export async function get_course_icon(course_slug: string): Promise<typeof SvelteComponent> {
    const course_import = courses[`./${course_slug}/course.ts`]
    if (!course_import) {
        throw new Error("Course not found")
    }
    const course = (await course_import()).course
    return course.icon
}
// this function needs to search through all courses and return the courses that have the given course slug as a prerequisite
export async function get_up_next(course_slug: string): Promise<string[]> {
    const up_next: string[] = []
    for (const [key, course_import] of Object.entries(courses)) {
        const course = (await course_import()).course
        if (course.prerequisites.includes(course_slug)) {
            up_next.push(key.split("/")[1])
        }
    }
    return up_next
}

function units_query_to_unit_tree(units: UnitDataMap, root_units: string[], units_progress_map: Record<string, UnitStatus> ): { units_by_slug: Record<string, Unit>, root_units: Unit[] } {
    // Create a map of units by id
    const units_by_slug: Record<string, Unit> = {}
    // Create a list of root units

    // Add units to map, and empty subunits array
    Object.entries(units).map(([unit_slug, unit]) => {
        units_by_slug[unit_slug] = {
            ...unit,
            unit_slug,
            status: units_progress_map[unit_slug] ?? UnitStatus.NotStarted,
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