<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import ProgressBar from "$lib/display/ProgressBar.svelte"
import Circle from "svelte-material-icons/Circle.svelte"
import { flatten_units } from "$lib/utils/unit"
import type { CourseFull } from "$lib/types/course"
import ButtonSound from "$lib/sounds/ButtonSound.wav"
import { UnitStatus } from "$lib/graphql/graphql-types"

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
    href="/courses/{data.course.course_slug}"
    on:click={ () => {
        new Audio(ButtonSound).play()
    } }>
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
        <div class="name">
            <Icon
                color={data.course.color}
                icon={data.course.icon}
                size="1.2em"/>
            { data.course.name }
        </div>
        {#if enlarge}
            <div class="description">
                { data.course.description }
            </div>
        {/if}
        <div class="progress-bar">
            <ProgressBar width={percentage_completed}/>
        </div>
    </div>
</a>

<style lang="stylus">
@import variables

.course
    display flex
    background transparify(white, 4%)
    flex-direction column
    color white
    width 100%
    border-radius 4px
    overflow hidden
    &:hover, &:focus
        background transparify(white, 8%)
        outline 0
    &.large
        flex-direction row
        .name
            font-size 22px
        .course-image
            min-height 300px

@media (max-width $tablet)
    .course.large
        flex-direction column
        .name
            font-size 24px

.course-image
    width 100%
    min-height 200px
    background transparify(white, 8%)
    background-size cover
    background-position center
    background-repeat no-repeat
    align-self stretch
    flex 1
.course-data
    flex 1
    display flex
    flex-direction column
    gap 16px
    align-items start
    padding 24px
.progress-bar
    width 100%
    margin-top auto
.name
    display flex
    align-items center
    font-weight 700
    font-size 18px
    gap 12px
    color white
    border-radius 4px

.description
    font-size 18px
    font-weight 400
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