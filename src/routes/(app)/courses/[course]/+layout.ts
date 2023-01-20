import { graphql } from "$lib/gql"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ params, parent }) => {
    const data = await parent()

    const query = await data.graph.gquery(graphql(`
        query course_by_slug($slug: String!) {
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

    return {
        course: query.data?.course_by_slug
    }
}