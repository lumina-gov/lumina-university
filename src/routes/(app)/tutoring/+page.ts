import type { SessionOfferWithTutor } from "$lib/types/session_offer"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ fetch }) => {
    return {
        session_offers: [] as SessionOfferWithTutor[]
    }
}


