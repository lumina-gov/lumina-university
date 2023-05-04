<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import type { PageData } from "./$types"
import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte"
import HumanGreetingVariant from "svelte-material-icons/HumanGreetingVariant.svelte"
import Icon from "$lib/display/Icon.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import DashboardCourse from "./DashboardCourse.svelte"
import { SubscriptionStatus } from "$lib/gql/graphql"
import DashboardTopics from "./DashboardTopics.svelte"
import PageHead from "$lib/components/PageHead.svelte"
import RecentCoursesGrid from "./RecentCoursesGrid.svelte"

export let data: PageData

$: user = data.user_store.user

</script>
{#if user}
    <Hero divider={true}>
        <div class="auth-hero">
            <div class="greeting">
                <Icon
                    icon={HumanGreetingVariant}
                    opacity={0.5}
                    size={48}/>
                Hi { user.first_name }!
            </div>
            {#if user.stripe_subscription_info.status === SubscriptionStatus.None}
                <Button
                    href="/account"
                    hug={true}
                    right_icon={RocketLaunch}
                    text="Start Subscription"/>
            {/if}
        </div>
    </Hero>
    <hr/>
    {#if data.recent_data}
        <Hero
            align="center"
            divider={true}
            gap={24}>
            <div class="subheader">
                Where you left off
            </div>
            <DashboardCourse
                data={data.recent_data[0]}
                enlarge={true}/>
        </Hero>
        <Hero
            align="center"
            divider={true}
            gap={24}>
            <div class="subheader">
                Your courses
            </div>
            <RecentCoursesGrid recent_data={data.recent_data}/>
        </Hero>
    {/if}
    <Hero
        align="center"
        divider={true}
        gap={24}>
        <div class="subheader">
            Find a course
        </div>
        <DashboardTopics/>
    </Hero>
{:else}
    <div class="unauth-hero">
        <div class="inner padding">
            <div class="span">
                Tired of bull***t universities?
            </div>
            <h1>The next generation of education</h1>
            <div class="para">
                An education system that wasn't designed in the 1800s
            </div>
            <div class="para">
                Gain practical experience, create real outcomes.
            </div>
            <Button
                href="/courses"
                hug={true}
                right_icon={ChevronRight}>
                Start Learning
            </Button>
            <div class="span">
                Ready for the real world?
            </div>
            <div class="space"/>
            <DashboardTopics/>
            <div class="view-courses">
                <Button
                    style="translucent"
                    href="/courses"
                    right_icon={ChevronRight}
                    text="View Courses"/>
            </div>
        </div>
    </div>
{/if}
<PageHead
    description="The next generation of education - powered by the Government of Lumina"
    include_suffix={false}
    title="Lumina University » Next Generation Education"
/>
<style lang="stylus">
    @import "variables"

    .space
        padding-top 120px

    .auth-hero
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        width 100%
        .greeting
            display flex
            gap 16px
            font-size 36px
            font-weight 800
            align-items center
    .subheader
        font-size 22px
        font-weight 800
        text-align center

    .unauth-hero
        display flex
        flex-direction column
        align-items center
        .inner
            display flex
            gap 16px
            flex-direction column
            align-items flex-start
            width 100%
            justify-content center
            max-width 1200px
            &.padding
                padding 140px 24px
            h1
                font-size 50px
                max-width 600px
                text-transform uppercase
                font-weight 800
            .span
                opacity 0.5
                text-transform uppercase
                font-weight 700
            .para
                opacity 0.8
    .view-courses
        width 100%
        display flex
        justify-content center
        padding 20px
    </style>