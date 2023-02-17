import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ parent, url }) => {
    const data = await parent()

    const query = await data.graph.gquery(graphql(`
        query CustomerPortalUrl($return_url: String!) {
            me {
                customer_portal_url(return_url: $return_url)
            }
        }`), {
            return_url: url.toString()
        })

    const mutation = await data.graph.gmutation(graphql(`
        mutation CreateLightUniversityCheckoutSession($return_url: String!) {
            create_light_university_checkout_session(success_url: $return_url)
        }`), {
            return_url: url.toString()
        })


    if (query.error) {
        throw error(500, {
            message: `${query.error.message}`,
            code: "CUSTOMER_PORTAL_URL_ERROR",
        })
    }

    if (!query.data?.me?.customer_portal_url) {
        throw error(500, {
            message: "No customer portal URL found",
            code: "CUSTOMER_PORTAL_URL_ERROR",
        })
    }

    if (mutation.error) {
        throw error(500, {
            message: `${mutation.error.message}`,
            code: "CHECKOUT_SESSION_ERROR",
        })
    }

    if (!mutation.data?.create_light_university_checkout_session) {
        throw error(500, {
            message: "No checkout session URL found",
            code: "CHECKOUT_SESSION_ERROR",
        })
    }

    return {
        customer_portal_url: query.data.me.customer_portal_url,
        checkout_session_url: mutation.data.create_light_university_checkout_session,
    }
}