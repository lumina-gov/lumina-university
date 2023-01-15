<script lang="ts">
import { page } from "$app/stores"
import { UnitStatus } from "$lib/types/unit"
import CourseSidebar from "../CourseSidebar.svelte"

$: course_slug = $page.params.course

export let items: Unit[] = [
    {
        id: "basics-of-energy",
        name: "Basics of Energy",
        status: UnitStatus.Completed,
    },
    {
        id: "renewable-energy",
        name: "Renewable Energy",
        status: UnitStatus.InProgress,
        subunits: [
            {
                id: "solar-energy",
                name: "Solar Energy",
                status: UnitStatus.InProgress,
            },
            {
                id: "wind-energy",
                name: "Wind Energy",
                status: UnitStatus.NotStarted,
            },
            {
                id: "geothermal-energy",
                name: "Geothermal Energy",
                status: UnitStatus.NotStarted,
            },
        ]
    },
    {
        id: "energy-storage",
        name: "Energy Storage",
        status: UnitStatus.NotStarted
    },
    {
        id: "electric-vehicles",
        name: "Electric Vehicles",
        status: UnitStatus.NotStarted
    },
    {
        id: "electric-transportation",
        name: "Electric Transportation",
        status: UnitStatus.NotStarted
    },
    {
        id: "electricity-markets",
        name: "Electricity Markets",
        status: UnitStatus.NotStarted
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