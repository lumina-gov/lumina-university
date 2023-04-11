<script lang="ts">
import { Unit } from "$lib/types/unit"
import OverviewBlock from "./OverviewBlock.svelte"

export let course_slug: string
export let units: Unit[]
</script>

<div class="wrapper">
    {#each units as unit}
        <OverviewBlock
            href={`/courses/${course_slug}/${unit.slug}`}
            status="in-progress"
            title={unit.name}/>
        {#if (unit.subunits.length > 0)}
            <div class="subunits">
                {#each unit.subunits as subunit}
                    <OverviewBlock
                        href={`/courses/${course_slug}/${subunit.slug}`}
                        status="not-started"
                        title={subunit.name}/>
                    {#if (subunit.subunits.length > 0)}
                        <div class="subunits">
                            {#each subunit.subunits as sub_subunit}
                                <OverviewBlock
                                    href={`/courses/${course_slug}/${sub_subunit.slug}`}
                                    status="not-started"
                                    title={sub_subunit.name}/>
                            {/each}
                        </div>
                    {/if}
                {/each}
            </div>
        {/if}
    {/each}
</div>

<style lang="stylus">
@import "variables"
.wrapper
    display flex
    flex-direction column
    align-items flex-start
    gap 40px
    width 100%

.subunits
    display flex
    flex-direction column
    align-items flex-start
    margin-left 40px
    gap 40px
</style>