import { fetch_as_json } from "$lib/utils/response"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ parent, fetch, url }) => {
    // we want to request the customer-portal-url from the server
    const data = await parent()

    const response = await fetch_as_json<{ url: string }>(fetch, "/api/customer-portal-url", {
        method: "POST",
        body: JSON.stringify({
            user_access_token: data.auth_token,
            return_url: url.toString(),
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })

    return {
        customer_portal_url: response.url
    }
}