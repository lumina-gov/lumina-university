<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import ImageOutline from "svelte-material-icons/ImageOutline.svelte"
import CoursePlaceholder from "$lib/images/course_placeholder.svg"
import type { CourseRaw } from "$lib/types/course"

export let course: CourseRaw & {
    course_slug: string
}
</script>
<a
    class="course"
    href="/courses/{course.course_slug}">
    <div
        style:background-image="url('{ course.image || CoursePlaceholder }')"
        class="image"/>
    <div class="contents">
        <h3>
            <Icon
                color={course.color}
                icon={course.icon}
                size="1.2em"/>
            { course.name }
        </h3>
        <div class="info">
            <span>{ Object.keys(course.units_by_slug).length } units</span>
            <div class="tags">
                {#each course.tags as tag}
                    <Tag
                        color={tag.color}
                        text={tag.name}/>
                {/each}
            </div>
        </div>
    </div>
</a>
<style lang="stylus">
@import "variables"


.course
    display flex
    flex-direction column
    background transparify(white, 4%)
    border-radius 6px
    overflow hidden
    color white
    &:hover
        background transparify(white, 8%)
    .image
        background transparify(white, 4%)
        height 200px
        display flex
        align-items center
        justify-content center
        overflow hidden
        background-size cover
        background-position center

h3
    font-size 16px
    font-weight 600
    display flex
    align-items center
    gap 6px

.info
    display flex
    justify-content space-between
    align-items center
    span
        opacity 0.5

.tags
    display flex
    gap 8px
    align-items center

.contents
    padding 16px
    gap 8px
    display flex
    flex-direction column
</style>