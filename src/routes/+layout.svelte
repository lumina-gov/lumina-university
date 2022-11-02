<script lang="ts">
    import AlertBar from "./AlertBar.svelte"
    import Header from "./Header.svelte"
    import PageLoaderBar from "./PageLoaderBar.svelte"

</script>
<Header/>
<main>
	<slot/>
</main>
<PageLoaderBar/>
<AlertBar/>
<svelte:head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Noto Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" defer>
</svelte:head>
<style lang="stylus">
:global
    @import 'normalise'
    @import 'variables'

    html
        display flex
        min-height 100%
        flex 1
        margin 0
        padding 0

    h1, h2, h3, h4, h5, h6
        font-weight 700

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
        font-family  'Noto Sans'
        font-weight 500

</style>