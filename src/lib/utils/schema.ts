import type { Thing, WithContext } from "schema-dts"

export type Schema = Thing | WithContext<Thing>

export function serializeSchema(thing: Schema): string {
    return JSON.stringify(
        thing,
        null,
        2
    )
}