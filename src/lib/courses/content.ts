import { Course } from "$lib/types/course"

export const content = import.meta.glob("./**/*.md", { as: "raw" }) as {
    [key: string]: undefined | (() => Promise<string>)
}

export const courses = import.meta.glob("./*/course.ts") as {
    [key: string]: undefined | (() => Promise<{ course: Course }>)
}