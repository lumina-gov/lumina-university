<script lang="ts">
import AccountPicker from "$lib/controls/AccountPicker.svelte";
    import Icon from "$lib/display/Icon.svelte";
import Logo from "$lib/display/Logo.svelte"
import Profile from "$lib/display/Profile.svelte";
import Slash from "svelte-material-icons/SlashForward.svelte"

let project_name = "lumina-site"
</script>
<header>
    <div class="left">
        <Logo/>
        <Icon icon={Slash} opacity="0.2" size="18px"/>
        <AccountPicker/>
        <Icon icon={Slash} opacity="0.2" size="18px"/>
        <div class="project">{ project_name }</div>
    </div>
    <div class="right">
        <a href="/about">Deployments</a>
        <a href="/">Settings</a>
        <Profile/>
    </div>
</header>
<style lang="stylus">
@import "variables"

.left
    align-items center
    display flex
    gap 4px

header
    display flex
    align-items center
    justify-content space-between
    padding 0 16px
    height 60px
    background $dark_app
    border-bottom 1px solid transparify(white, 8%)
    position sticky
    top 0
    color white
    .right
        display flex
        gap 8px

        a
            color white
            font-weight 600
            padding 10px
            display inline-flex
            letter-spacing 1px
            align-items center
            border-radius 4px
            &:hover
                background transparify(white, 8%)
</style>