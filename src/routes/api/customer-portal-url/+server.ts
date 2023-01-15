// import { authenticate_user_from_credential } from "$lib/utils/auth"
// import { get_or_create_customer_for_user, stripe } from "$lib/utils/stripe"
// import type { RequestHandler } from "@sveltejs/kit"
// import { json } from "@sveltejs/kit"

// // This API will be called from the frontend in order to obtain a URL for the
// // stripe customer portal.
// export const POST: RequestHandler = async ({ request }) => {
//     const { user_access_token, return_url } = await request.json() as {
//         user_access_token: string
//         return_url?: string
//     }

//     if (!user_access_token) {
//         return json({
//             error: {
//                 message: "Missing user access token",
//                 code: "missing_user_access_token",
//             }
//         })
//     }

//     const user = await authenticate_user_from_credential(user_access_token)

//     if (!user) {
//         return json({
//             error: {
//                 message: "Invalid user access token",
//                 code: "invalid_user_access_token",
//             }
//         })
//     }

//     const stripe_customer = await get_or_create_customer_for_user(user)

//     const session = await stripe.billingPortal.sessions.create({
//         customer: stripe_customer.id,
//         return_url,
//     })

//     return json({
//         url: session.url,
//     })
// }