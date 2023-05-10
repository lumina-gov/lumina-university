<script lang="ts">
import { onMount, type SvelteComponent } from "svelte"
import { createEventDispatcher } from "svelte"
import ButtonSound from "$lib/sounds/ButtonSound.wav"

export let href: string | null = null
export let left_icon: typeof SvelteComponent | null = null
export let right_icon: typeof SvelteComponent | null = null
export let style: "translucent" | "transparent" | "branded" = "branded"
export let hug = true
export let disabled = false
export let text: string | null = null
export let target: string | null = null
export let use_sound = true

$: tag = (href ? "a" : "div") as "a" | "div"

let dispatch = createEventDispatcher()
let sound: HTMLAudioElement

onMount(() => {
    sound = new Audio(ButtonSound)
})

function clicked(e: Event) {
    !disabled && dispatch("click", e)
    if(use_sound) {
        sound.play()
    }
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
    class:disabled
    class:hug
    href={href}
    role="button"
    tabindex={disabled ? -1 : 0}
    target={target}
    on:click={ clicked }
    on:keyup={ handle_keyup }
>
    {#if left_icon}
        <span class="icon">
            <svelte:component this={ left_icon } />
        </span>
    {/if}
    {#if $$slots.default || text}
        <span class="text">
            <slot/>
            {#if text}
                { text }
            {/if}
        </span>
    {/if}
    {#if right_icon}
        <span class="icon">
            <svelte:component this={ right_icon } />
        </span>
    {/if}
</svelte:element>

<style lang="stylus">
@import 'variables'

.button
    padding 10px 10px
    color white
    display inline-flex
    user-select none
    align-items: center
    white-space nowrap
    justify-content: center
    border-radius 4px
    outline 0
    width 100%
    cursor pointer
    transition top 0.05s ease-in, box-shadow 0.05s ease-in, background 0.05s ease-in
    font-weight 600
    position relative
    top 0
    .text
        padding 0px 12px
    &.hug
        width auto
    .icon
        font-size: 20px
        display: inline-flex
    &:not(.disabled)
        &:focus-visible
            outline-effect()
        &.branded
            background $brand
            box-shadow 0 6px 0 transparify($brand, 50%)
            outline 0
            &:hover, &:focus
                background lighten($brand, 8%)
                box-shadow 0 6px lighten(transparify($brand, 50%), 12%)
            &:active
                top 6px
                box-shadow 0 1px 0 transparify($brand, 50%)
        &.translucent
            background transparify(white, 15%)
            box-shadow 0 6px 0 transparify(white, 8%)
            outline 0
            &:hover, &:focus
                background transparify(white, 18%)
                box-shadow 0 6px transparify(white, 12%)
            &:active
                top 5px
                box-shadow 0 1px 0 transparify(white, 8%)
                background: transparify(white, 8%)

        &.transparent
            color transparify(white, 60%)
            background transparify(white, 0%)
            &:hover, &:focus
                background: transparify(white, 12%)
                color white
            &:active
                background: transparify(white, 6%)
    &.disabled
        cursor default
        opacity 0.5
        background transparent
        outline 1px solid transparify(white, 10%)
        outline-offset 1px


</style>