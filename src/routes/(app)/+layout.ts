<<<<<<< HEAD
import type { LayoutLoad } from "./$types"
import { getSupabase } from "@supabase/auth-helpers-sveltekit"
import { alerts_init } from "$lib/stores/alerts"

export const load: LayoutLoad = async event => {
  const { session } = await getSupabase(event)
  return {
    session,
    alerts: alerts_init([]),
  }
=======
import { browser } from "$app/environment"
import { alerts_init } from "$lib/stores/alerts"
import { get_cookie_from_document } from "$lib/utils/cookie"
// import { auth, app } from "$lib/utils/firebase_web"
import type { LayoutLoad } from "./$types"
// import { authenticate_user_from_credential } from "$lib/utils/auth"

export const load: LayoutLoad = async ({ data, depends }) => {
    depends("app:user")
    let auth_token: string | null = data?.auth_token || null

    if (browser && !auth_token) {
        auth_token = get_cookie_from_document("token")
    }

    // const user = auth_token ? await authenticate_user_from_credential(auth_token) : null

    const alerts = alerts_init([])

    return {
        auth_token,
        alerts,
        // firebase: {
        //     app,
        //     auth,
        // },
        user_container: {
            user: null
        },
    }
>>>>>>> 7b0227f202f4d524aee3ab1b078847615bd2b423
}
