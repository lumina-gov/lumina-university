<script lang="ts">
import LogoLoading from "$lib/display/LogoLoading.svelte"

export let background = true

</script>
<div
    style:background={ background ? "rgba(0,0,0,0.5)": "transparent" }
    class="overlay-spinner">
    <LogoLoading/>
</div>
<style lang="stylus">
.overlay-spinner
    display flex
    background rgba(0,0,0,0.5)
    justify-content center
    align-items center
    position absolute
    top 0
    bottom 0
    right 0
    left 0
    z-index 20
</style>

