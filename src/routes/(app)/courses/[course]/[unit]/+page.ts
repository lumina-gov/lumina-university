import type { BlockResponseWithChildren } from "$lib/api/notion_api"
import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

export const load = (async ({ params, parent, fetch }) => {
    const data = await parent()

    const query = await data.graph.gquery(graphql(`
    query UnitBySlug($slug: String!) {
        unit_by_slug(slug: $slug) {
            id
            name
            slug
            created_at
            parent_unit
            notion_page_id
        }
    }`), { slug: params.unit })

    if(!query.data?.unit_by_slug) {
        throw error(404, {
            message: "Unit not found",
            code: "UNIT_NOT_FOUND"
        })
    }

    const response = await fetch("/api/unit", {
        method: "POST",
        body: JSON.stringify({
            notion_page_id: query.data.unit_by_slug.notion_page_id
        })
    })

    const json = await response.json() as {
        blocks: BlockResponseWithChildren[]
    }

    return {
        blocks: json.blocks,
        unit: query.data.unit_by_slug
    }
}) satisfies PageLoad