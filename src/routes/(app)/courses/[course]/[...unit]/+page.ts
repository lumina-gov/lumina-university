import { content } from "$lib/courses/content"
import { error, redirect } from "@sveltejs/kit"
import { SubscriptionStatus } from "$lib/gql/graphql"
import { MessageType } from "$lib/types/message"

export async function load({ params, parent }) {
    const data = await parent()
    const unit = data.course.units_by_slug[params.unit]

    if (!unit) {
        throw error(404, {
            message: "Unit not found",
            code: "UNIT_NOT_FOUND"
        })
    }

    // Get the markdown file as a string
    const file = content[`./${params.course}/${params.unit}.md`]
    let markdown = ""
    if (file) {
        markdown = await file()
    } else {
        throw error(404, {
            message: "Unit content not found",
            code: "UNIT_CONTENT_NOT_FOUND"
        })
    }

    const user = data.user_store.user
    const subscription_status = user?.stripe_subscription_info.status ?? SubscriptionStatus.None

    if (!unit.free && subscription_status === SubscriptionStatus.None) {
        data.alerts.create_alert(MessageType.Warning, "You must be subscribed to view this unit")
        throw redirect(307, "/account")
    }

    return {
        unit,
        markdown
    }
}