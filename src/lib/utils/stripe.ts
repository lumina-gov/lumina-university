import { env } from "$env/dynamic/private"
import type { User } from "firebase/auth"
import Stripe from "stripe"

export const stripe = new Stripe(env.STRIPE_PRIVATE_KEY as string, {
    apiVersion: "2022-11-15",
})

export async function get_or_create_customer_for_user(user: User) {
    const user_email = user.email
    if (!user_email) {
        throw new Error("User does not have an email address", { cause: "no_email" })
    }

    const customers = await stripe.customers.list({
        email: user.email,
    })

    if (customers.data.length === 0) {
        const customer = await stripe.customers.create({
            email: user.email,
        })
        return customer
    }

    return customers.data[0]
}
