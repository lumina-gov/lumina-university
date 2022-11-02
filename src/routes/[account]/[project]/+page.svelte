<script lang="ts">
import Zone from "$lib/components/Zone.svelte"
import Icon from "$lib/display/Icon.svelte"
import type { Prop } from "$lib/utils/typed_props"
import Flag from "svelte-material-icons/FlagOutline.svelte"

let project_name = "lumina-site"

</script>

<div class="hero dark">
    <div class="inner padding gap">
        <h1>
            <div class="text">
                lumina-site
            </div>
        </h1>
    </div>
</div>
<div class="hero">
    <div class="inner padding gap">
        <h2>Production deployment</h2>
        <div class="description">
            The deployment that is available to your visitors
        </div>
        <div class="deployment">

        </div>
    </div>
</div>
<style lang="stylus">
@import "variables"

.description
    opacity 0.7
    font-size 16px
    font-weight 400

.deployment
    background transparify(black, 20%)
    padding 16px
    border-radius 8px

h1
    font-size 44px
    display flex
    align-items center
    gap 8px
    font-weight 700

.hero
    display flex
    flex-direction column
    border-bottom 1px solid transparify(white, 8%)
    .inner
        display flex
        flex-direction column
        &.gap
            gap 16px
        &.padding
            padding 40px 16px
        max-width 1000px
        width 100%
        margin 0 auto
    &.dark
        background transparify(black, 20%)
</style>
<svelte:head>
    <title>{project_name} - Iter</title>
</svelte:head>