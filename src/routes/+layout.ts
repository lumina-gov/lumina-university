import { browser } from "$app/environment"
import { alerts_init } from "$lib/stores/alerts"
import { get_cookie_from_document } from "$lib/utils/cookie"
import { GoogleAuthProvider, signInWithCredential, type User } from "firebase/auth"
import { auth, app } from "$lib/utils/firebase_web"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ data, depends }) => {
    depends("app:user")
    let auth_token: string | null = data?.auth_token || null

    if (browser && !auth_token) {
        auth_token = get_cookie_from_document("token")
    }

    const user = auth_token ? await authenticate_user_from_credential(auth_token) : null

    const alerts = alerts_init([])

    return {
        alerts,
        firebase: {
            app,
            auth,
        },
        user_container: {
            user
        },
    }
}

async function authenticate_user_from_credential(auth_token: string): Promise<User> {
    const credential = GoogleAuthProvider.credential(auth_token)
    const user_credential = await signInWithCredential(auth, credential)
    return user_credential.user
}