import { Course } from "$lib/types/course"

export const course: Course = {
    name: "Programming",
    root_units: ["introduction"],
    units_map: {
        "introduction": {
            name: "Introduction",
            subunits: ["introduction/test-unit"]
        },
        "introduction/test-unit": {
            name: "Test Unit",
        }
    }
}