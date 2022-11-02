<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Logo from "$lib/display/Logo.svelte"
import Profile from "$lib/display/Profile.svelte"
import Slash from "svelte-material-icons/SlashForward.svelte"
</script>
<header>
    <div class="left">
        <Logo size="48px"/>
        <div class="text">
            <div class="light">
                Light
            </div>
            <div class="university">
                University
            </div>
        </div>
        <!-- <Icon icon={Slash} opacity="0.2" size="24px"/> -->
        <!-- <AccountPicker/> -->
    </div>
    <div class="right">
        <Profile/>
    </div>
</header>
<style lang="stylus">
@import "variables"

.text
    font-weight 800
    text-transform uppercase
    .light
        font-size 22px
        letter-spacing 5px
    .university
        font-size 14px

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