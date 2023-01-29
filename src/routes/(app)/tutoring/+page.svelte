<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import HumanMaleBoard from "svelte-material-icons/HumanMaleBoard.svelte"
import InfoBox from "$lib/display/InfoBox.svelte"
import type { PageData } from "./$types"
import SessionOfferComp from "./SessionOffer.svelte"
import Info from "svelte-material-icons/Information.svelte"
import CentreScrim from "$lib/controls/CentreScrim.svelte"
import BookSession from "./BookSession.svelte"
import type { SessionOfferWithTutor } from "$lib/types/session_offer"
import TopicCard from "./TopicCard.svelte"
import Magnify from "svelte-material-icons/Magnify.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import ResponsiveLayout from "$lib/layouts/ResponsiveLayout.svelte"
import CodeTags from "svelte-material-icons/CodeTags.svelte";
import ArrowDecision from "svelte-material-icons/ArrowDecision.svelte";

export let data: PageData

$: authenticated = data.user_store.user !== null
let sessions: unknown[] = []
let session_offers = data.session_offers
let booking_session: SessionOfferWithTutor | null = null
</script>

{#if booking_session !== null}
    <CentreScrim on:close={ () => (booking_session = null) }>
        <div class="card-wrapper">
            <BookSession bind:session_offer={ booking_session } />
        </div>
    </CentreScrim>
{/if}

<hr />
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>
        <Heading left_icon={HumanMaleBoard}>Tutoring</Heading>
        <VerticalLayout max_width={600}>
            <Paragraph>Lorep ipsum</Paragraph>
        </VerticalLayout>
    </GridItem>
</Grid>
<hr/>
<Hero
    translucent={true}
    vertical_padding={60}>
    <Grid
        side_padding={false}
        vertical_gap={100}>
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 8",
                laptop: "span 16",
            }}
            gap={16}>
            <Heading
                left_icon={Magnify}
                level={2}>Find a topic</Heading>
            <VerticalLayout max_width={600}>
                <Paragraph>Lorep ipsum</Paragraph>
            </VerticalLayout>
        </GridItem>
    </Grid>
    <Grid padding_vertical={60}>
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 8",
                laptop: "span 16",
            }}>
            <ResponsiveLayout min_item_size={250}>
                <TopicCard />
                <TopicCard />
                <TopicCard />
            </ResponsiveLayout>
        </GridItem>
    </Grid>
    <hr/>
    <Grid
        side_padding={false}
        vertical_gap={100}>
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 8",
                laptop: "span 16",
            }}
            gap={16}>
            <a href="/">Back to subjects</a>
            <Heading
                left_icon={CodeTags}
                level={2}>Programming Tutors
            </Heading>
            <VerticalLayout max_width={600}>
                <Paragraph>
                    Get 1:1 mentoring from experienced tutors and learn valuable skills faster
                </Paragraph>
            </VerticalLayout>
        </GridItem>
    </Grid>
    <Grid padding_vertical={60}>
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 8",
                laptop: "span 16",
            }}>
            <ResponsiveLayout min_item_size={250}>
                {#if session_offers.length > 0}
                    <div class="session-offers">
                        {#each session_offers as session_offer}
                            <SessionOfferComp
                                on:session={ event => (booking_session = event.detail) }
                                bind:session_offer
                            />
                        {/each}
                    </div>
                {:else}
                    <InfoBox
                        color="white"
                        icon={Info}
                        tag="Uh oh"
                        title="No tutoring sessions found"
                    />
                {/if}
            </ResponsiveLayout>
        </GridItem>
    </Grid>
</Hero>
<hr/>
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>
        <Heading left_icon={ArrowDecision}>How it works</Heading>
        <VerticalLayout max_width={600}>
            <Paragraph>Find a tutor for any skill</Paragraph>
        </VerticalLayout>
    </GridItem>
</Grid>
<div class="hero">
    <div class="inner">
        <h2>How it works</h2>
        <p>Find a tutor for any skill</p>
        <div class="steps">
            <div class="step">
                <h3>1. Find a tutor</h3>
                <p>Search for a tutor by skill or name</p>
            </div>
            <div class="step">
                <h3>2. Book a session</h3>
                <p>Book a session with a tutor and pay securely</p>
            </div>
            <div class="step">
                <h3>3. Learn</h3>
                <p>Learn from a tutor and get better at your skill</p>
            </div>
        </div>
    </div>
</div>

<hr />
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}
    >
        <Heading left_icon={HumanMaleBoard}>Become a tutor</Heading>
        <VerticalLayout max_width={600}>
            <Paragraph>Share your knowledge and earn money</Paragraph>
            <a
                class="button"
                href="/">Become a tutor </a>
        </VerticalLayout>
    </GridItem>
</Grid>

<div class="hero">
    <div class="inner">
        {#if authenticated}
            <h2>My sessions</h2>
            <p>Here are your upcoming sessions</p>
            {#each sessions as session}
                <todo />
            {/each}
        {:else}
            <div class="card">
                <h2>Sign up to get started</h2>
                <p>Sign up for free and start learning today</p>
                <a
                    class="button"
                    href="/signup">Sign up</a>
            </div>
        {/if}
    </div>
</div>

<style lang="stylus">
@import "variables"

.inner
    max-width 1200px
    width 100%
    padding 40px 16px

.card-wrapper
    width 100%
    max-width 600px

.session-offers
    display grid
    grid-template-columns repeat(auto-fill, minmax(300px, 1fr))
    gap 16px

.hero
    display flex
    align-items center
    flex-direction column
    &.light
        background lighten($dark_app, 3%)
</style>
