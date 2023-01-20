import type { MeQuery } from "$lib/gql/graphql"

export type UserStore = {
    auth_token: string | null
    user: MeQuery["me"]
    login_url: string
}

export const user_store_init = (auth_token: string | null, login_url: string): UserStore => {
    const data = {
        user: null,
        auth_token,
        login_url,
    }

    return data
}