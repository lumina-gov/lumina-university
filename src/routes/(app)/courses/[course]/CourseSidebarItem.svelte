<script lang="ts">
import { page } from "$app/stores"
import Icon from "$lib/display/Icon.svelte"
import { CoursesBySlugQuery } from "$lib/gql/graphql"
import { UnitStatus } from "$lib/types/unit"
import CheckCircle from "svelte-material-icons/CheckCircle.svelte"
import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Clock from "svelte-material-icons/Clock.svelte"
import Text from "svelte-material-icons/Text.svelte"

export let course_slug: string
export let item: NonNullable<CoursesBySlugQuery["course_by_slug"]>["units"][number]
export let padding_left = 8

let toggled = true

$: status = UnitStatus.NotStarted // TODO
$: has_subunits = false// TODO: item.subunits && item.subunits.length > 0
$: url = `/courses/${course_slug}/${item.slug}`

function toggle_children(e: Event) {
    if (has_subunits) {
        e.preventDefault()
        e.stopPropagation()
        toggled = !toggled
    }
}
</script>
<a
    style:padding-left={ padding_left + "px" }
    class="item {status}"
    class:active={ $page.url.pathname === url }
    class:completed={ status === UnitStatus.Completed }
    class:not_started={ status === UnitStatus.NotStarted }
    href={url}>
    <div
        class="subunits-toggle"
        class:visible={ has_subunits }
        on:keyup={ e => e.key === "Enter" && toggle_children(e) }
        on:click={ toggle_children }>
        <Icon icon={toggled ? ChevronDown : ChevronRight}/>
    </div>
    <Icon
        color="brand"
        icon={Text}
        size={18}/>
    <div class="name">
        { item.name }
    </div>
    {#if status === UnitStatus.InProgress}
        <Icon
            color="white"
            icon={Clock}
            opacity={0.2}
            size={18}/>
    {/if}
    {#if status === UnitStatus.Completed}
        <Icon
            color="brand"
            icon={CheckCircle}
            size={18}/>
    {/if}
</a>
<!-- {#if toggled && item.subunits && item.subunits.length > 0}
    {#each item.subunits as subunit}
        <svelte:self
            {course_slug}
            item={subunit}
            padding_left={padding_left + 16}/>
    {/each}
{/if} -->
<style lang="stylus">
@import "variables"

.name
    flex 1
    display flex
    align-items center
    gap 8px

.item
    display flex
    align-items center
    gap 8px
    padding 8px
    font-size 14px
    font-weight 500
    color white
    text-decoration none
    transition color 0.2s
    &:hover, &.active
        background transparify(white, 4%)
    &.not_started
        .name
            opacity 0.5


.subunits-toggle
    padding 6px
    display inline-flex
    opacity 0
    &.visible
        opacity 1
        cursor pointer
    &:hover
        background transparify(white, 8%)
</style>