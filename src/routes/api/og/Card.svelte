<script lang="ts">
import LuminaUniversity from "$lib/icons/LuminaUniversity.svelte"
import Settlement from "$lib/icons/Settlement.svelte"


export let title: string
export let description: string | null = null

</script>
<div class="card">
    <div class="logo">
        <div class="symbol">
            <LuminaUniversity/>
        </div>
        <div class="brand">
            Lumina University
        </div>
    </div>
    <h1>
        { title }
    </h1>
    <div class="fake-button">
        <div class="text">Start learning</div> <div class="icon"><Settlement size="1.5em"/></div>
    </div>
</div>
<style lang="stylus">
@import variables

.fake-button
    display flex
    align-items center
    gap 12px
    font-size 2.5em
    font-weight bold
    padding-top 0.5em
    padding-bottom 0.5em
    padding-left 1em
    padding-right 0.5em
    text-decoration none
    border-radius 10px
    color white
    background $brand

.icon
    display flex

.text
    padding-bottom 0.3em

h1
    display flex
    font-size 4em
    font-weight 600
    line-height 100%
    padding-left 0.4em
    border-left 0.3em solid $brand
    padding-bottom 0.3em

.card
    background linear-gradient(90deg, mix($brand, $dark_app, 15%), $dark_app)
    width 100%
    padding 3em
    gap 2em
    height 100%
    display flex
    align-items flex-start
    flex-direction column
    color white
    justify-content center


.logo
    display flex
    align-items center
    gap 0.5em
    font-size 3em
    text-decoration none
    color white

.symbol
    font-size 1.6em
    display flex
    color $brand
.brand
    font-size 1em
    display flex
    font-weight 700
    text-transform uppercase
    letter-spacing 0.1em
</style>
