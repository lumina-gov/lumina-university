import type { SessionOfferWithTutor } from "$lib/types/session_offer"
import { fetch_as_json } from "$lib/utils/response"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ fetch }) => {
    return {
        session_offers: await fetch_as_json<SessionOfferWithTutor[]>(fetch, "/api/session-offers")
    }
}


