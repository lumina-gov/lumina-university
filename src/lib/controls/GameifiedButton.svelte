<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import ButtonSound from "$lib/sounds/ButtonSound.wav"
import { type SvelteComponent, createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher()

export let icon: typeof SvelteComponent
export let style: "pressed" | "translucent" | "highlighted"
export let element: HTMLElement

function clicked(e: Event) {
    let audio = new Audio(ButtonSound)
    audio.play()
    dispatch("click", e)
}

function handle_keyup(e: KeyboardEvent) {
    if (e.key === "Enter") {
        clicked(e)
    }
}
</script>

<div
    bind:this={ element }
    class="button {style}"
    role="button"
    tabindex="0"
    on:click={ clicked }
    on:keyup={ handle_keyup }
>
    <Icon
        icon={icon}
        opacity={style === "highlighted" ? 1 : 0.5} />
</div>

<style lang="stylus">
@import 'variables'

.button
    padding 8px
    color white
    display inline-flex
    align-items center
    justify-content center
    cursor pointer
    font-size 24px
    position relative
    transition top 0.05s ease-in, box-shadow 0.05s ease-in
    border-radius 8px
    top 0
    &.pressed
        background $brand
        box-shadow 0 2px transparify($brand, 40%)
        top 6px
    &.translucent
        box-shadow 0 8px transparify(white, 10%)
        background transparify(white, 20%)
        &:active
            box-shadow 0 2px transparify(white, 10%)
            top 6px
    &.highlighted
        box-shadow 0 8px transparify($brand, 50%)
        background $brand
        &:active
            box-shadow 0 2px transparify($brand, 50%)
            top 6px


    </style>