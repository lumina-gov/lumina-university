import { GetCourseProgressDocument, UnitStatus } from "$lib/graphql/graphql-types.js"
import { GetCourseDocument } from "$lib/hygraph/graphql-types.js"
import type { ExtendedUnit } from "$lib/types/unit"
import { error } from "@sveltejs/kit"

export async function load ({ parent, params }) {
    const data = await parent()

    const res = await data.hygraph.gquery(GetCourseDocument, {
        slug: params.course
    })

    if (res.error || !res.data) {
        throw error(500, {
            message: "Could not load courses",
            code: "COURSES_LOAD_ERROR",
        })
    }

    if (!res.data.course) {
        throw error(404, {
            message: "Course not found",
            code: "COURSE_NOT_FOUND",
        })
    }

    // transform units into a tree structure
    const units = res.data.course.units as ExtendedUnit[]
const unit_map: Record<string, ExtendedUnit> = {}
    units.map(u => {
        u.status = UnitStatus.NotStarted
        u.unitProgressUpdatedAt = null
        u.subunits_extended = []
        unit_map[u.slug] = u
    })
    units.map(u => {
        if (u.parentUnit) {
            const parent = unit_map[u.parentUnit.slug]
            if (parent) {
                parent.subunits_extended.push(u)
            }
        }
    })

    // if user is logged in, load unit progress
    if (data.user_store.user) {
        const res = await data.graph.gquery(GetCourseProgressDocument, {
            course_slug: params.course,
            userID: data.user_store.user.id,
        })

        if (res.error || !res.data) {
            throw error(500, {
                message: "Could not load unit progress",
                code: "UNIT_PROGRESS_LOAD_ERROR",
            })
        }

        for (const up of res.data.course_progress) {
            const unit = unit_map[up.unit_slug]
            if (!unit) continue
            unit.status = up.status
            unit.unitProgressUpdatedAt = up.updated_at
        }
    }

    return {
        course: res.data.course,
        units,
        unit_map,
    }
}

