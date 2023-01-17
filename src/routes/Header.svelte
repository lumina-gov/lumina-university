<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import Logo from "$lib/display/Logo.svelte"
import { delete_cookie } from "$lib/utils/cookie"
import { goto } from "$app/navigation"
import ProfileButton from "$lib/controls/ProfileButton.svelte"
import ClickoutRegion from "$lib/controls/ClickoutRegion.svelte"
import Inside from "$lib/controls/Inside.svelte"
import AccountPopout from "./AccountPopout.svelte"

enum Dropdown {
    Account,
    Notifications
}

let dropdown: Dropdown | null = null

function toggle(toggling: Dropdown) {
    if (toggling === dropdown) {
        dropdown = null
    } else {
        dropdown = toggling
    }
}

export let user: null

async function logout() {
    delete_cookie("token")
    user = null
    await goto("/")
}

async function signin() {
    throw new Error("Not implemented")
}

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
    <ClickoutRegion
        clicked_outside={() => dropdown = null}
        condition={dropdown !== null}>
        <div class="right">
            {#if user}
                <Inside>
                    <ProfileButton
                        on:click={ () => toggle(Dropdown.Account) }
                        bind:url={ user }/>
                </Inside>
            {:else}
                <Button on:click={ signin }>
                    Start Learning
                </Button>
            {/if}
            {#if user && dropdown === Dropdown.Account}
                <Inside>
                    <div class="out-of-sidebar">
                        <AccountPopout
                            bind:user
                            on:logout={ logout }/>
                    </div>
                </Inside>
            {/if}
        </div>
    </ClickoutRegion>
</header>
<style lang="stylus">
@import "variables"

.out-of-sidebar
    max-width 300px
    width 100vw
    position absolute
    top calc(100% + 16px)
    z-index 10
    right 16px


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
    z-index 5
    background $dark_app
    border-bottom 1px solid transparify(white, 8%)
    position sticky
    top 0
    color white
    .right
        display flex
        gap 8px
</style>