import type { SessionOffer } from "$lib/types/session_offer"
import { db } from "$lib/utils/firebase_server"
import { json_as_response } from "$lib/utils/response"
import type { RequestHandler } from "@sveltejs/kit"
import { getAuth } from "firebase-admin/auth"

export const GET: RequestHandler = async () => {
    const collection = db.collection("session-offers")


    const snapshot = await collection.get()

    const session_offers: SessionOffer[] = []

    for (const doc of snapshot.docs) {
        const data = doc.data()
        const auth = getAuth()
        const user = await auth.getUser(data.tutor_user_id)

        data.tutor = {
            id: user.uid,
            name: user.displayName,
            email: user.email,
            photo_url: user.photoURL,
        }

        session_offers.push(data as SessionOffer)
        session_offers.push(data as SessionOffer)
        session_offers.push(data as SessionOffer)
    }

    return json_as_response(session_offers)
}