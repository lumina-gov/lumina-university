<script lang="ts">
import type { SvelteComponent } from "svelte"

export let icon: typeof SvelteComponent
export let style: undefined | "brand" = undefined
export let opacity = "1"
export let size = "1em"

</script>
<div class="icon {style}" style="opacity: {opacity};">
    <svelte:component this={icon} size={size}/>
</div>
<style lang="stylus">
@import "variables"
.icon
    display inline-flex
    &.brand
        color $brand
</style>