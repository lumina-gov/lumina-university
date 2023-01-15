<script lang="ts">
import InfoBox from "$lib/display/InfoBox.svelte"
import type { PageData } from "./$types"
import SessionOfferComp from "./SessionOffer.svelte"
import Info from "svelte-material-icons/Information.svelte"
import CentreScrim from "$lib/controls/CentreScrim.svelte"
import BookSession from "./BookSession.svelte"
import type { SessionOfferWithTutor } from "$lib/types/session_offer"

export let data: PageData

$: authenticated = data.user_container.user !== null
let sessions: unknown[] = []
let session_offers = data.session_offers
let booking_session: SessionOfferWithTutor | null = null

</script>
{#if booking_session !== null}
    <CentreScrim on:close={ () => booking_session = null }>
        <div class="card-wrapper">
            <BookSession bind:session_offer={ booking_session }/>
        </div>
    </CentreScrim>
{/if}
<div class="hero light">
    <div class="inner">
        <h1>Find a Tutor</h1>
        <p>Get 1:1 mentoring from experienced tutors and learn valuable skills faster</p>
    </div>
</div>
<div class="hero">
    <div class="inner">
        {#if authenticated}
            <h2>My sessions</h2>
            <p>Here are your upcoming sessions</p>
            {#each sessions as session}
                <todo/>
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
<div class="hero light">
    <div class="inner">
        <h2>Find a tutor</h2>
        <p>Find a tutor for any skill</p>
        {#if session_offers.length > 0}
            <div class="session-offers">
                {#each session_offers as session_offer}
                    <SessionOfferComp
                        on:session={ event => booking_session = event.detail }
                        bind:session_offer/>
                {/each}
            </div>
        {:else}
            <InfoBox
                color="white"
                icon={Info}
                tag="Uh oh"
                title="No tutoring sessions found"/>
        {/if}
    </div>
</div>
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
<div class="hero light">
    <div class="inner">
        <h2>Become a tutor</h2>
        <p>Share your knowledge and earn money</p>
        <a
            class="button"
            href="/">Become a tutor</a>
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