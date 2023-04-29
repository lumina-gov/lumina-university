<script>
import LuminaUniversity from "$lib/icons/LuminaUniversity.svelte"
export let size = "48px"

</script>
<div
    style:--size={ size }
    class="icon">
    <LuminaUniversity/>
</div>
<style lang="stylus">
@import 'variables'

.icon
    font-size var(--size)
    display inline-flex
    color $brand
    animation: rotate 1.5s linear infinite;

@keyframes rotate
    to
        transform rotate(360deg)


</style>