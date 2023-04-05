

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