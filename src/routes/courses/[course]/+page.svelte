<script lang="ts">
import { page } from "$app/stores"
import { UnitStatus, type Unit } from "$lib/types/unit"
import CourseSidebar from "./CourseSidebar.svelte"

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
<CourseSidebar
    {course_slug}
    items={items}/>