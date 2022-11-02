<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
</script>
<div class="hero">
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
            hug={true}
            href="/dashboard"
            right_icon={ChevronRight}>
            Start Learning
        </Button>
        <div class="span">
            Ready for the real world?
        </div>
    </div>
</div>
<svelte:head>
    <title>Light University - The next generation of education</title>
    <meta name="description" content="The next generation of education - powered by the government of Lumina">
</svelte:head>
<style lang="stylus">
@import "variables"

.hero
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
            padding 140px 16px
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
</style>