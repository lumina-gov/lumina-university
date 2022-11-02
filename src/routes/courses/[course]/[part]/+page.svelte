<script lang="ts">
import { page } from "$app/stores"
import PlayIcon from "$lib/display/PlayIcon.svelte"
import { Status } from "$lib/types/course"
import CourseSidebar from "../CourseSidebar.svelte"

$: course_slug = $page.params.course

export let items = [
    {
        slug: "basics-of-energy",
        name: "Basics of Energy",
        status: Status.Completed,
    },
    {
        slug: "renewable-energy",
        name: "Renewable Energy",
        status: Status.InProgress
    },
    {
        slug: "energy-storage",
        name: "Energy Storage",
        status: Status.NotStarted
    },
    {
        slug: "electric-vehicles",
        name: "Electric Vehicles",
        status: Status.NotStarted
    },
    {
        slug: "electric-transportation",
        name: "Electric Transportation",
        status: Status.NotStarted
    },
    {
        slug: "electricity-markets",
        name: "Electricity Markets",
        status: Status.NotStarted
    },
]

</script>
<div class="course">
    <CourseSidebar
        {course_slug}
        items={items}/>
    <div class="content">
        <h1>Course content goes here</h1>
    </div>
</div>
<style lang="stylus">
@import "variables"

.course
    display grid
    grid-template-columns 350px 1fr
    height 100%
    .content
        height 100%
        overflow-y auto
        border-left 1px solid transparify(white, 10%)
</style>