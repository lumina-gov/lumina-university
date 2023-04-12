<script lang="ts">
import { type SvelteComponent, createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher()

export let href: string | null = null
export let icon: typeof SvelteComponent | null = null
export let opacity = true
export let gamified = false
export let style: "translucent" | "transparent" | "branded" = "branded"
export let element: HTMLElement
$: tag = href ? "a" : "div"

function clicked(e: Event) {
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
    bind:this={ element }
    class="button {style}"
    class:gamified
    class:opacity
    href={href}
    role="button"
    tabindex="0"
    on:click={ clicked }
    on:keyup={ handle_keyup }
>
    <svelte:component this={ icon } />
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
    transition top 0.05s ease-in, box-shadow 0.05s ease-in
    top 0
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
        &.gamified
            border-radius 8px
            outline 4px solid transparify(black, 20%)
            outline-offset -4px
            background $brand
            box-shadow 0 8px 0 transparify($brand, 50%)
            &:active
                top 6px
                box-shadow 0 2px 0 transparify($brand, 50%)
    &.translucent
        background transparify(white, 8%)
        &:hover, &:focus
            background: transparify(white, 12%)
        &:active
            background: transparify(white, 8%)
        &.gamified
            background transparify(white, 15%)
            box-shadow 0 8px 0 transparify(white, 8%)
            outline 4px solid transparify(black, 20%)
            outline-offset -4px
            &:active
                top 6px
                box-shadow 0 2px 0 transparify(white, 8%)
    &.transparent
        color transparify(white, 60%)
        background transparify(white, 0%)
        &:hover, &:focus
            background: transparify(white, 12%)
            color white
        &:active
            background: transparify(white, 6%)


</style>