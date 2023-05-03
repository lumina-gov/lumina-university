import type { CourseRaw } from "$lib/types/course"
import Information from "svelte-material-icons/Information.svelte"

export const course: CourseRaw = {
    color: "red",
    icon: Information,
    next_up: [],
    prerequisites: [],
    recommended: [],
    name: "Test Course",
    description: "This is a test course",
    root_units: [
        "test-unit",
    ],
    units_by_slug: {
        "test-unit": {
            name: "Test Unit",
            subunits: [],
            free: true,
        },
    },
}