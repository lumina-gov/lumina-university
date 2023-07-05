<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import ChevronLeft from "svelte-material-icons/ChevronLeft.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import { createEventDispatcher } from "svelte"
import CheckboxMarkedCircle from "svelte-material-icons/CheckboxMarkedCircle.svelte"
import type { Prop } from "$lib/utils/typed_props"
import { UnitStatus } from "$lib/graphql/graphql-types"
import type { ExtendedUnit } from "$lib/types/unit"
import type { GetCourseQuery } from "$lib/hygraph/graphql-types"

export let units: ExtendedUnit[]
export let unit_map: Record<string, ExtendedUnit>
export let course: NonNullable<GetCourseQuery["course"]>
export let unit: ExtendedUnit

let dispatch = createEventDispatcher<{ set_unit_progress: UnitStatus }>()

function get_unit_relative(unit: ExtendedUnit, direction: "previous" | "next"): ExtendedUnit | null {
    let index = units.findIndex(u => u.slug === unit.slug)
    let relative_index = direction === "previous" ? index - 1 : index + 1

    return units[relative_index] || null
}

const progress_color: Record<UnitStatus, Prop<IconButton, "color">> = {
    [UnitStatus.NotStarted]: "white",
    [UnitStatus.InProgress]: "blue",
    [UnitStatus.Completed]: "brand"
}


$: previous_unit = get_unit_relative(unit_map[unit.slug], "previous")
$: next_unit = get_unit_relative(unit_map[unit.slug], "next")
</script>

<div class="wrapper">
    <IconButton
        style="transparent"
        href={previous_unit ? `/courses/${course.slug}/${previous_unit.slug}` : undefined}
        icon={ChevronLeft}
        opacity={0.5}
        use_sound={true}
    />
    <div class="bar">
        {#each units as other_unit}
            <a
                class="seg"
                class:active={ other_unit.slug === unit.slug }
                class:completed={ other_unit.status === UnitStatus.Completed }
                class:in-progress={ other_unit.status === UnitStatus.InProgress }
                class:not-started={ other_unit.status === UnitStatus.NotStarted }
                href={`/courses/${course.slug}/${other_unit.slug}`}>
                &nbsp;
            </a>
        {/each}
    </div>
    <IconButton
        style="transparent"
        href={next_unit ? `/courses/${course.slug}/${next_unit.slug}` : undefined}
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
@import variables

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