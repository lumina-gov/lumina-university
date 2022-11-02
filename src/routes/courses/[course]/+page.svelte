<script lang="ts">
import { page } from "$app/stores"
import PlayIcon from "$lib/display/PlayIcon.svelte"
import { Status } from "$lib/types/course"
import CourseSidebar from "./CourseSidebar.svelte"

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
<CourseSidebar
    {course_slug}
    items={items}/>