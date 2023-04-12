<script lang="ts">

type ButtonPosition = {
    top: number,
    bottom: number
}

export let button_positions: ButtonPosition[] = []
</script>
    
<svg class="svg">
    {#each button_positions as _, i}
        {#if i < button_positions.length - 1}
            <path
                d={`M ${button_positions[i].bottom} ${button_positions[i+1].top}`}
                stroke="red"
                stroke-width="1"/>
        {/if}
    {/each}
</svg>
    
<style lang="stylus">
@import "variables"
.svg
    position absolute
    top 0
    left 0
    height 100%
    width 100%
    pointer-events none
    color red
</style>
    