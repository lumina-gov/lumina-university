<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Subheading from "$lib/display/Subheading.svelte"
import type { Unit } from "$lib/types/unit"
import ChevronLeft from "svelte-material-icons/ChevronLeft.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Text from "svelte-material-icons/Text.svelte"

export let direction: "next" | "previous"
export let unit: Unit | null
export let course: { slug: string }

</script>
<svelte:element
    this={ unit ? "a" : "div" }
    class="paginator"
    class:active={ unit !== null }
    class:next={ direction === "next" }
    href={unit ? `/courses/${course.slug}/${unit.slug}` : undefined}>
    {#if unit}
        <Icon
            color="brand"
            icon={direction === "next" ? ChevronRight : ChevronLeft}
            size={24}/>
        <div class="data">
            <Subheading>
                { direction === "next" ? "Next" : "Previous" } Unit
            </Subheading>
            <div class="name">
                <Icon
                    color="brand"
                    icon={Text}
                    size={18}/>
                { unit.name }
            </div>
        </div>
    {/if}
</svelte:element>
<style lang="stylus">
@import "variables"

.paginator
    width 100%
    display flex
    flex 1
    align-items center
    border-radius 4px
    gap 16px
    color white
    padding 16px
    border 1px solid transparify(white, 10%)
    &.next
        flex-direction row-reverse
    &.active
        border none
        background transparify(white, 6%)
        cursor pointer

    .data
        display flex
        flex 1
        flex-direction column
        gap 8px
        .name
            font-weight 700
            font-size 14px
            display flex
            align-items center
            gap 6px
</style>