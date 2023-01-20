import { error, redirect } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"


export const GET = (async ({ url, cookies }) => {
    const token = url.searchParams.get("token")

    if(!token) {
        throw error(400, {
            message: "No token provided",
            code: "NO_TOKEN",
        })
    }

    cookies.set("token", token)

    throw redirect(307, "/")


}) satisfies RequestHandler