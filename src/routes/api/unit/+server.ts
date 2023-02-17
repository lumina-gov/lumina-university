import { env } from "$env/dynamic/private"
import { get_child_blocks_recursive, type BlockResponseWithChildren } from "$lib/api/notion_api"
import { Client } from "@notionhq/client"
import { error, RequestHandler } from "@sveltejs/kit"
import { json } from "@sveltejs/kit"

export const POST = (async ({ request }) => {
    const { notion_page_id } = await request.json() as {
        notion_page_id?: string
    }

    if (!notion_page_id) {
        throw error(400, {
            message: "Missing notion page id",
            code: "missing_notion_page_id",
        })
    }

    const notion = new Client({ auth: env.NOTION_API_KEY })

    // get the page by uuid
    const page = await notion.pages.retrieve({
        page_id: notion_page_id,
    })

    if (!page) {
        return json({
            blocks: [] as BlockResponseWithChildren[],
        })
    }

    const page_id = page.id

    const blocks = await get_child_blocks_recursive(page_id)

    return json({
        blocks
    })
}) satisfies RequestHandler