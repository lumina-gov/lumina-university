<script lang="ts">
import AppbarButton from "$lib/controls/AppbarButton.svelte"
import { onMount } from "svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import NotificationOutline from "svelte-material-icons/BellOutline.svelte"
import ProfileButton from "$lib/controls/ProfileButton.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import Signin from "svelte-material-icons/ExitToApp.svelte"
import Scrim from "$lib/controls/Scrim.svelte"
import NotificationsPopout from "./NotificationsPopout.svelte"
import { afterNavigate } from "$app/navigation"
import { page } from "$app/stores"
import Inside from "$lib/controls/Inside.svelte"
import AccountPopout from "./AccountPopout.svelte"
import Logo from "$lib/display/Logo.svelte"
import Icon from "$lib/display/Icon.svelte"
import CreditCardOutline from "svelte-material-icons/CreditCardOutline.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import { SubscriptionStatus, type MeQuery } from "$lib/graphql/graphql-types"

enum Dropdown {
    Notifications,
    Account,
}

export let user: MeQuery["me"] | null
export let nav_opened: boolean
let scrolled = false
let dropdown: Dropdown | null = null

$: authenticated = user !== null

onMount(() => {
    scrolled = window.scrollY != 0
    window.addEventListener("scroll", () => {
        scrolled = window.scrollY != 0
    })
})

function toggle(toggling: Dropdown) {
    if (toggling === dropdown) {
        dropdown = null
    } else {
        dropdown = toggling
    }
}

afterNavigate(() => {
    dropdown = null
})

</script>
<a
    style:display={ user?.stripe_subscription_info.status === SubscriptionStatus.None ? "flex" : "none" }
    class="start-subscription"
    href="/account">
    <Icon
        color="brand"
        icon={CreditCardOutline}
        size={20}/>
    Start Subscription
    <Icon
        color="brand"
        icon={ChevronRight}
        size={20}/>
</a>
<header
    class:authenticated
    class:scrolled>
    <div class="inner-header">
        <div class="flex-align-center">
            <Inside>
                <AppbarButton
                    style="transparent"
                    authenticated_app_bar={authenticated}
                    left_icon={Apps}
                    on:click={ () => nav_opened = !nav_opened }/>
            </Inside>
            <div
                class="logo"
                class:authenticated>
                <Logo/>
            </div>
        </div>
        <div class="flex-align-center">
            {#if user}
                <AppbarButton
                    authenticated_app_bar={authenticated}
                    left_icon={NotificationOutline}
                    on:click={ () => toggle(Dropdown.Notifications) }/>
                <ProfileButton on:click={ () => toggle(Dropdown.Account) }/>
            {:else}
                <AppbarButton
                    href={$page.data.user_store.login_url}
                    left_icon={Signin}/>
                <AppbarButton
                    style="branded"
                    href={$page.data.user_store.login_url}
                    left_icon={Settlement}>Join Now</AppbarButton>
            {/if}
        </div>
    </div>
</header>
{#if dropdown !== null && user}
    <Scrim on:close={ () => dropdown = null }>
        <div class="popout">
            {#if dropdown === Dropdown.Notifications}
                <NotificationsPopout/>
            {/if}
            {#if dropdown === Dropdown.Account}
                <AccountPopout bind:user/>
            {/if}
        </div>
    </Scrim>
{/if}
<style lang="stylus">
@import variables

.start-subscription
    height 40px
    width 100%
    margin 0 auto
    max-width $laptop

    display flex
    grid-row 1
    align-items center
    color white
    gap 12px
    outline 0
    text-transform uppercase
    font-weight 700
    opacity 0.7
    transition opacity 0.1s ease-in-out
    &::before, &::after
        content ""
        display block
        height 4px
        flex 1
        border-radius 10px
    &::after
        background linear-gradient(90deg, $brand 0%, transparent 100%)
    &::before
        background linear-gradient(90deg, transparent 0%, $brand 100%)
    &:hover
        opacity 1

.popout
    max-width 400px
    width 100%

top_header()
    min-height 60px
    z-index 8
    background transparent
    box-shadow none
    position sticky
    grid-row 3
    top 0
    transition box-shadow 0.1s ease-in-out, background 0.1s ease-in-out

scroll_header()
    box-shadow 0 0 10px 0 rgba(0, 0, 0, 0.5)
    background $dark_app
    background transparify(mix(white, $dark_app, 8%), 50%)
    background-blur(10px)

header
    display flex
    justify-content center
    flex-direction column

    @media (min-width $tablet)
        top_header()
        &.scrolled
            scroll_header()

    @media (max-width $tablet)
        &:not(.authenticated)
            top_header()
            &.scrolled
                scroll_header()
        &.authenticated
            grid-row 3
            background mix($dark_app, white, 90%)
            z-index 80
            box-shadow 0 -2px 8px rgba(0,0,0,0.2)
            .inner-header
                justify-content space-around
                padding 4px
                gap 4px
            .flex-align-center
                display contents
        .logo.authenticated
            display none

.flex-align-center
    display flex
    align-items center
    gap 8px

.inner-header
    display flex
    align-items center
    gap 16px
    padding 0 16px
    margin 0 auto
    justify-content space-between
    max-width $laptop
    width 100%

</style>