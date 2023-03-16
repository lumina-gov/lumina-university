import { content } from "$lib/courses/content"
import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

export const load = (async ({ params, parent }) => {
    const data = await parent()

    const query = await data.graph.gquery(graphql(`
    query UnitBySlug($slug: String!) {
        unit_by_slug(slug: $slug) {
            id
            name
            slug
            created_at
            parent_unit
        }
    }`), { slug: params.unit })

    if(!query.data?.unit_by_slug) {
        throw error(404, {
            message: "Unit not found",
            code: "UNIT_NOT_FOUND"
        })
    }

    // Get the markdown file as a string
    const file = content[`./${params.course}/${params.unit}.md`]
    let markdown = ""
    if (file) {
        markdown = await file()
    }

    return {
        unit: query.data.unit_by_slug,
        markdown
    }
}) satisfies PageLoad