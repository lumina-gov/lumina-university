<script lang="ts">
import type { Unit } from "$lib/types/unit"
import CourseSidebarItem from "./CourseSidebarItem.svelte"

export let course_slug: string
export let items: Unit[] = []

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