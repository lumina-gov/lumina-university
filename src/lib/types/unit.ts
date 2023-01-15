

export type Unit = {
    id: string
    name: string
    subunits?: Unit[]
    status: UnitStatus
}

export enum UnitStatus {
    Completed,
    NotStarted,
    InProgress,
}