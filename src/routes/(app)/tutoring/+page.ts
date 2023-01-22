import type { SessionOfferWithTutor } from "$lib/types/session_offer"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ fetch }) => {
    return {
        session_offers: [
            {
                id: "123412",
                name: "Foo bar",
                description: "Foo bar",
                subject: "Foo bar",
                price_per_hour: 10,
                min_hours: 1,
                max_hours: 3,
                created_at: new Date(),
                is_active: true,
                tutor_user_id: "Foo bar",
                tutor: {
                    id: "123",
                    name: "foo bar",
                    email: "123@123",
                    photo_url: null,
                }
            }
        ] as SessionOfferWithTutor[]
    }
}


