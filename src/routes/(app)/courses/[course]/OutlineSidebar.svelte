<script lang="ts">
import ChevronDoubleLeft from "svelte-material-icons/ChevronDoubleLeft.svelte"
import Icon from "$lib/display/Icon.svelte"
import BookOpenPageVariant from "svelte-material-icons/BookOpenPageVariant.svelte"
import BookmarkCheck from "svelte-material-icons/BookmarkCheck.svelte"
import ClockTimeFour from "svelte-material-icons/ClockTimeFour.svelte"
import type { GetCourseQuery } from "$lib/hygraph/graphql-types"
import { format_human_date } from "$lib/utils/date_human"
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"

export let course: NonNullable<GetCourseQuery["course"]>

$: units = course.units.length

$: stats = [
    {
        icon: AccountGroup,
        text: "251 Students"
    },
    {
        icon: BookmarkCheck,
        text: `${units} Units`
    },
    {
        icon: ClockTimeFour,
        // find the last updated unit
        text: "Updated " + format_human_date(new Date([...course.units].sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1)[0]?.updatedAt || course.updatedAt))
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
    <div
        style:background-image="url('{ course.image.url }')"
        class="image"/>
    <div class="course-details">
        <div class="name">
            <Icon
                color={course.color.hex}
                icon={course.icon.url}
                size="48px"/>
            <div>{ course.name }</div>
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
@import variables

a
    color white

.image
    background transparify(white, 4%)
    height 200px
    display flex
    align-items center
    justify-content center
    overflow hidden
    background-size cover
    background-position center

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