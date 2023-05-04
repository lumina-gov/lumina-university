import type { PageLoad } from "./$types"
import { get_full_course, has_course } from "$lib/courses/content"
import { graphql } from "$lib/gql"
import type { UnitStatus } from "$lib/gql/graphql"
import type { CourseFull } from "$lib/types/course"

export const load = (async ({ parent }) => {
    const data = await parent()
    if (data.user_store.user === null) return { recent_data: null }
    const all_progress_req = await data.graph.gquery(graphql(`
        query AllCourseProgress {
            all_course_progress {
                id
                user_id
                unit_slug
                course_slug
                status
                updated_at
            }
        }
    `), {})

    if (all_progress_req.error || !all_progress_req.data?.all_course_progress) {
        return {recent_data: null}
    }
    const recent_data: { unit_slug: string, course: CourseFull}[] = []

    for (const course of all_progress_req.data.all_course_progress) {
        if (has_course(course[0].course_slug)) {
            const units_progress_map: { [key: string]: UnitStatus } = {}
            for (const unit of course) {
                units_progress_map[unit.unit_slug] = unit.status
            }
            // filter out any units that may have been deleted
            const course_full = await get_full_course(course[0].course_slug, units_progress_map)
            const units_which_exist = course.filter(unit => course_full.units_by_slug[unit.unit_slug])
            if (units_which_exist.length === 0) continue
            recent_data.push(
                {
                    unit_slug: units_which_exist[0].unit_slug,
                    course: course_full,
                }
            )
        }
    }
    return {
        recent_data: recent_data
    }
}) satisfies PageLoad