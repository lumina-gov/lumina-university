import type { LayoutLoad } from "./$types"
import { error } from "@sveltejs/kit"

export const load: LayoutLoad = async ({ parent }) => {
    const data = await parent()

    if (!data.user_container.user) {
        throw error(401, "Unauthorized")
    }

    return {
        user_container: {
            user: data.user_container.user,
        }
    }
}