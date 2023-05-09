<script lang="ts">
import { get_full_course } from "$lib/courses/content"
import Icon from "$lib/display/Icon.svelte"
import Subheading from "$lib/display/Subheading.svelte"
import Tag from "$lib/display/Tag.svelte"
import OpenInNew from "svelte-material-icons/OpenInNew.svelte"

export let related_type: string
export let related: string[]

$: related_courses = related.map(async related => await get_full_course(related, {}))
</script>
<div class="wrapper">
    <Subheading>
        { related_type }
    </Subheading>
    {#if related.length > 0}
        <div class="related">
            {#each related_courses as course_promise}
                {#await course_promise}
                    <div class="skeleton"/>
                {:then course}
                    <a
                        class="related-course"
                        href="/courses/{course.course_slug}">
                        <Icon
                            color={course.color}
                            icon={course.icon}
                            size={18}/>
                        <div class="text">{ course.name }</div>
                        <Icon
                            color="white"
                            icon={OpenInNew}
                            opacity={0.5}
                            size={18}/>
                    </a>
                {/await}
            {/each}
        </div>
    {:else}
        <Tag
            color="white"
            opacity={true}
            small={true}
            text="No related courses"
        />
    {/if}
</div>
<style lang="stylus">
@import "variables"

.wrapper
    display flex
    flex-direction column
    align-items flex-start
    gap 16px

.related
    display flex
    gap 8px
    flex-direction column
    width 100%

.related-course
    color white
    font-size 16px
    font-weight 700
    width 100%
    gap 8px
    display flex
    align-items center
    padding 16px
    border-radius 4px
    background transparify(white, 4%)
    text-transform capitalize
    .text
        display flex
        flex 1
.skeleton
    height 50px
    border-radius 4px
    width 100%
    background linear-gradient(to right, transparify(white, 8%), transparify(white, 15%), transparify(white, 8%))
    animation: pulse 1.5s ease-in-out infinite

@keyframes pulse
    0%
        background-position: -200px 0
    50%
        background-position: 200px 0
    100%
        background-position: -200px 0


</style>