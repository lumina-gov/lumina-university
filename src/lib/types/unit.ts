import { UnitStatus } from "$lib/gql/graphql"

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

export type UnitMap = Record<string, Unit>