<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import ProgressBar from "$lib/display/ProgressBar.svelte"
import Circle from "svelte-material-icons/Circle.svelte"
import Button from "$lib/controls/Button.svelte"
import PlayOutline from "svelte-material-icons/PlayOutline.svelte"
import { UnitStatus } from "$lib/gql/graphql"
import { flatten_units } from "$lib/utils/unit"
import type { CourseFull } from "$lib/types/course"

export let enlarge: boolean
export let data: {
    unit_slug: string
    course: CourseFull
}
$: units = flatten_units(data.course.root_units)
$: number_of_units = units.length
$: current_unit_index = units.findIndex(unit => unit.unit_slug === data.unit_slug) + 1
$: percentage_completed = (units.filter(unit => unit.status === UnitStatus.Completed).length/units.length)*100
</script>

<a
    class="course"
    class:large={ enlarge }
    href={`/courses/${data.course.course_slug}/${data.unit_slug}`}>
    <div
        style:background-image="url({ data.course.image })"
        class="course-image"/>
    <div class="course-data">
        <div class="breadcrumbs">
            <div class="faded">Unit { current_unit_index } of { number_of_units }</div>
            <Icon
                icon={Circle}
                opacity={0.5}
                size={8}/>
            { data.course.units_by_slug[data.unit_slug].name }
        </div>
        <a
            class="name"
            href="/courses/{data.course.course_slug}">
            <Icon
                color={data.course.color}
                icon={data.course.icon}
                size="1.2em"/>
            { data.course.name }
        </a>
        {#if enlarge}
            <div class="description">
                { data.course.description }
            </div>
            <Button
                style="translucent"
                left_icon={PlayOutline}>
                Continue Course
            </Button>
        {/if}
        <div class="progress-bar">
            <ProgressBar width={percentage_completed}/>
        </div>

    </div>
</a>

<style lang="stylus">
@import "variables"
.course
    display flex
    background transparify(white, 4%)
    padding 16px
    flex-direction column
    gap 16px
    color white
    width 100%
    border-radius 4px
    &:hover, &:focus
        outline 2px dashed $brand
        outline-offset 4px

    &.large
        flex-direction row
        padding 24px
        gap 24px
        @media (max-width: $tablet)
            flex-direction column
            padding 16px
            gap 16px
        .course-image
            min-height 280px

        .name
            font-size 24px
    .course-image
        width 100%
        min-height 200px
        height 100%
        background transparify(white, 8%)
        background-size contain
        background-position center
        background-repeat no-repeat
        border-radius 4px
        flex 1
    .course-data
        flex 1
        display flex
        flex-direction column
        gap 16px
        align-items start
        padding 16px 0
    .progress-bar
        width 100%
        margin-top auto
    .name
        display flex
        align-items center
        font-weight 700
        gap 12px
        color white
        border-radius 4px
        padding 4px 8px
        background transparify(white, 4%)
        border 1px solid transparify(white, 8%)
        &:hover
            background transparify(white, 8%)
    .description
        font-size 18px
        font-weight 600
        color transparify(white, 50%)
        line-height 1.2em
    .breadcrumbs
        display flex
        align-items center
        gap 8px
        font-size 14px
        font-weight 700
        .faded
            opacity 0.5

</style>