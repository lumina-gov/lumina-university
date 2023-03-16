import { graphql } from "$lib/gql"
import { CoursesBySlugQuery } from "$lib/gql/graphql"
import { Unit } from "$lib/types/unit"
import { error } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ params, parent }) => {
    const data = await parent()

    const query = await data.graph.gquery(graphql(`
        query CoursesBySlug($slug: String!) {
            course_by_slug(slug: $slug) {
                id
                name
                slug
                units {
                    id
                    name
                    slug
                    created_at
                    parent_unit
                    order
                }
            }
        }`), { slug: params.course })

    if(!query.data?.course_by_slug) {
        throw error(404, {
            message: "Course not found",
            code: "COURSE_NOT_FOUND"
        })
    }

    return {
        course: query.data.course_by_slug,
        units_tree: units_query_to_unit_tree(query.data.course_by_slug.units),
        slug: params.course
    }
}

function sort_units(units: Unit[]) {
    units.sort((a, b) => {
        return a.order - b.order
    })
}

function units_query_to_unit_tree(units: NonNullable<CoursesBySlugQuery["course_by_slug"]>["units"]): Unit[] {
    // Create a map of units by id
    const units_by_id: { [key: string]: Unit } = {}
    // Create a list of root units
    const root_units: Unit[] = []

    // Add units to map, and empty subunits array
    units.map(unit => {
        units_by_id[unit.id] = {
            ...unit,
            subunits: []
        }
    })

    // Add subunits to units
    Object.values(units_by_id).map(unit => {
        if(unit.parent_unit) {
            units_by_id[unit.parent_unit].subunits.push(unit)
        } else {
            root_units.push(unit)
        }
    })

    // Sort root units
    sort_units(root_units)

    // Sort subunits
    Object.values(units_by_id).map(unit => {
        sort_units(unit.subunits)
    })

    return root_units
}