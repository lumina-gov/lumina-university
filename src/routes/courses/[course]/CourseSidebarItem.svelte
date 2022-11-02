<script lang="ts">
    import { page } from "$app/stores"
import PlayIcon from "$lib/display/PlayIcon.svelte"
import { Status } from "$lib/types/course"

export let course_slug: string
export let item: { slug: string, name: string, status: Status }
$: url = `/courses/${course_slug}/${item.slug}`
</script>
<a
    class="item {item.status}"
    href={url}
    class:completed={item.status === Status.Completed}
    class:in_progress={item.status === Status.InProgress}
    class:active={$page.url.pathname === url}
    >
    <div class="left">
        <div class="play-section">
            <div class="line top"/>
            <PlayIcon completion={item.status === Status.NotStarted ? 0 : item.status === Status.Completed ? 1 : 0.5}/>
            <div class="line bottom"/>
        </div>
        <div class="name">
            {item.name}
        </div>
    </div>
</a>
<style lang="stylus">
@import "variables"

.item
    display flex
    align-items center
    justify-content space-between
    gap 8px
    height 34px
    padding 0 16px
    font-size 14px
    font-weight 500
    color white
    text-decoration none
    transition color 0.2s
    .left
        height 100%
        display flex
        align-items center
        gap 16px
        .name
            padding 8px 0
    .play-section
        display flex
        height 100%
        flex-direction column
        align-items center
    .line
        width 4px
        flex 1
        background mix(white, $dark_app, 10%)
        height 100%
        margin-top -2px
        margin-bottom -2px
    &.not_started
        .name
            color transparify(white, 50%)
    &:last-child
        .line.bottom
            opacity 0
    &:first-child
        .line.top
            opacity 0
    &.completed
        .line
            background $brand
    &.in_progress
        .line.top
            background $brand
    &:hover, &.active
        background transparify(white, 4%)
</style>