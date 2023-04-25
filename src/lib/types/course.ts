import { Unit } from "./unit"


export type Course = {
    name: string
    root_units: string[]
    units_map: {
        [key: string]: {
            name: string
            subunits?: string[]
        }
    }
}

export type CourseExtendedData = Course & {
    course_slug: string
}

export type CourseWithProgress = {
    slug: string,
    name: string,
    root_units: Unit[],
    units_by_slug: Record<string, Unit>,
}