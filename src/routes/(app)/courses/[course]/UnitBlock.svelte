<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import Play from "svelte-material-icons/Play.svelte"
import Check from "svelte-material-icons/Check.svelte"
import { Unit, UnitStatus } from "$lib/types/unit"
import { onMount } from "svelte"
import Icon from "$lib/display/Icon.svelte"
import Text from "svelte-material-icons/Text.svelte"


export let level: number
export let unit: Unit
export let course_slug: string
export let el_map: Record<string, HTMLElement>

let element: HTMLElement

let form: string
switch (unit.status) {
    case UnitStatus.NotStarted:
        form = "not-started"
        break
    case UnitStatus.InProgress:
        form = "in-progress"
        break
    case UnitStatus.Completed:
        form = "completed"
        break
}

onMount(() => {
    console.log(element)
    el_map[unit.slug] = element
    el_map = el_map
})
</script>

<a
    style:padding-left={ level * 40 + "px" }
    class="unit"
    href="/courses/{course_slug}/{unit.slug}">
    <div class={form === "completed" ? "icon-button" : ""}>
        <IconButton
            style={(unit.status !== UnitStatus.NotStarted) ? "branded" : "translucent"}
            gamified={unit.status !== UnitStatus.Completed}
            icon={unit.status === UnitStatus.Completed ? Check : Play}
            opacity={unit.status === UnitStatus.NotStarted}
            bind:element/>
    </div>
    <div class="text {form}">
        {#if unit.status !== UnitStatus.NotStarted}
            <Icon
                color="brand"
                icon={Text}
                size={24}/>
        {/if}
        <div class={form}>
            { unit.name }
        </div>
    </div>
</a>

{#each unit.subunits as subunit}
    <svelte:self
        {course_slug}
        el_map={el_map}
        level={level+1}
        unit={subunit}/>
{/each}

<style lang="stylus">
@import "variables"

.unit
    display flex
    gap 24px
    align-items center
    outline 0
    color white
.text
    margin-top 8px
    display flex
    gap 8px
    font-size 16px
    font-weight 700
    align-items center
    opacity 0.5
    &.in-progress
        opacity 1

.icon-button
    opacity 0.5
    box-shadow 0 4px transparify($brand, 40%)
    border-radius 8px
    overflow hidden
</style>