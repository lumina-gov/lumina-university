<script lang="ts">
import type { CoursesBySlugQuery } from "$lib/gql/graphql"
import CourseSidebarItem from "./CourseSidebarItem.svelte"

export let course_slug: string
export let items: CoursesBySlugQuery["course_by_slug"]["units"] = []
</script>
<div class="course-sidebar">
    {#each items as item}
        <CourseSidebarItem
            {course_slug}
            {item}
        />
    {/each}
</div>
<style lang="stylus">
@import "variables"

.course-sidebar
    display flex
    flex-direction column
</style>