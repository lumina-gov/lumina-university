<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Subheading from "$lib/display/Subheading.svelte"
import ChevronLeft from "svelte-material-icons/ChevronLeft.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Text from "svelte-material-icons/Text.svelte"
import ButtonSound from "$lib/sounds/ButtonSound.wav"
import type { ExtendedUnit } from "$lib/types/unit"


export let direction: "next" | "previous"
export let unit: ExtendedUnit | null
export let course: { slug: string }

function pressed() {
    if(!unit) return
    let audio = new Audio(ButtonSound)
    audio.play()
}

function keyup(e: KeyboardEvent) {
    if(e.key === "Enter") {
        pressed()
    }
}

</script>
<svelte:element
    this={ unit ? "a" : "div" }
    class="paginator"
    class:active={ unit !== null }
    class:next={ direction === "next" }
    href={unit ? `/courses/${course.slug}/${unit.slug}` : undefined}
    on:click={ pressed }
    on:keyup={ keyup }>
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
@import variables

.paginator
    width 100%
    outline 0
    min-width 0
    display flex
    flex 1
    align-items center
    border-radius 4px
    gap 16px
    color white
    padding 16px
    &.next
        flex-direction row-reverse
    &.active
        transition top 0.1s ease-in-out, box-shadow 0.1s ease-in-out
        box-shadow 0 8px 0 transparify(white, 6%)
        background transparify(white, 12%)
        top 0
        position relative
        cursor pointer
        &:active
            top 8px
            box-shadow 0 0 0 transparify(white, 6%)

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