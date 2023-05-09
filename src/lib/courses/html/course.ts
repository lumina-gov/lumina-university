import type { CourseRaw } from "$lib/types/course"
import LanguageHtml5 from "svelte-material-icons/LanguageHtml5.svelte"
import CourseImage from "./CourseImage.png"

export const course: CourseRaw = {
    color: "orange",
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
    icon: LanguageHtml5,
    next_up: ["css"],
    image: CourseImage,
    prerequisites: ["programmatic-thinking"],
    recommended: [],
    name: "HTML",
    description: "Master the fundamentals of HTML, the foundational language for web development. Learn to create structured, accessible, and visually appealing websites.",
    root_units: [

    ],
    units_by_slug: {

    },
}