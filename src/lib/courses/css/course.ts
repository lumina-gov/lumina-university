import type { CourseRaw } from "$lib/types/course"
import CourseImage from "./CourseImage.png"
import Brush from "svelte-material-icons/Brush.svelte"

export const course: CourseRaw = {
    color: "blue",
    tags: [
        {
            name: "Web",
            color: "red",
        },
        {
            name: "Programming",
            color: "green",
        }
    ],
    icon: Brush,
    image: CourseImage,
    prerequisites: ["html"],
    next_up: [],
    recommended: [],
    name: "CSS",
    description: "Discover CSS essentials to design visually stunning and responsive websites. Transform layouts, colors, fonts, and animations to create a captivating user experience.",
    root_units: [

    ],
    units_by_slug: {

    },
}