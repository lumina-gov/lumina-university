<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import ProgressBar from "$lib/display/ProgressBar.svelte"
import CodeTags from "svelte-material-icons/CodeTags.svelte"
import Circle from "svelte-material-icons/Circle.svelte"
import Button from "$lib/controls/Button.svelte"
import PlayOutline from "svelte-material-icons/PlayOutline.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import Plus from "svelte-material-icons/Plus.svelte"


export let enlarge = true


let current_index = 0
export let recent_course: {
    slug: string | undefined,
    number_completed: number,
    course_length: number,
    last_unit: string | undefined,
}
let percentage_completed = (recent_course.number_completed/recent_course.course_length)*100

function formatString(str: string | undefined): string {
    if (!str) return ""
    const formattedStr = str.replace(/-/g, " ").replace(/\//g, " / ")
    return formattedStr.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}
let unit_name = formatString(recent_course.last_unit)
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
                        <div class="faded">Unit { current_index } of { recent_course.course_length }</div>
                        <Icon
                            icon={Circle}
                            opacity={0.5}
                            size={8}/>
                        { unit_name }
                    </div>
                    <div class="title-text">
                        <Icon
                            color="brand"
                            icon={CodeTags}
                            size={32}/>
                        {#if recent_course.slug} 
                            { recent_course.slug }
                        {/if}
                    </div>
                    <div class="subtext">
                        Learn how to limitless possibilities of software engineering and learn to turn your ideas into reality with our expertly curated course.
                    </div>
                </div>
                <div>
                    <Button
                        style="translucent"
                        href={`/courses/${recent_course.slug}/${recent_course.last_unit}`}
                        hug={true}
                        left_icon={PlayOutline}
                        text="Continue Course"/>
                </div>
            </div>
            <ProgressBar width={percentage_completed}/>
        </div>
    </div>
{:else}
    <Grid
        columns={{
            "mobile": 1,
            "tablet": 1,
            "laptop": 3,}}
        side_padding={false}
    >
        <a
            class="small-wrapper"
            href="/courses">
            <img
                class="image"
                alt="placeholder"
                src="src/routes/(app)/Courseplaceholder.png"/>
            <div class="description">
                <div class="top-text">
                    <div class="faded">Unit 7 of 32</div>
                    <Icon
                        icon={Circle}
                        opacity={0.5}
                        size={8}/>
                    How To Think Like A Programmer
                </div>
                <div class="title-text">Software Engineering</div>
                <ProgressBar width={25}/>
            </div>
        </a>
        <a
            class="add-course"
            href="/courses">
            <Icon
                color="white"
                icon={Plus}
                size={32}/>
            Find new course
        </a>
    </Grid>
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
    font-weight 800
    align-items center
    .faded
        color transparify(white, 50%)
.title-text
    display flex
    gap 10px
    align-items center
    text-transform capitalize
    font-size 24px
    font-weight 800
.subtext
    font-size 18px
    font-weight 600
    color transparify(white, 50%)

.small-wrapper
    display flex
    flex-direction column
    gap 16px
    padding 16px
    background transparify(white, 4%)
    border-radius 8px
    justify-content center
    max-width 380px
    @media screen and (max-width: $tablet)
        gap 16px
        padding 16px
        align-items center

    .image
        display flex
        width 100%
        border-radius 8px
        background transparify(white, 8%)

.description
    display flex
    flex-direction column
    gap 8px
    width 100%
    .title-text
        font-size 18px
        font-weight 00
        color white

.add-course
    color white
    display flex
    flex-direction column
    justify-content center
    align-items center
    gap 10px
    width 100%
    height 100%
    border-radius 8px
    font-weight 600
    font-size 18px
    background transparify(white, 20%)
    opacity 0.2
    &:hover
        opacity 1
        background transparify(white, 6%)
</style>