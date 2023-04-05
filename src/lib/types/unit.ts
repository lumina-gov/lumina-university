
export type UnitData = {
    name: string
    subunits?: string[]
}

export type Unit = {
    name: string
    slug: string
    status: UnitStatus
    subunits: Unit[]
}

export type UnitMap = {
    [key: string]: Unit
}

export enum UnitStatus {
    Completed,
    NotStarted,
    InProgress,
}
