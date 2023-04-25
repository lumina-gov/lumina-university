import { UnitStatus } from "$lib/gql/graphql"

export type UnitData = {
    name: string
    subunits?: string[],
    free?: boolean
}

export type Unit = {
    name: string
    slug: string
    status: UnitStatus
    subunits: Unit[]
    free: boolean
}

export type UnitMap = Record<string, Unit>