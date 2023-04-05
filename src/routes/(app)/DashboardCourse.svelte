<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import ProgressBar from "$lib/display/ProgressBar.svelte"
import CodeTags from "svelte-material-icons/CodeTags.svelte"
import Circle from "svelte-material-icons/Circle.svelte"
import Button from "$lib/controls/Button.svelte"
import PlayOutline from "svelte-material-icons/PlayOutline.svelte"
export let enlarge = true
</script>

{#if enlarge}
    <div class="wrapper">
            
        <div class="image">
            <img
                alt="placeholder"
                src="src/routes/(app)/Courseplaceholder.png"/>
        </div>
        <div class="right-wrapper">
            <div class="button-text">
                <div class="text">
                    <div class="top-text">
                        <div class="faded">Unit 7 of 32</div>
                        <Icon
                            icon={Circle}
                            opacity={0.5}
                            size={8}/>
                        How To Think Like A Programmer
                    </div>
                    <div class="title-text">
                        <Icon
                            color="brand"
                            icon={CodeTags}
                            size={32}/>
                        Software Engineering
                    </div>
                    <div class="subtext">
                        Learn how to limitless possibilities of software engineering and learn to turn your ideas into reality with our expertly curated course.
                    </div>
                </div>
                <div>
                    <Button
                        style="translucent"
                        gamified={true}
                        hug={true}
                        left_icon={PlayOutline}
                        text="Continue Course"/>
                </div>
            </div>
            <ProgressBar width={25}/>
        </div>
    </div>
{:else}
    <div>
        <div class="image">
            <img
                alt="placeholder"
                src="src/routes/(app)/Courseplaceholder.png"/>
        </div>
    </div>
{/if}


<style lang="stylus">
@import "variables"
.wrapper
    display flex
    background transparify(white, 4%)
    padding 24px
    border-radius 8px
    gap 24px
    @media screen and (max-width: $tablet)
        flex-direction column
        gap 16px
        padding 16px
        align-items center
        max-width 450px
    .image
        display flex
        max-width 390px
        width 100%
        border-radius 8px
        background transparify(white, 8%)
    .right-wrapper
        display flex
        flex 1
        flex-direction column
        justify-content space-between
        padding 8px 0px
        gap 45px
        .button-text
            display flex
            flex-direction column
            gap 16px
            .text
                display flex
                flex-direction column
                gap 8px
.top-text
    font-size 14px
    display flex
    gap 8px
    color white
    align-items center
    .faded
        color transparify(white, 50%)
.title-text
    display flex
    gap 10px
    align-items center

    font-size 24px
    font-weight 800
.subtext
    font-size 18px
    font-weight 600
    color transparify(white, 50%)
</style>