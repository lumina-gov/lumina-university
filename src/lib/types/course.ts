import type { SvelteComponent } from "svelte"
import type { Unit } from "./unit"


export type Course = {
    name: string
    root_units: string[]
    prerequisites: {name: string, slug: string}[]
    next_up: {name: string, slug: string}[]
    description: string
    image: string
    icon: typeof SvelteComponent
    units_map: {
        [key: string]: {
            name: string
            subunits?: string[]
            free?: boolean
        }
    }
}

export type CourseExtendedData = Course & {
    course_slug: string
}

export type CourseWithProgress = {
    course_slug: string,
    name: string,
    description: string,
    icon: typeof SvelteComponent,
    root_units: Unit[],
    units_by_slug: Record<string, Unit>,
}