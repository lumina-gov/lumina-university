<script lang="ts">
import { courses } from "$lib/courses/content"
import type { CourseRaw } from "$lib/types/course"
import type { LeafDirective } from "mdast-util-directive/lib"
import { onMount } from "svelte"
import Course from "../Course.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
export let block: LeafDirective

$: slug = block.attributes?.slug as string

let course: CourseRaw & { course_slug: string } | null = null

onMount(async () => {
    console.log(courses)
    let imported_course = await courses[`./${slug}/course.ts`]()
    course = { ...imported_course.course, course_slug: slug }
})
</script>
{#if course}
    <Course course={course}/>
{:else}
    <Paragraph>Loading course...</Paragraph>
{/if}