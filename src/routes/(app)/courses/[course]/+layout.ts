import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ params, parent }) => {
    const data = await parent()

    const query = await data.graph.gquery(graphql(`
        query CoursesBySlug($slug: String!) {
            course_by_slug(slug: $slug) {
                id
                name
                slug
                units {
                    id
                    name
                    slug
                    created_at
                    parent_unit
                }
            }
        }`), { slug: params.course })

    if(!query.data?.course_by_slug) {
        throw error(404, {
            message: "Course not found",
            code: "COURSE_NOT_FOUND"
        })
    }

    return {
        course: query.data.course_by_slug,
        slug: params.course
    }
}