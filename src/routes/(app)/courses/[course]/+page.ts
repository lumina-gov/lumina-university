import { content } from "$lib/courses/content"
import type { PageLoad } from "./$types"

export const load = (async ({ params }) => {
    // Get the markdown file as a string
    const file = content[`./${params.course}/course.md`]

    let markdown = ""
    if (file) {
        markdown = await file()
    }

    return {
        markdown
    }
}) satisfies PageLoad