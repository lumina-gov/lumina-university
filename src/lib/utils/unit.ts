import { Unit } from "$lib/types/unit"

export function flatten_unit(unit: Unit): Unit[] {
    const flattened: Unit[] = []
    flattened.push(unit)

    for (const subunit of unit.subunits) {
        flattened.push(...flatten_unit(subunit))
    }

    return flattened
}

export function flatten_units(units: Unit[]): Unit[] {
    const flattened: Unit[] = []

    for (const unit of units) {
        flattened.push(...flatten_unit(unit))
    }

    return flattened
}