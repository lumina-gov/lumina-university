import { error, redirect } from "@sveltejs/kit"
import { MessageType } from "$lib/types/message"
import { CreateLuminaUniversityCheckoutSessionDocument, CustomerPortalUrlDocument } from "$lib/graphql/graphql-types.js"

export async function load ({ parent, url }) {
    const data = await parent()
    if(!data.user_store.user) {
        data.alerts.create_alert(MessageType.Error, "Log in to view your account")
        throw redirect(307, "/")
    }

    const query = await data.graph.gquery(CustomerPortalUrlDocument, {
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

    const mutation = await data.graph.gmutation(CreateLuminaUniversityCheckoutSessionDocument, {
        return_url: url.toString()
    })

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