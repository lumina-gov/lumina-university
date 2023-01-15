import { auth, collections, db } from "$lib/utils/firebase_server"
import { json_as_response } from "$lib/utils/response"
import { error } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const POST: RequestHandler = async ({ request }) => {
    const book_session = await request.json() as {
        session_offer_id: string,
        hours: number,
    }

    // validate that we received the correct data
    if (typeof book_session.session_offer_id !== "string") {
        throw error(400, {
            message: "session_offer_id is required",
            code: "no_session_offer_id",
        })
    }
    if (typeof book_session.hours !== "number") {
        throw error(400, {
            message: "hours is required",
            code: "no_hours",
        })
    }

    // find the session offer
    const session_offer = await collections.session_offers.doc(book_session.session_offer_id).get()
    const session_offer_data = session_offer.data()

    if (!session_offer_data) {
        throw error(404, {
            message: `Session offer with id "${book_session.session_offer_id}" not found`,
            code: "session_offer_not_found",
        })
    }

    // find the tutor
    const user = await auth.getUser(session_offer_data.tutor_user_id)



    // create the session
    // const session = await collections.sessions.add({
    //     tutor_user_id: session_offer.tutor_user_id,
    //     created_at: new Date(),
    //     hours: book_session.hours,
    //     session_offer_id: book_session.session_offer_id,
    //     status: "pending",
    //     student_user_id: "foo",
    //     total_price: session_offer.price * book_session.hours,
    // })

    // const collection = db.collection("session-offers")

    // const doc = await collection.add(session_offer)

    return json_as_response({ id: "foo" })
}