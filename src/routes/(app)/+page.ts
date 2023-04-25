import type { PageLoad } from "./$types"
import { courses } from "$lib/courses/content"
import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import { UnitStatus } from "$lib/gql/graphql"

export const load = (async ({ parent }) => {
    const data = await parent()

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

    if (last_updated_unit_req.error) {
        throw error(500, {
            message: last_updated_unit_req.error.message,
            code: "COURSE_PROGRESS_ERROR"
        })
    }

    const course = last_updated_unit_req?.data?.last_updated_unit?.course_slug
    const unit_slug = last_updated_unit_req?.data?.last_updated_unit?.unit_slug

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
    `), {course_slug: (typeof course === "string") ? course : ""})

    if (last_updated_course_progress.error) {
        throw error(500, {
            message: last_updated_course_progress.error.message,
            code: "COURSE_PROGRESS_ERROR"
        })
    }
    const units_progress_map: { unit: string, status: UnitStatus }[] = []
    last_updated_course_progress.data?.course_progress.map(progress => {
        units_progress_map.push({unit: progress.unit_slug, status: progress.status})
    })
    const course_length = units_progress_map.length
    const completed = units_progress_map.filter(unit => unit.status === "COMPLETED").length
    const index_object = units_progress_map.find(unit => unit.unit === unit_slug)
    const current_index = units_progress_map.indexOf(index_object!)

    return {
        recent_course: {
            slug: course,
            number_completed: completed,
            course_length: course_length,
            last_unit: unit_slug,
        }
    }
}) satisfies PageLoad