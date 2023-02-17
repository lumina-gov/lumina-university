<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import LightUniversity from "$lib/icons/LightUniversity.svelte"
</script>
<a
    class="logo"
    href="/">
    <Icon
        color="brand"
        icon={LightUniversity}
        size={48}/>
    <div class="text">
        <div class="light">
            Light
        </div>
        <div class="university">
            University
        </div>
    </div>
</a>
<style lang="stylus">
@import 'variables'

.logo
    display flex
    align-items center
    gap 8px
    .text
        color white
        font-weight 800
        text-transform uppercase
        .light
            font-size 22px
            letter-spacing 5px
        .university
            font-size 14px
</style>