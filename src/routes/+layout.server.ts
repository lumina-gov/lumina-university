import { get_auth_token_from_cookies } from "$lib/utils/auth"
import type { LayoutServerLoad } from "./$types"


export const load: LayoutServerLoad = async ({ request }) => {
    return {
        auth_token: get_auth_token_from_cookies(request),
    }
}