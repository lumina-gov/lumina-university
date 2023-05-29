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
        "introduction",
        "html-elements",
        "html-formatting",
        "html-attributes",
        "html-comments",
        "whitespace",
        "semantic-html",
        "html-metadata",
        "final"
    ],
    units_by_slug: {
        "introduction": {
            name: "Introduction",
            subunits: [
                "introduction/what-is-html",
                "introduction/html-document-structure",
                "introduction/introducing-elements-and-attributes",
                "introduction/styling",
                "introduction/terminology",
            ],
            free: true,
        },
        "introduction/what-is-html": {
            name: "What is HTML?",
            subunits: [],
            free: true,
        },
        "introduction/html-document-structure": {
            name: "HTML Document Structure",
            subunits: [],
            free: true,
        },
        "introduction/introducing-elements-and-attributes": {
            name: "Introducing Elements and Attributes",
            subunits: [],
            free: true,
        },
        "introduction/styling": {
            name: "Basics of Styling",
            subunits: [],
            free: true,
        },
        "introduction/terminology": {
            name: "Terminology",
            subunits: [],
            free: true,
        },
        "html-elements": {
            name: "HTML Elements",
            subunits: [
                "html-elements/types-of-elements",
                "html-elements/headings",
                "html-elements/links-and-navigation",
                "html-elements/nesting-elements",
                "html-elements/the-div",
                "html-elements/paragraphs",
                "html-elements/images",
                "html-elements/lists",
                "html-elements/tables",

            ],
            free: true,
        },
        "html-elements/types-of-elements": {
            name: "Types of Elements",
            subunits: [],
            free: true,
        },
        "html-elements/headings": {
            name: "Headings",
            subunits: [],
            free: true,
        },
        "html-elements/links-and-navigation": {
            name: "Links and Navigation",
            subunits: [],
            free: true,
        },
        "html-elements/the-div": {
            name: "The Div",
            subunits: [],
            free: true,
        },
        "html-elements/paragraphs": {
            name: "Paragraphs",
            subunits: [],
            free: true,
        },
        "html-elements/nesting-elements": {
            name: "Nesting Elements",
            subunits: [],
            free: true,
        },
        "html-elements/lists": {
            name: "Lists",
            subunits: [],
            free: false,
        },
        "html-elements/images": {
            name: "Images",
            subunits: [],
            free: false,
        },
        "html-elements/tables": {
            name: "Tables",
            subunits: [],
            free: false,
        },
        "html-formatting": {
            name: "HTML Formatting",
            subunits: [],
            free: false,
        },
        "html-attributes": {
            name: "HTML Attributes",
            subunits: [
                "html-attributes/global-attributes",
                "html-attributes/element-specific-attributes",
                "html-attributes/input-attributes",
                "html-attributes/anchor-attributes",
                "html-attributes/video-attributes",
            ],
            free: false,
        },
        "html-attributes/global-attributes": {
            name: "Global Attributes",
            subunits: [],
            free: false,
        },
        "html-attributes/element-specific-attributes": {
            name: "Element-Specific Attributes",
            subunits: [],
            free: false,
        },
        "html-attributes/input-attributes": {
            name: "Input Attributes",
            subunits: [],
            free: false,
        },
        "html-attributes/anchor-attributes": {
            name: "Anchor Attributes",
            subunits: [],
            free: false,
        },
        "html-attributes/video-attributes": {
            name: "Video Attributes",
            subunits: [],
            free: false,
        },
        "html-comments": {
            name: "HTML Comments",
            subunits: [],
            free: false,
        },
        "whitespace": {
            name: "Whitespace",
            subunits: [],
            free: false,
        },
        "semantic-html": {
            name: "Semantic HTML",
            subunits: [],
            free: false,
        },
        "html-metadata": {
            name: "HTML Metadata",
            subunits: [],
            free: false,
        },
        "final": {
            name: "Final Notes",
            subunits: [],
            free: false,
        },
    },
}