<script lang="ts">
import ArrowDecision from "svelte-material-icons/ArrowDecision.svelte"
import Brain from "svelte-material-icons/Brain.svelte"
import Icon from "$lib/display/Icon.svelte"
import OpenInNew from "svelte-material-icons/OpenInNew.svelte"
import HeadCheck from "svelte-material-icons/HeadCheck.svelte"
import Database from "svelte-material-icons/Database.svelte"
import Sitemap from "svelte-material-icons/Sitemap.svelte"
import { get_course_icon, get_up_next } from "$lib/courses/content";
import type { SvelteComponent } from "svelte";
import type { Course } from "$lib/types/course";



export let course: Course

$: prerequisites = course.prerequisites.map(async prereq => ({
    ...prereq,
    icon: await get_course_icon(prereq.slug)
}))

$: up_next = course.next_up.map(async next => ({
    ...next,
    icon: await get_course_icon(next.slug)
}))

</script>
{#if course.prerequisites.length > 0}
    <div class="wrapper">
        <div>PREREQUISITES</div>
        <div class="bars">
            {#each prerequisites as prerequisite_promise}
                {#await prerequisite_promise}
                    <div class="skeleton">

                    </div>
                {:then prerequisite}
                    <a class="prereq" href={prerequisite.slug}>
                        <Icon
                            color={prerequisite.color}
                            icon={prerequisite.icon}
                            size={18}/>
                        <div class="text">{ prerequisite.name }</div>
                        <Icon
                            color="white"
                            icon={OpenInNew}
                            opacity={0.5}
                            size={18}/>
                    </a>
                {/await}
                
            {/each}
        </div>
        <div>NEXT UP</div>
        <div class="bars">
            {#each up_next as next}
                <a class="prereq" href={next.slug}>
                    <Icon
                        color={next.color}
                        icon={next.icon}
                        size={18}/>
                    <div class="text">{ next.name }</div>
                    <Icon
                        color="white"
                        icon={OpenInNew}
                        opacity={0.5}
                        size={18}/>
                </a>
            {/each}
        </div>
    </div>
{/if}

<style lang="stylus">
@import "variables"

.wrapper
    display flex
    flex-direction column
    gap 16px
    padding 16px
    border 1px solid transparify(white, 10%)
    border-radius 8px
    font-size 18px
    font-weight 700
    color transparify(white, 50%)
    .bars
        display flex
        gap 8px
        flex-direction column
    .prereq
        color white
        font-size 16px
        font-weight 700
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
        background transparify(white, 4%)
</style>