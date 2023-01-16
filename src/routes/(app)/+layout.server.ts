import type { LayoutServerLoad } from "./$types"
import { get_cookies_from_string } from "$lib/utils/cookie"

export const load: LayoutServerLoad = async event => {
    return {
        token: get_cookies_from_string("token", event.request.headers.get("cookie") || ""),
    }
}
