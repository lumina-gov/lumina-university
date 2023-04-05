<script>
import LightUniversity from "$lib/icons/LightUniversity.svelte"
export let size = "48px"

</script>
<div
    style:--size={ size }
    class="icon">
    <LightUniversity/>
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