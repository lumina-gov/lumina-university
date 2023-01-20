import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ url, cookies }) => {
    const redirect_url = encodeURIComponent(`${url.protocol}//${url.host}/signin`)

    return {
        auth_token: cookies.get("token") || null,
        login_url: `https://lumina.earth/signin?redirect=${redirect_url}`,
    }
}
