<script lang="ts">
import LogoIcon from "./LogoIcon.svelte"

export let size = "1em"

</script>
<a
    class="logo"
    href="/">
    <div class="icon">
        <LogoIcon {size}/>
    </div>
</a>
<style lang="stylus">
@import "variables"

.logo
    display inline-flex
    align-items center
    color white
    text-decoration none
    font-weight 600
    letter-spacing 2px
    font-size 16px
    padding 8px
    gap 8px
    .icon
        display inline-flex
        font-size 28px

</style>