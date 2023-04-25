import type { PageLoad } from "./$types"
import { get_full_course } from "$lib/courses/content"
import { graphql } from "$lib/gql"
import { error } from "@sveltejs/kit"
import { UnitStatus } from "$lib/gql/graphql"
import { flatten_units } from "$lib/utils/unit"
// if user is unauthed, return null
// if user is authed, 
//     request the recently completed unit
//     if the recently completed unit is null, return null
//     otherwise request the course progress for the course of the recently completed unit
//     if the course data is null throw an error
export const load = (async ({ parent }) => {
    const data = await parent()
    if (data.user_store.user === null) {
        return {recent_course: null}
    }


    const last_updated_unit_req = await data.graph.gquery(graphql(`
        query LastUpdatedUnit {
            last_updated_unit {
                id
                status
                user_id
                unit_slug
                course_slug
                updated_at
            }
        }
    `), {})

    if (last_updated_unit_req.error) {
        throw error(500, {
            message: last_updated_unit_req.error.message,
            code: "COURSE_PROGRESS_ERROR"
        })
    }

    const course = last_updated_unit_req?.data?.last_updated_unit?.course_slug
    if (!course) {
        return {recent_course: null}
    }
    const unit_slug = last_updated_unit_req?.data?.last_updated_unit?.unit_slug
    const last_updated_course_progress = await data.graph.gquery(graphql(`
        query GetCourseProgress($course_slug: String!) {
            course_progress(course_slug: $course_slug) {
                id
                status
                user_id
                unit_slug
                course_slug
                updated_at
            }
        }
    `), {course_slug: (typeof course === "string") ? course : ""})

    if (last_updated_course_progress.error) {
        throw error(500, {
            message: last_updated_course_progress.error.message,
            code: "COURSE_PROGRESS_ERROR"
        })
    }
    const units_progress_map: { [key: string]: UnitStatus } = {}
    last_updated_course_progress.data?.course_progress.map(progress => {
        units_progress_map[progress.unit_slug] = progress.status
    })
    if (!course) {
        throw error(500, {
            message: "Course not found",
            code: "COURSE_NOT_FOUND"
        })
    }
    const full_course = await get_full_course(course, units_progress_map)
    const flattened_units = flatten_units((await full_course).root_units)
    const index_object = flattened_units.find(unit => unit.slug === unit_slug)
    if (index_object === undefined) {
        throw error(500, {
            message: "Unit not found",
            code: "UNIT_NOT_FOUND"
        })
    }
    return {
        recent_course: {
            slug: course,
            number_completed: (Object.values(units_progress_map).filter(unit => unit === "COMPLETED").length),
            course_length: Object.entries(units_progress_map).length,
            last_unit: unit_slug,
            current_index: flattened_units.indexOf(index_object) + 1,
            description: full_course.description
        }
    }
}) satisfies PageLoad