<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import Play from "svelte-material-icons/Play.svelte"
import Check from "svelte-material-icons/Check.svelte"
import { Unit } from "$lib/types/unit"
import { onMount } from "svelte"
import Icon from "$lib/display/Icon.svelte"
import Text from "svelte-material-icons/Text.svelte"


export let level: number
export let unit: Unit
export let course_slug: string
export let el_map: Record<string, HTMLElement>
let element: HTMLElement

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
    <IconButton
        style="branded"
        gamified={true}
        icon={Play}
        opacity={false}
        bind:element/>
    <div class="text">
        <Icon
            color="brand"
            icon={Text}
            size={24}/>
        { unit.name }
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
a
    outline 0
    color white
.text
    margin-top 8px
    display flex
    gap 8px
    font-size 16px
    font-weight 700
    align-items center
</style>