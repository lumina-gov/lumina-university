import type { SvelteComponent } from "svelte"
import type { Unit } from "./unit"
import type Icon from "$lib/display/Icon.svelte"
import type { Prop } from "$lib/utils/typed_props"
import type Tag from "$lib/display/Tag.svelte"

type Modify<T, R> = Omit<T, keyof R> & R;

export type CourseRaw = {
    name: string
    tags: { name: string, color: Prop<Tag, "color"> }[]
    color: Prop<Icon, "color">
    icon: typeof SvelteComponent
    root_units: string[]
    prerequisites: string[]
    next_up: string[]
    recommended: string[]
    description: string
    image?: string
    units_by_slug: {
        [key: string]: {
            name: string
            subunits?: string[]
            free?: boolean
        }
    }
}

export type CourseFull = Modify<CourseRaw, {
    course_slug: string,
    root_units: Unit[],
    units_by_slug: Record<string, Unit>,
}>