<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import { Unit } from "$lib/types/unit"
import ChevronLeft from "svelte-material-icons/ChevronLeft.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import UnitBlock from "../UnitBlock.svelte"
import type { PageData } from "./$types"
import { flatten_unit } from "$lib/utils/unit"
import Icon from "$lib/display/Icon.svelte"
import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
import ChevronUp from "svelte-material-icons/ChevronUp.svelte"
import { UnitStatus } from "$lib/gql/graphql"

export let units: Unit[]
export let data: PageData
export let course_slug: string

let element: HTMLElement

function get_unit_relative(unit: Unit, direction: "previous" | "next"): Unit | null {
    let units_flattened = data.root_units.flatMap(unit => flatten_unit(unit))
    let index = units_flattened.findIndex(u => u.slug === unit.slug)
    let relative_index = direction === "previous" ? index - 1 : index + 1

    return units_flattened[relative_index] || null
}


$: previous_unit = get_unit_relative(data.units_by_slug[data.unit.slug], "previous")
$: next_unit = get_unit_relative(data.units_by_slug[data.unit.slug], "next")
</script>

<div class="wrapper">
    <IconButton
        style="transparent"
        element={element}
        href={previous_unit ? `/courses/${course_slug}/${previous_unit.slug}` : undefined}
        icon={ChevronLeft}
        opacity={true}
    />
    <div class="bar">
        {#each units as unit}
            <a
                class="seg"
                class:completed={ unit.status === UnitStatus.Completed }
                class:in-progress={ unit.status === UnitStatus.InProgress }
                class:not-started={ unit.status === UnitStatus.NotStarted }
                href={`/courses/${course_slug}/${unit.slug}`}
            >
                <!-- {#if unit.slug === data.unit.slug}
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
        element={element}
        href={next_unit ? `/courses/${course_slug}/${next_unit.slug}` : undefined}
        icon={ChevronRight}
        opacity={true}
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