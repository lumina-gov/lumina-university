import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"
import { courses } from "$lib/courses/content"

export const load: PageLoad = async ({ parent }) => {
    const data = await parent()
    
    return {
        courses: courses
    }
}
