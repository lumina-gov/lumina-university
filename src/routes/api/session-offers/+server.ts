import type { SessionOffer, SessionOfferWithTutor } from "$lib/types/session_offer"
import { db } from "$lib/utils/firebase_server"
import { json_as_response } from "$lib/utils/response"
import type { RequestHandler } from "@sveltejs/kit"
import { getAuth } from "firebase-admin/auth"

export const GET: RequestHandler = async () => {
    const collection = db.collection("session-offers")

    const snapshot = await collection.get()

    const session_offers: SessionOffer[] = []

    for (const doc of snapshot.docs) {
        const data = doc.data() as SessionOfferWithTutor
        const auth = getAuth()
        const user = await auth.getUser(data.tutor_user_id)

        data.id = doc.id

        data.tutor = {
            id: user.uid,
            name: user.displayName as string,
            email: user.email as string,
            photo_url: user.photoURL as string,
        }

        session_offers.push(data as SessionOffer)
        session_offers.push(data as SessionOffer)
        session_offers.push(data as SessionOffer)
    }

    return json_as_response(session_offers)
}

export default {}