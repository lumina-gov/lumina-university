<script lang="ts">
import type { SvelteComponent } from "svelte"
import site_data from "$lib/data/site_data"
import Discord from "svelte-material-icons/Discord.svelte"
import Facebook from "svelte-material-icons/Facebook.svelte"
import Twitter from "svelte-material-icons/Twitter.svelte"
import Youtube from "svelte-material-icons/Youtube.svelte"
import { afterNavigate } from "$app/navigation"
import type ServiceCard from "$lib/components/ServiceCard.svelte"
import type { Props } from "$lib/utils/typed_props"
import Information from "svelte-material-icons/Information.svelte"
import { information } from "$lib/data/nav"
import Inside from "$lib/controls/Inside.svelte"
import ScrollbarRegion from "$lib/controls/ScrollbarRegion.svelte"
import { MeQuery } from "$lib/gql/graphql"
import DashboardBlock from "$lib/display/DashboardBlock.svelte"
import ResponsiveLayout from "$lib/layouts/ResponsiveLayout.svelte"
import Home from "svelte-material-icons/Home.svelte"
import HumanGreeting from "svelte-material-icons/HumanGreeting.svelte"
import CreditCard from "svelte-material-icons/CreditCard.svelte"
import IconButton from "$lib/controls/IconButton.svelte"
import Button from "$lib/controls/Button.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import AccountPlus from "svelte-material-icons/AccountPlus.svelte"

export let user: MeQuery["me"] | null
export let nav_opened: boolean

type MenuLink = {
    icon: typeof SvelteComponent
    name: string
    href: string
    sublinks?: Props<ServiceCard>[]
}

// let auth_settings: MenuLink[] = [
//     {
//         icon: Information,
//         name: "Information",
//         href: "/#information",
//         sublinks: information
//     }
// ]
let auth_settings = [
    {
        icon: Home,
        name: "Dashboard",
        href: "/#dashboard",
        subtext: "Keep track of your enrolments, and progress here.",
        color: "#00B473"
    },
    {
        icon: Information,
        name: "Account Settings",
        href: "/#information",
        subtext: "Update your account settings and user information.",
        color: "red"
    },
    {
        icon: Discord,
        name: "Join Our Discord",
        href: "/#information",
        subtext: "Stay in touch with the community through our official discord.",
        color: "#7446F6"
    },
    {
        icon: CreditCard,
        name: "Billing",
        href: "/#information",
        subtext: "Manage billing and payment methods attached to your account.",
        color: "#00B473"
    }
]

$: authenticated = user != null

afterNavigate(() => {
    nav_opened = false
})

</script>
<Inside>
    <div
        class="nav-wrapper"
        class:authenticated
        class:nav_opened
        aria-hidden={!nav_opened}
        inert={!nav_opened ? true : undefined}
        on:focus|capture={ () => nav_opened = true }>
        <ScrollbarRegion>
            <nav>
                {#if authenticated}
                    <div class="auth-wrapper">
                        <div class="greeting">
                            <HumanGreeting/>
                            Hi { user?.first_name }!
                        </div>
                        <ResponsiveLayout
                            horizontal_padding={150}
                            min_item_size={250}>
                            {#each auth_settings as card}
                                <DashboardBlock
                                    color={card.color}
                                    header={card.name}
                                    icon={card.icon}
                                    subtext={card.subtext}/>
                            {/each}
                        </ResponsiveLayout>
                    </div>
                {:else}
                    <ResponsiveLayout
                        horizontal_padding={150}
                        min_item_size={250}
                        padding={16}
                    >
                        <Button
                            gamified={true}
                            hug={false}
                            left_icon={AccountPlus}
                            text="Create Account"/>
                        <Button
                            style="translucent"
                            gamified={true}
                            hug={false}
                            left_icon={ExitToApp}>
                            Sign In
                        </Button>
                    </ResponsiveLayout>
                {/if}
                <br/>
                    
                <!-- {#each links as link}
                    <div class="menu-section">
                        <a
                            class="menu-link"
                            href={link.href}>
                            <div class="link-icon">
                                <svelte:component this={ link.icon }/>
                            </div>
                            <div class="link-name">
                                { link.name }
                            </div>
                        </a>
                        {#if link.sublinks}
                            <div class="menu-sublinks">
                                {#each link.sublinks as sublink}
                                    <a
                                        class="menu-sublink"
                                        class:disabled={ !sublink.href }
                                        href={sublink.href}>
                                        <div class="menu-sublink-icon {sublink.tag.color}">
                                            <svelte:component this={ sublink.icon }/>
                                        </div>
                                        <div class="info">
                                            <div class="menu-sublink-name">
                                                { sublink.title }
                                            </div>
                                            <div class="description">
                                                { sublink.description }
                                            </div>
                                        </div>
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/each} -->
                <div class="menu-section">
                    <a
                        class="menu-link"
                        class:disabled={ authenticated }
                        href={site_data.socials.discord}>
                        <div class="link-icon">
                            <Discord/>
                        </div>
                        <div class="link-name">
                            Join Community Discord
                        </div>
                    </a>
                </div>
                <div class="socials">
                    <a
                        class="social-media-icon"
                        href={site_data.socials.twitter}><Twitter/></a>
                    <a
                        class="social-media-icon"
                        href={site_data.socials.discord}><Discord/></a>
                    <a
                        class="social-media-icon"
                        href={site_data.socials.facebook}><Facebook/></a>
                    <a
                        class="social-media-icon"
                        href={site_data.socials.youtube}><Youtube/></a>
                </div>
            </nav>
        </ScrollbarRegion>
    </div>
</Inside>

<style lang="stylus">
@import "variables"

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
    padding 16px
    .social-media-icon
        display inline-flex
        font-size 24px
        color white
        opacity 0.8
        padding 8px
        border-radius 4px
        &:hover
            opacity 1
            background transparify(white, 4%)


.menu-links
    padding 16px
    gap 16px
    border-bottom 1px solid transparify(white, 8%)
.menu-sublinks
    display grid
    grid-template-columns repeat(auto-fit, minmax(250px, 1fr))
    padding 8px
    .menu-sublink
        display flex
        align-items flex-start
        gap 12px
        color white
        padding 12px
        opacity 0.5
        border-radius 4px
        cursor default
        &:not(.disabled)
            opacity 1
            cursor pointer
            &:hover
                background transparify(white, 4%)
        .menu-sublink-icon
            padding 6px
            display inline-flex
            font-size 18px
            border-radius 40px
            &.brand
                background transparify($brand, 8%)
                color $brand
            &.red
                background transparify($red, 8%)
                color $red
            &.green
                background transparify($green, 8%)
                color $green
            &.blue
                background transparify($blue, 8%)
                color $blue
            &.yellow
                background transparify($yellow, 8%)
                color $yellow
            &.white
                background transparify(white, 8%)
                color white
        .info
            gap 8px
            display flex
            flex-direction column
        .menu-sublink-name
            font-size 15px
            font-weight 600
        .description
            font-size 12px
            font-weight 500
            opacity 0.5
.menu-section
    border-bottom 1px solid transparify(white, 8%)
    display flex
    flex-direction column
    &:last-child
        border-bottom 0
.menu-link
    display flex
    align-items center
    cursor pointer
    color white
    gap 16px
    padding 16px
    &:hover
        background transparify(white, 4%)
    font-size 18px
    font-weight 600
    .link-icon
        color $brand
        display inline-flex
        font-size 24px
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
</style>