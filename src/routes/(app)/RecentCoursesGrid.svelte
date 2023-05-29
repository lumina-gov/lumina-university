<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import type { CourseFull } from "$lib/types/course"
import Plus from "svelte-material-icons/Plus.svelte"
import DashboardCourse from "./DashboardCourse.svelte"


export let recent_data: {
    unit_slug: string
    course: CourseFull
}[]

</script>


<Grid
    columns={{
        "mobile": 1,
        "tablet": 2,
        "laptop": 3
    }}
    side_padding={false}>
    {#each recent_data as course}
        <DashboardCourse
            data={course}
            enlarge={false}/>
    {/each}
    <a
        class="add-course"
        href="/courses">
        <Icon
            color="white"
            icon={Plus}
            size={32}/>
        Find new course
    </a>
</Grid>

<style lang="stylus">
@import variables
.add-course
    min-height 200px
    height 100%
    display flex
    align-items center
    justify-content center
    background transparify(white, 4%)
    border-radius 4px
    gap 6px
    flex-direction column
    color transparify(white, 60%)
    &:hover, &:focus
        color white
        outline 2px dashed $brand
        outline-offset 4px
</style>