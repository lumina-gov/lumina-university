<script lang="ts">
import Navigation from "./Navigation.svelte"
import AppBar from "./AppBar.svelte"
import ClickoutRegion from "$lib/controls/ClickoutRegion.svelte"

export let data

let nav_opened = false

$: authenticated = data.user_store.user != null

</script>

<svelte:head>
    <link
        href="/manifest.json"
        rel="manifest">
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8MK9JSEJ2P"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8MK9JSEJ2P');
    </script>
</svelte:head>
<ClickoutRegion clicked_outside={() => nav_opened = false}>
    <div
        class="layout"
        class:authenticated>
        <AppBar
            bind:user={ data.user_store.user }
            bind:nav_opened/>
        <Navigation
            bind:user={ data.user_store.user }
            bind:nav_opened/>
        <div class="content">
            <slot/>
        </div>
        <!-- {#if !data.user_store.user}
            <Rater/>
            <Footer/>
        {/if} -->
    </div>
</ClickoutRegion>
<style lang="stylus">
@import 'variables'

.content
    flex 1
    display flex
    flex-direction column
    z-index 1
    grid-row 2
    @media (max-width $tablet)
        overflow-y auto
        height 100%


.layout
    display flex
    position relative
    flex-direction column
    min-height 100%
    background rgba(0,0,0,0.2)
    &.authenticated
        @media (max-width $tablet)
            height 100vh
            display grid
            overflow-y hidden
            grid-template-rows min-content 1fr 60px


</style>