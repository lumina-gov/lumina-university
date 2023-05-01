import type { PageLoad } from "./$types"
import { get_full_course } from "$lib/courses/content"
import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import type { UnitStatus } from "$lib/gql/graphql"

export const load = (async ({ parent }) => {
    const data = await parent()
    if (data.user_store.user === null) return { recent_data: null }

    const last_updated_unit_req = await data.graph.gquery(graphql(`
        query LastUpdatedUnit {
            last_updated_unit {
                id
                status
                user_id
                unit_slug
                course_slug
                updated_at
            }
        }
    `), {})

    if (last_updated_unit_req.error || !last_updated_unit_req.data) {
        throw error(500, {
            message: last_updated_unit_req.error?.message ?? "Error fetching last updated unit",
            code: "LAST_UPDATED_UNIT_ERROR"
        })
    }

    const recent_unit = last_updated_unit_req.data.last_updated_unit

    if (!recent_unit) return { recent_data: null }

    const last_updated_course_progress = await data.graph.gquery(graphql(`
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
    `), { course_slug: recent_unit.course_slug })

    if (last_updated_course_progress.error || !last_updated_course_progress.data) {
        throw error(500, {
            message: last_updated_course_progress.error?.message ?? "Error fetching last updated course progress",
            code: "COURSE_PROGRESS_ERROR"
        })
    }
    const course_progress = last_updated_course_progress.data.course_progress
    if(course_progress.length === 0) return { recent_data: null }

    const units_progress_map: { [key: string]: UnitStatus } = {}
    for (const unit of course_progress) {
        units_progress_map[unit.unit_slug] = unit.status
    }
    
    return {
        recent_data: {
            unit: recent_unit.unit_slug,
            course: await get_full_course(recent_unit.course_slug, units_progress_map),
        }
    }
}) satisfies PageLoad