import { GetUnitDocument } from "$lib/hygraph/graphql-types.js"
import { error } from "@sveltejs/kit"

export async function load({ params, parent }) {
    const data = await parent()

    const res = await data.hygraph.gquery(GetUnitDocument, {
        unit_slug: params.unit,
    })

    if (res.error || !res.data) {
        throw error(500, {
            message: "Could not load unit",
            code: "UNIT_LOAD_ERROR",
        })
    }

    if (!res.data.unit) {
        throw error(404, {
            message: "Unit not found",
            code: "UNIT_NOT_FOUND",
        })
    }

    return {
        unit: res.data.unit,
    }
}