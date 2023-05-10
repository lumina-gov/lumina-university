<script lang="ts">
export let padding = "0px"
export let max_width: string | undefined = undefined
export let shadow = true
export let direction: "vertical" | "horizontal" = "vertical"
export let gap: number | string = 0
export let reset_bg = false
export let opacity = false
export let align_items:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "normal" = "center"
export let justify_content:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "normal" = "normal"

</script>

<div
    style:max-width={ max_width }
    style:gap={ typeof gap === "number" ? gap + "px" : gap }
    style:align-items={ align_items }
    style:justify-content={ justify_content }
    style:padding
    class="card"
    class:horizontal={ direction === "horizontal" }
    class:opacity
    class:reset_bg
    class:shadow
    class:vertical={ direction === "vertical" }
>
    <slot />
</div>

<style lang="stylus">
@import 'variables'

.card
    border-radius 6px
    color white
    background transparify(white, 4%)
    width 100%
    display flex
    &.shadow
        box-shadow 0 2px 6px rgba(0, 0, 0, 0.3)
    &.reset_bg
        background mix(white, $dark_app, 10%)
    &.vertical
        flex-direction column
    &.horizontal
        flex-direction row
    &.opacity
        opacity 0.5
    &:focus-visible
        outline-effect()
</style>
