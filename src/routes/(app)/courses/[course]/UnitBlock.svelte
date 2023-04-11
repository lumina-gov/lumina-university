<script lang="ts">
import { Unit } from "$lib/types/unit"

export let level: number
export let unit: Unit
export let course_slug: string
console.log(level)
</script>

<a
    style:padding-left={ level * 40 + "px" }
    class="unit"
    href="/courses/{course_slug}/{unit.slug}">
    { unit.name }
</a>

{#each unit.subunits as subunit}
    <svelte:self
        level={level+1}
        unit={subunit}/>
{/each}

<style lang="stylus">
@import "variables"

.unit
    display flex


</style>