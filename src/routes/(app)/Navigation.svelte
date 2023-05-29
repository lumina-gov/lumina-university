<script lang="ts">
import site_data from "$lib/data/site_data"
import Discord from "svelte-material-icons/Discord.svelte"
import Facebook from "svelte-material-icons/Facebook.svelte"
import Twitter from "svelte-material-icons/Twitter.svelte"
import Youtube from "svelte-material-icons/Youtube.svelte"
import { afterNavigate } from "$app/navigation"
import type { Props } from "$lib/utils/typed_props"
import Inside from "$lib/controls/Inside.svelte"
import ScrollbarRegion from "$lib/controls/ScrollbarRegion.svelte"
import DashboardBlock from "./NavLink.svelte"
import ResponsiveLayout from "$lib/layouts/ResponsiveLayout.svelte"
import Home from "svelte-material-icons/Home.svelte"
import CreditCard from "svelte-material-icons/CreditCard.svelte"
import Button from "$lib/controls/Button.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import AccountPlus from "svelte-material-icons/AccountPlus.svelte"
import nav from "$lib/data/nav"
import Circle from "svelte-material-icons/Circle.svelte"
import HumanGreetingVariant from "svelte-material-icons/HumanGreetingVariant.svelte"
import Icon from "$lib/display/Icon.svelte"
import { page } from "$app/stores"
import Settings from "svelte-material-icons/Cog.svelte"
import type { MeQuery } from "$lib/graphql/graphql-types"

export let user: MeQuery["me"]
export let nav_opened: boolean

let auth_settings: Array<Props<DashboardBlock>> = [
    {
        icon: Home,
        name: "Dashboard",
        href: "/",
        subtext: "Keep track of your enrolments, and progress here.",
        color: "#00B473",
    },
    {
        icon: Settings,
        name: "Account Settings",
        href: "/account",
        subtext: "Update your account settings and user information.",
        color: "#E25454"
    },
    {
        icon: Discord,
        name: "Join Our Discord",
        subtext: "Stay in touch with the community through our official discord.",
        color: "#7446F6",
        href: "https://discord.gg/r4vNcUKktT"
    },
    {
        icon: CreditCard,
        name: "Billing",
        href: "/account",
        subtext: "Manage billing and payment methods attached to your account.",
        color: "#22AAFF"
    }
]

$: authenticated = user != null

afterNavigate(() => {
    nav_opened = false
})

</script>
<div
    class="nav-wrapper"
    class:authenticated
    class:nav_opened
    aria-hidden={!nav_opened}
    inert={!nav_opened ? true : undefined}
    on:focus|capture={ () => nav_opened = true }>
    <ScrollbarRegion>
        <Inside>
            <nav>
                {#if authenticated}
                    <div class="auth-wrapper">
                        <div class="greeting">
                            <Icon
                                icon={HumanGreetingVariant}
                                opacity={0.5}
                                size={32}/>
                            Hi { user?.first_name }!
                        </div>
                        <ResponsiveLayout
                            gap={0}
                            max_width={600}
                            min_item_size={250}>
                            {#each auth_settings as card}
                                <DashboardBlock {...card}/>
                            {/each}
                        </ResponsiveLayout>
                    </div>
                {:else}
                    <div class="button-wrapper">
                        <ResponsiveLayout
                            max_width={600}
                            min_item_size={250}
                            padding={16}
                        >
                            <Button
                                href={$page.data.user_store.login_url}
                                hug={false}
                                left_icon={AccountPlus}
                                text="Create Account"/>
                            <Button
                                style="translucent"
                                href={$page.data.user_store.login_url}
                                hug={false}
                                left_icon={ExitToApp}>
                                Sign In
                            </Button>
                        </ResponsiveLayout>
                    </div>
                {/if}
                <div class="breaker">
                    <ResponsiveLayout
                        gap={0}
                        min_item_size={200}
                        padding={16}
                    >
                        {#each nav as card}
                            <DashboardBlock {...card}/>
                        {/each}
                    </ResponsiveLayout>
                </div>
                <div class="footer">
                    <div class="footer-links">
                        <a href="/about">Home</a>
                        <Icon
                            icon={Circle}
                            opacity={0.5}
                            size={6}/>
                        <!-- <a href="/about">About Us</a> -->
                        <a href="https://lumina.earth">Lumina Website</a>
                    </div>
                    <div class="socials">
                        <a
                            class="social-media-icon"
                            href={site_data.socials.facebook}><Facebook/></a>
                        <a
                            class="social-media-icon"
                            href={site_data.socials.twitter}><Twitter/></a>
                        <a
                            class="social-media-icon"
                            href={site_data.socials.youtube}><Youtube/></a>
                    </div>
                    <div class="impressum">
                        A service from the Government of Lumina
                    </div>
                </div>
            </nav>
        </Inside>
    </ScrollbarRegion>
</div>

<style lang="stylus">
@import variables

.nav-wrapper
    position fixed
    z-index 50
    display flex
    flex-direction column
    nav
        background mix(white, $dark_app, 6%)
        box-shadow 0 0 8px 0 rgba(0, 0, 0, 0.5)
        overflow-y auto
        overscroll-behavior-y contain
    @media (min-width $tablet)
        transition top 0.3s ease-in-out
        top 100%
        nav
            max-width 900px
            margin 0 auto
            width 100%
            border-radius 16px
            height 50%
            box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        &.nav_opened
            z-index 40
            top 60px
        width 100%
        max-height calc(100% - 60px)

    @media (max-width $tablet)
        nav
            width 100%
            height 100%
            box-shadow 4px 0 8px 0 rgba(0, 0, 0, 0.4)
        z-index 40
        transition left 0.3s ease-in-out
        width 100%
        top 0
        left -100%
        &.nav_opened
            left 0
        &.authenticated
            bottom 60px
            top 0
        &:not(.authenticated)
            top 60px
            bottom 0

.socials
    display flex
    align-items center
    justify-content center
    gap 8px
    .social-media-icon
        background transparify(white, 4%)
        display inline-flex
        font-size 24px
        color transparify(white, 50%)
        opacity 0.8
        padding 8px
        border-radius 4px
        &:hover
            opacity 1
            background transparify(white, 8%)
            color white

.greeting
    display flex
    align-items center
    justify-content center
    gap 12px
    padding 16px
    font-size 24px
    font-weight 800

.auth-wrapper
    display flex
    flex-direction column
    align-items center
    justify-content center
    padding 8px
    padding 16px
    border-bottom 1px solid transparify(white, 8%)
.breaker
    border-bottom 1px solid transparify(white, 8%)
.footer
    display flex
    align-items center
    justify-content center
    flex-direction column
    gap 8px
    padding 16px
    .footer-links
        display flex
        align-items center
        gap 6px
        a
            color white
            font-size 12px
            font-weight 500
            padding  6px 10px
            border-radius 4px
            &:hover
                background transparify(white, 8%)
    .impressum
        display flex
        font-size 12px
        font-weight 500
        opacity 0.5
        max-width 170px
        line-height 1.2
        text-align center
.button-wrapper
    display flex
    align-items center
    justify-content center


</style>