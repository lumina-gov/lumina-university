import { content } from "$lib/courses/content"

export async function load ({ params }) {
    // Get the markdown file as a string
    const file = content[`./${params.course}/course.md`]

    let markdown = ""
    if (file) {
        markdown = await file()
    }

    return {
        markdown
    }
}