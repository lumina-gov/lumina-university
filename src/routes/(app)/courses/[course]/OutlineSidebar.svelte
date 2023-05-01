<script lang="ts">
import ChevronDoubleLeft from "svelte-material-icons/ChevronDoubleLeft.svelte"
import Icon from "$lib/display/Icon.svelte"
import BookOpenPageVariant from "svelte-material-icons/BookOpenPageVariant.svelte"
import CodeTags from "svelte-material-icons/CodeTags.svelte"
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
import BookmarkCheck from "svelte-material-icons/BookmarkCheck.svelte"
import ClockTimeFour from "svelte-material-icons/ClockTimeFour.svelte"
import type { SvelteComponent } from "svelte"
export let course_name: string
export let unit_count: number
export let course_icon: typeof SvelteComponent
let stats = [
    {
        icon: AccountGroup,
        text: "251 Students"
    },
    {
        icon: BookmarkCheck,
        text: `${unit_count} Units`
    },
    {
        icon: ClockTimeFour,
        text: "Updated 1 Day Ago"
    },
]
</script>

<div class="wrapper">
    <a
        class="all-courses"
        href="/courses">
        <Icon
            color="white"
            icon={ChevronDoubleLeft}
            opacity={0.5}
            size={18}/>
        <Icon
            color="brand"
            icon={BookOpenPageVariant}
            size={18}/>
        <div class="text">ALL COURSES</div>
    </a>
    <div class="course-details">
        <div class="name">
            {#if course_icon}
                <Icon
                    color="brand"
                    icon={course_icon}
                    size={48}/>
            {/if}
            <div>{ course_name }</div>
        </div>
        <div class="stats">
            {#each stats as stat}
                <div class="stat">
                    <Icon
                        color="white"
                        icon={stat.icon}
                        size={18}/>
                    <div>{ stat.text }</div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="stylus">
@import "variables"

a
    color white

.wrapper
    display flex
    border-radius 8px
    flex-direction column
    border 1px solid transparify(white, 10%)
    .all-courses
        cursor pointer
        padding 16px
        display flex
        align-items center
        gap 6px
        background transparify(white, 4%)
        border-bottom 1px solid transparify(white, 10%)
        .text
            font-size 16px
            font-weight 800
    .course-details
        display flex
        flex-direction column
        padding 16px
        gap 16px
        .name
            display flex
            flex-direction column
            font-size 26px
            font-weight 700
            gap 16px
        .stats
            opacity 0.5
            gap 12px
            display flex
            flex-direction column
            .stat
                display flex
                gap 8px
                align-items center

</style>