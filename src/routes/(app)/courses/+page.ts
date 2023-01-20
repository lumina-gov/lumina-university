import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ parent }) => {
    const data = await parent()

    const query = await data.graph.gquery(graphql(`
        query courses {
            courses {
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
        }`), {})

    if(!query.data?.courses) {
        throw error(500, {
            message: "Failed to load courses",
            code: "LOAD_COURSES_FAILED"
        })
    }

    return {
        courses: query.data?.courses
    }
}