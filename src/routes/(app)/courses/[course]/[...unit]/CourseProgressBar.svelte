<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import { Unit } from "$lib/types/unit"
import ChevronLeft from "svelte-material-icons/ChevronLeft.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import type { PageData } from "./$types"
import { flatten_unit } from "$lib/utils/unit"
import { UnitStatus } from "$lib/gql/graphql"
import { createEventDispatcher } from "svelte"
import CheckboxMarkedCircle from "svelte-material-icons/CheckboxMarkedCircle.svelte"
import { Prop } from "$lib/utils/typed_props"

export let units: Unit[]
export let data: PageData
export let unit: Unit
export let course_slug: string

let dispatch = createEventDispatcher<{ set_unit_progress: UnitStatus }>()

function get_unit_relative(unit: Unit, direction: "previous" | "next"): Unit | null {
    let units_flattened = data.root_units.flatMap(unit => flatten_unit(unit))
    let index = units_flattened.findIndex(u => u.unit_slug === unit.unit_slug)
    let relative_index = direction === "previous" ? index - 1 : index + 1

    return units_flattened[relative_index] || null
}

const progress_color: Record<UnitStatus, Prop<IconButton, "color">> = {
    [UnitStatus.NotStarted]: "white",
    [UnitStatus.InProgress]: "blue",
    [UnitStatus.Completed]: "brand"
}


$: previous_unit = get_unit_relative(data.units_by_slug[data.unit.unit_slug], "previous")
$: next_unit = get_unit_relative(data.units_by_slug[data.unit.unit_slug], "next")
</script>

<div class="wrapper">
    <IconButton
        style="transparent"
        href={previous_unit ? `/courses/${course_slug}/${previous_unit.unit_slug}` : undefined}
        icon={ChevronLeft}
        opacity={0.5}
        use_sound={true}
    />
    <div class="bar">
        {#each units as unit}
            <a
                class="seg"
                class:active={ unit.unit_slug === data.unit.unit_slug }
                class:completed={ unit.status === UnitStatus.Completed }
                class:in-progress={ unit.status === UnitStatus.InProgress }
                class:not-started={ unit.status === UnitStatus.NotStarted }
                href={`/courses/${course_slug}/${unit.unit_slug}`}
            >
                <!-- {#if unit.unit_slug === data.unit.unit_slug}
                    <div class="current u">
                        <Icon
                            color="white"
                            icon={ChevronDown}
                            opacity={0.4}
                            size={14}/>
                    </div>
                    <div class="current b">
                        <Icon
                            color="white"
                            icon={ChevronUp}
                            opacity={0.4}
                            size={14}/>
                    </div>
                {/if} -->
            </a>
        {/each}
    </div>
    <IconButton
        style="transparent"
        href={next_unit ? `/courses/${course_slug}/${next_unit.unit_slug}` : undefined}
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
    &.active
        background-color mix($brand, white, 50%)
    &.completed
        background-color $brand
    &.in-progress
        background-color $blue
    &.not-started
        background-color transparify(white, 20%)
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