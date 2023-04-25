import { UnitProgressResult, courses, get_full_course } from "$lib/courses/content"
import { error } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types"
import { graphql } from "$lib/gql"


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

    if (req.error) {
        throw error(500, {
            message: req.error.message,
            code: "COURSE_PROGRESS_ERROR"
        })
    }

    const units_progress_map: Record<string, UnitProgressResult> = {}
    req.data?.course_progress.map(progress => {
        units_progress_map[progress.unit_slug] = {unit_slug: progress.unit_slug, status: progress.status }
    })

    const full_course = await get_full_course(params.course, units_progress_map)

    return {
        course: {
            ...course,
            slug: params.course,
        },
        ...full_course
    }
}
