export type SessionOffer = {
    id: string
    name: string
    description: string
    subject: string
    price_per_hour: number
    min_hours: number
    max_hours: number
    created_at: Date
    is_active: boolean
    tutor: {
        id: string
        name: string
        email: string
        photo_url: string
    }
}