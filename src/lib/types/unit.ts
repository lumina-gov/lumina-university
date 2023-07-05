import type { UnitStatus } from "$lib/graphql/graphql-types"
import type { BasicUnitInfoFragment } from "$lib/hygraph/graphql-types"

export type ExtendedUnit = BasicUnitInfoFragment & {
    status: UnitStatus,
    unitProgressUpdatedAt: string | null,
    subunits_extended: ExtendedUnit[],
}