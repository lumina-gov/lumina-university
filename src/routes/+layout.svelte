<svelte:head>
    <link
        href={env.PUBLIC_GRAPH_ENDPOINT}
        rel="preconnect">
</svelte:head>
<script lang="ts">
import { env } from "$env/dynamic/public"
import AlertBar from "./AlertBar.svelte"
import PageLoaderBar from "./PageLoaderBar.svelte"
import ServiceWorkerUI from "./ServiceWorkerUI.svelte"

</script>
<PageLoaderBar/>
<AlertBar/>
<ServiceWorkerUI/>
<slot/>
<style lang="stylus">
@import 'variables'

:global
    @import 'normalise'

    *
        &:focus
            outline-effect()

    hr
        border 0
        border-top 1px solid transparify(white, 10%)
        width 100%
        margin 0


    html
        display flex
        min-height 100%
        flex 1
        margin 0
        padding 0
        scroll-behavior smooth

    h1, h2, h3, h4, h5, h6
        font-weight 500

    a
        text-decoration none
        color $brand
        &:hover
            color lighten($brand, 10%)

    body
        background $dark_app
        color white
        flex 1
        margin 0
        padding 0
        min-height 100%
        font-family 'Inter', sans-serif
        max-width 100%
        display flex
        flex-direction column
        z-index 1
</style>