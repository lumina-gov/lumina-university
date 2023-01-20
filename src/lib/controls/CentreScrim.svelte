<script lang="ts">
import { createEventDispatcher } from "svelte"

const dispatch = createEventDispatcher<{ close: void }>()

</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="scrim"
    on:click|self={ () => dispatch("close") }>
    <slot/>
</div>
<style lang="stylus">
@import 'variables'

.scrim
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background mix(black, transparent, 50%)
    // blur the background
    backdrop-filter blur(4px)
    display flex
    align-items center
    justify-content center
    z-index 1000

</style>