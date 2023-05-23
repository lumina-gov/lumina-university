import { alerts_init } from "$lib/stores/alerts"
import { init_urql } from "$lib/stores/graphql"
import { get_me } from "$lib/api/user"
import { browser } from "$app/environment"
import { set_cookie } from "$lib/utils/cookie"
import { user_store_init } from "$lib/stores/user_store"

export async function load ({ data: { auth_token, login_url, lumina_domain }}) {
    const user_store = user_store_init(auth_token, login_url)
    const graph = init_urql(user_store)
    const alerts = alerts_init([])

    try {
        user_store.user = await get_me(graph, alerts)
    } catch (e) {
        if (browser && e && typeof e === "object" && "code" in e && e.code === "INVALID_TOKEN") {
            set_cookie("token", null)
        }
        user_store.auth_token = null
    }

    return {
        user_store,
        alerts,
        graph,
        lumina_domain,
    }
}
