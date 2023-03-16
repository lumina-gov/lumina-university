
export type Unit = {
    id: string
    name: string
    slug: string
    created_at: string
    parent_unit?: string | null
    subunits: Unit[]
    order: number
}

export enum UnitStatus {
    Completed,
    NotStarted,
    InProgress,
}
