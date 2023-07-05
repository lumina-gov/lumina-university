<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import type { BasicCourseInfoFragment } from "$lib/hygraph/graphql-types"
import CoursePlaceholder from "$lib/images/course_placeholder.svg"

export let course: BasicCourseInfoFragment
</script>
<a
    class="course"
    href="/courses/{course.slug}">
    <div
        style:background-image="url('{ course.image.url || CoursePlaceholder }')"
        class="image"/>
    <div class="contents">
        <h3>
            <Icon
                color={course.color.hex}
                icon={course.icon.url}
                size="1.2em"/>
            { course.name }
        </h3>
        <div class="info">
            <div class="tags">
                {#each course.topics as topic}
                    <Tag
                        color={topic.color.hex}
                        text={topic.name}/>
                {/each}
            </div>
        </div>
    </div>
</a>
<style lang="stylus">
@import variables


.course
    display flex
    flex-direction column
    background transparify(white, 4%)
    border-radius 6px
    width 100%
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