<script lang="ts">
import type { Unit } from "$lib/types/unit"
import { get_paths_for_units } from "$lib/utils/path"
import { onDestroy, onMount, tick } from "svelte"
import UnitBlock from "./UnitBlock.svelte"
import { browser } from "$app/environment"
import { afterNavigate, beforeNavigate } from "$app/navigation"

export let course_slug: string
export let root_units: Unit[]
export let units: Unit[]

let wrapper: HTMLElement
let el_map = {}

const resize = () => units = units

onMount(() => {
    window.addEventListener("resize", resize)
})

onDestroy(() => {
    if(browser) window.removeEventListener("resize", resize)
})

beforeNavigate(() => {
    el_map = {}
})

$: paths = get_paths_for_units(units, wrapper, el_map)
afterNavigate(async () => {
    await tick()
    paths = get_paths_for_units(units, wrapper, el_map)
})


</script>

<div
    bind:this={ wrapper }
    class="wrapper">
    <svg
        height="100%"
        width="100%">
        <path
            d={paths.join(" ")}
            fill="none"
            stroke="currentColor"
            stroke-width="3" />
    </svg>
    {#each root_units as unit}
        <UnitBlock
            {course_slug}
            el_map={el_map}
            level={0}
            {unit}
        />
    {/each}
</div>

<style lang="stylus">
@import variables
.wrapper
    display flex
    flex-direction column
    align-items flex-start
    gap 20px
    width 100%
    position relative

svg
    position absolute
    color transparify(white, 10%)
    top 0
    bottom: 0
    right 0
    left 0
    z-index -1
</style>