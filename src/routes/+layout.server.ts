import { get_cookies_from_string } from "$lib/utils/cookie"
import type { LayoutServerLoad } from "./$types"


export const load: LayoutServerLoad = async ({ request }) => {
    const cookies = request.headers.get("cookie") || ""
    const auth_token = get_cookies_from_string("token", cookies)

    return {
        auth_token,
    }
}