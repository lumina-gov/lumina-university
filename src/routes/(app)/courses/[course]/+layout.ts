import { courses, get_full_course } from "$lib/courses/content"
import { error, redirect } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types"
import { graphql } from "$lib/gql"
import type { GetCourseProgressQuery, UnitStatus } from "$lib/gql/graphql"
import { MessageType } from "$lib/types/message"

export const load: LayoutLoad = async ({ params, parent }) => {
    const data = await parent()
    
    // if (data.user_store.user === null) {
    //     data.alerts.create_alert(MessageType.Info, "You must be signed in to view this course")
    //     throw redirect(307, data.user_store.login_url)
    // }

    const course_import = courses[`./${params.course}/course.ts`]
    if (!course_import) {
        throw error(404, {
            message: "Course not found",
            code: "COURSE_NOT_FOUND"
        })
    }

    let course_progresses: GetCourseProgressQuery["course_progress"] = []

    if (data.user_store.user) {
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

        if (req.error) {
            throw error(500, {
                message: req.error.message,
                code: "COURSE_PROGRESS_ERROR"
            })
        }

        if (!req.data) {
            throw error(500, {
                message: "No data returned from course progress query",
                code: "COURSE_PROGRESS_ERROR"
            })
        }

        course_progresses = req.data.course_progress
    }

    const units_progress_map: { [key: string]: UnitStatus } = {}

    for (const progress of course_progresses) {
        units_progress_map[progress.unit_slug] = progress.status
    }

    return {
        course: await get_full_course(params.course, units_progress_map),
    }
}
