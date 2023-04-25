

export type Course = {
    name: string
    root_units: string[]
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