import { Unit } from "./unit"


export type Course = {
    name: string
    root_units: string[]
    description: string
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
    root_units: Unit[],
    units_by_slug: Record<string, Unit>,
}