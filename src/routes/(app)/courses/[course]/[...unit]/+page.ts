import { content } from "$lib/courses/content"
import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

export const load = (async ({ params, parent }) => {
    const data = await parent()
    const unit = data.units_by_slug[params.unit]

    if (!unit) {
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
    } else {
        throw error(404, {
            message: "Unit content not found",
            code: "UNIT_CONTENT_NOT_FOUND"
        })
    }

    return {
        unit,
        markdown
    }
}) satisfies PageLoad