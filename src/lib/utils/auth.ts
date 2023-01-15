import { error } from "@sveltejs/kit"
import { FirebaseError } from "firebase/app"
import { GoogleAuthProvider, signInWithCredential, type User } from "firebase/auth"
import { get_cookies_from_string } from "./cookie"
import { auth } from "./firebase_web"

export async function authenticate_user_from_credential(auth_token: string): Promise<User | null> {
    try {
        const credential = GoogleAuthProvider.credential(auth_token)
        const user_credential = await signInWithCredential(auth, credential)
        return user_credential.user
    } catch (err) {
        if (err instanceof FirebaseError) {
            if (err.code === "auth/invalid-credential") {
                return null
            }
        }
        if (err instanceof Error) {
            throw error(500, {
                message: err.message,
                code: "auth_error"
            })
        }

        throw error(500, {
            message: "Unknown error",
            code: "auth_error"
        })
    }
}

export function get_auth_token_from_cookies(request: Request): string | null {
    const cookies = request.headers.get("cookie") || ""
    const auth_token = get_cookies_from_string("token", cookies)

    return auth_token
}