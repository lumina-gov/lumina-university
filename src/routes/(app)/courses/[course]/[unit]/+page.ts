import { SubscriptionStatus } from "$lib/graphql/graphql-types"
import { GetUnitDocument } from "$lib/hygraph/graphql-types.js"
import { MessageType } from "$lib/types/message"
import { error, redirect } from "@sveltejs/kit"

export async function load({ params, parent }) {
    const data = await parent()

    const res = await data.hygraph.gquery(GetUnitDocument, {
        unit_slug: params.unit,
    })

    if (res.error || !res.data) {
        throw error(500, {
            message: "Could not load unit",
            code: "UNIT_LOAD_ERROR",
        })
    }

    if (!res.data.unit) {
        throw error(404, {
            message: "Unit not found",
            code: "UNIT_NOT_FOUND",
        })
    }

    const user = data.user_store.user
    const subscription_status = user?.stripe_subscription_info.status ?? SubscriptionStatus.None


    if (!res.data.unit.free && subscription_status === SubscriptionStatus.None) {
        data.alerts.create_alert(MessageType.Warning, "You must be subscribed to view this unit")
        throw redirect(307, "/account")
    }

    return {
        unit: res.data.unit,
    }
}