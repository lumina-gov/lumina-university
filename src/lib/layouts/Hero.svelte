<script lang="ts">
import type { Prop } from "$lib/utils/typed_props"
import Inner from "./Inner.svelte"

export let max_width: Prop<Inner, "max_width"> = 1200
export let gap: Prop<Inner, "gap"> = 16
export let vertical_padding: Prop<Inner, "vertical_padding"> = 48
export let align: Prop<Inner, "align"> = "flex-start"
export let translucent = false
export let divider = false
</script>
<div
    class="hero"
    class:divider
    class:translucent>
    <Inner
        {align}
        {gap}
        {max_width}
        {vertical_padding}>
        <slot/>
    </Inner>
</div>
<style lang="stylus">
@import variables
.divider
    border-bottom 1px solid transparify(white, 8%)
.hero
    display flex
    flex-direction column
    width 100%
    align-items center
    &.translucent
        background transparify(white, 2%)

</style>