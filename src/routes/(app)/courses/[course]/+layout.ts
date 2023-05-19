import { courses, get_full_course } from "$lib/courses/content"
import { error } from "@sveltejs/kit"
import type { UnitStatus} from "$lib/graphql/graphql-types.js"
import { GetCourseProgressDocument, type GetCourseProgressQuery } from "$lib/graphql/graphql-types.js"

export async function load ({ params, parent }) {
    const data = await parent()

    const course_import = courses[`./${params.course}/course.ts`]
    if (!course_import) {
        throw error(404, {
            message: "Course not found",
            code: "COURSE_NOT_FOUND"
        })
    }

    let course_progresses: GetCourseProgressQuery["course_progress"] = []

    if (data.user_store.user) {
        const req = await data.graph.gquery(GetCourseProgressDocument, {
            course_slug: params.course
        })

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
