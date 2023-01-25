import { env } from "$env/dynamic/private"
import { get_child_blocks_recursive } from "$lib/api/notion_api"
import notion_data from "$lib/data/notion_data"
import { Client } from "@notionhq/client"
import type { PageServerLoad } from "./$types"

export const load = (async ({ params }) => {
    const notion = new Client({ auth: env.NOTION_API_KEY })

    // get the page by uuid
    const pages_response = await notion.databases.query({
        database_id: notion_data.courses_database_id,
        filter: {
            and: [
                {
                    property: "slug",
                    rich_text: {
                        equals: params.course
                    }
                }
            ]
        }
    })

    if (pages_response.results.length === 0) {
        return {
            blocks: []
        }
    }

    const page = pages_response.results[0]

    const page_id = page.id

    const blocks = await get_child_blocks_recursive(page_id)

    return {
        blocks
    }
}) satisfies PageServerLoad