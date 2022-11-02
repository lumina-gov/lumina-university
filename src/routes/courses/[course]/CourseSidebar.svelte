<script lang="ts">
import type { Prop } from "$lib/utils/typed_props"
import CourseSidebarItem from "./CourseSidebarItem.svelte"

export let course_slug: string
export let items: Prop<CourseSidebarItem, "item">[] = []
</script>
<div class="course-sidebar">
    {#each items as item}
        <CourseSidebarItem
            {item}
            {course_slug}
            />
    {/each}
</div>
<style lang="stylus">
@import "variables"

.course-sidebar
    display flex
    flex-direction column
</style>