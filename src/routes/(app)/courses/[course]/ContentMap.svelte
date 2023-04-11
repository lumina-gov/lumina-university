<script lang="ts">
import { Unit } from "$lib/types/unit"
import UnitBlock from "./UnitBlock.svelte"

export let course_slug: string
export let units: Unit[]
</script>

<div class="wrapper">
    {#each units as unit}
        <UnitBlock
            {course_slug}
            level={1}
            {unit}
        />
    {/each}
</div>

<style lang="stylus">
@import "variables"
.wrapper
    display flex
    flex-direction column
    align-items flex-start
    gap 28px
    width 100%

</style>