<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import type { Unit } from "$lib/types/unit"
import ChevronLeft from "svelte-material-icons/ChevronLeft.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import { flatten_unit } from "$lib/utils/unit"
import { createEventDispatcher } from "svelte"
import CheckboxMarkedCircle from "svelte-material-icons/CheckboxMarkedCircle.svelte"
import type { Prop } from "$lib/utils/typed_props"
import type { CourseFull } from "$lib/types/course"
import { UnitStatus } from "$lib/graphql/graphql-types"

export let units: Unit[]
export let course: CourseFull
export let unit: Unit
export let current_unit: Unit

let dispatch = createEventDispatcher<{ set_unit_progress: UnitStatus }>()

function get_unit_relative(unit: Unit, direction: "previous" | "next"): Unit | null {
    let units_flattened = course.root_units.flatMap(unit => flatten_unit(unit))
    let index = units_flattened.findIndex(u => u.unit_slug === unit.unit_slug)
    let relative_index = direction === "previous" ? index - 1 : index + 1

    return units_flattened[relative_index] || null
}

const progress_color: Record<UnitStatus, Prop<IconButton, "color">> = {
    [UnitStatus.NotStarted]: "white",
    [UnitStatus.InProgress]: "blue",
    [UnitStatus.Completed]: "brand"
}


$: previous_unit = get_unit_relative(course.units_by_slug[current_unit.unit_slug], "previous")
$: next_unit = get_unit_relative(course.units_by_slug[current_unit.unit_slug], "next")
</script>

<div class="wrapper">
    <IconButton
        style="transparent"
        href={previous_unit ? `/courses/${course.course_slug}/${previous_unit.unit_slug}` : undefined}
        icon={ChevronLeft}
        opacity={0.5}
        use_sound={true}
    />
    <div class="bar">
        {#each units as unit}
            <a
                class="seg"
                class:active={ unit.unit_slug === current_unit.unit_slug }
                class:completed={ unit.status === UnitStatus.Completed }
                class:in-progress={ unit.status === UnitStatus.InProgress }
                class:not-started={ unit.status === UnitStatus.NotStarted }
                href={`/courses/${course.course_slug}/${unit.unit_slug}`}>
                &nbsp;
            </a>
        {/each}
    </div>
    <IconButton
        style="transparent"
        href={next_unit ? `/courses/${course.course_slug}/${next_unit.unit_slug}` : undefined}
        icon={ChevronRight}
        opacity={0.5}
        use_sound={true}
    />
    <IconButton
        style="transparent"
        color={progress_color[unit.status]}
        icon={CheckboxMarkedCircle}
        opacity={unit.status === UnitStatus.NotStarted ? 0.5 : 1}
        use_sound={true}
        on:click={ () => dispatch("set_unit_progress", unit.status === UnitStatus.Completed ? UnitStatus.NotStarted : UnitStatus.Completed) }
    />

</div>

<style lang="stylus">
@import "variables"

.wrapper
    display flex
    align-items center
    width 100%
    gap 8px
.bar
    display flex
    flex 1
    gap 1px
    height 10px
    border-radius 100px
    width 100%
    overflow hidden
.seg
    display flex
    position relative
    flex 1
    &.completed
        background-color $brand
    &.in-progress
        background-color $blue
    &.not-started
        background-color transparify(white, 20%)
    &.active
        background-color $yellow

    &:hover
        background-color transparify(white, 50%)
    &:active
        background-color transparify(white, 80%)

// .current
//     position absolute
//     &.u
//         top -16px
//         left 0px
//     &.b
//         bottom -16px

</style>