import { env } from "$env/dynamic/private"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ url, cookies }) => {
    const redirect_url = encodeURIComponent(`${url.protocol}//${url.host}/signin`)

    return {
        auth_token: cookies.get("token") || null,
        login_url: `${env.LUMINA_DOMAIN}/signin?redirect=${redirect_url}`,
        lumina_domain: env.LUMINA_DOMAIN,
    }
}
