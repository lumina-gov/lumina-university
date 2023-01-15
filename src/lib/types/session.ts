export type Session = {
    id: string
    student_user_id: string
    tutor_user_id: string
    session_offer_id: string
    hours: number
    created_at: Date
    total_price: number
    status: "pending" | "in_progress" | "completed" | "cancelled"
}