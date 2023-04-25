<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { Prop } from "$lib/utils/typed_props"
import { type SvelteComponent, createEventDispatcher } from "svelte"
import ButtonSound from "$lib/sounds/ButtonSound.wav"
let dispatch = createEventDispatcher()

export let href: string | null = null
export let icon: typeof SvelteComponent
export let opacity = 1
export let style: "translucent" | "transparent" | "branded" = "branded"
export let color: Prop<Icon, "color"> = undefined
export let use_sound = true
$: tag = href ? "a" : "div"

function clicked(e: Event) {
    if (use_sound) {
        let sound = new Audio(ButtonSound)
        sound.play()
    }
    dispatch("click", e)
}

function handle_keyup(e: KeyboardEvent) {
    if (e.key === "Enter") {
        clicked(e)
    }
}
</script>

<svelte:element
    this={ tag }
    class="button {style}"
    href={href}
    role="button"
    tabindex="0"
    on:click={ clicked }
    on:keyup={ handle_keyup }
>
    <Icon
        color={color}
        icon={icon}
        opacity={opacity}/>
</svelte:element>

<style lang="stylus">
@import 'variables'

.button
    padding 8px
    background none
    color white
    display inline-flex
    align-items center
    justify-content center
    border-radius 4px
    cursor pointer
    font-weight 600
    font-size 24px
    position relative
    &.opacity
        color transparify(white, 40%)
    &:hover
        background transparify(white, 12%)
        color white
    &:active
        background transparify(white, 8%)
        color white
    &:focus-visible
        outline $brand 2px dashed
        outline-offset 2px
    &.branded
        background $brand
        &:hover, &:focus
            background lighten($brand, 12%)
    &.translucent
        background transparify(white, 8%)
        &:hover, &:focus
            background: transparify(white, 12%)
        &:active
            background: transparify(white, 8%)
    &.transparent
        color transparify(white, 60%)
        background transparify(white, 0%)
        &:hover, &:focus
            background: transparify(white, 12%)
            color white
        &:active
            background: transparify(white, 6%)


</style>