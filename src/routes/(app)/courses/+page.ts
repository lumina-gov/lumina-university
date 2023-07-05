import { GetCoursesDocument } from "$lib/hygraph/graphql-types.js"
import { error } from "@sveltejs/kit"

export async function load ({ parent }) {
    const data = await parent()

    const res = await data.hygraph.gquery(GetCoursesDocument, {})

    if (res.error || !res.data?.courses) {
        throw error(500, {
            message: "Could not load courses",
            code: "COURSES_LOAD_ERROR",
        })
    }

    return {
        courses: res.data.courses
    }
}
