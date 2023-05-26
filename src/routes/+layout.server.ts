import { env } from "$env/dynamic/private"

export async function load ({ url, cookies }) {
    const redirect_url = encodeURIComponent(`${url.protocol}//${url.host}/signin`)

    return {
        auth_token: cookies.get("token") || null,
        login_url: `${env.LUMINA_DOMAIN}/auth?app-slug=lumina-university&redirect=${redirect_url}`,
        lumina_domain: env.LUMINA_DOMAIN,
    }
}
