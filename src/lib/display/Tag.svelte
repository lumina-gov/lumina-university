<script lang="ts">
export let color:  "brand" | "white" | "red" | "yellow" | "orange" | "purple" | "blue" | "yellow_green" | "green" | undefined = undefined
export let opacity = false
export let text = ""
export let small = false
export let filled = false
</script>

<span
    class="tag {color}"
    class:filled
    class:opacity>
    <div
        class="text"
        class:small>
        {#if $$slots.default}
            <slot />
        {:else}
            { text }
        {/if}
    </div>
</span>
<style lang="stylus">
@import 'variables'

.tag
    padding 0 2px
    line-height 1
    font-weight 600
    display inline-flex
    border-radius 4px
    color white
    background transparify(white, 16%)
    .text
        padding 3px 4px
        line-height 100%
    .small
        font-size 12px
    &.opacity
        opacity 0.5

    &.brand
        color $brand
        background transparify($brand, 16%)
    &.red
        color $red
        background transparify($red, 16%)
    &.blue
        color $blue
        background transparify($blue, 16%)
    &.white
        color white
        background transparify(white, 12%)
    &.yellow
        color $yellow
        background transparify($yellow, 16%)
    &.green
        color $green
        background transparify($green, 16%)
    &.yellow_green
        color $yellow_green
        background transparify($yellow_green, 16%)
    &.orange
        color $orange
        background transparify($orange, 16%)
    &.purple
        color $purple
        background transparify($purple, 16%)


    &.filled
        background white
        color $dark
        &.brand
            background $brand
            color white
        &.red
            background $red
            color white
        &.blue
            background $blue
            color white
        &.white
            background white
            color $dark
        &.yellow
            background $yellow
            color white
        &.green
            background $green
            color white
        &.yellow_green
            background $yellow_green
            color white
        &.orange
            background $orange
            color white
        &.purple
            background $purple
            color white


</style>
