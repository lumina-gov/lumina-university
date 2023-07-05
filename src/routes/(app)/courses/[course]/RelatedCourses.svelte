<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Subheading from "$lib/display/Subheading.svelte"
import Tag from "$lib/display/Tag.svelte"
import type { RelatedCourseFragment } from "$lib/hygraph/graphql-types"
import OpenInNew from "svelte-material-icons/OpenInNew.svelte"

export let related_type: string
export let related: RelatedCourseFragment[]

</script>
<div class="wrapper">
    <Subheading>
        { related_type }
    </Subheading>
    {#if related.length > 0}
        <div class="related">
            {#each related as course}
                <a
                    class="related-course"
                    href="/courses/{course.slug}">
                    <Icon
                        color={course.color.hex}
                        icon={course.icon.url}
                        size="18px"/>
                    <div class="text">{ course.name }</div>
                    <Icon
                        color="white"
                        icon={OpenInNew}
                        opacity={0.5}
                        size={18}/>
                </a>
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
@import variables

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

// .skeleton
//     height 50px
//     border-radius 4px
//     width 100%
//     background linear-gradient(to right, transparify(white, 8%), transparify(white, 15%), transparify(white, 8%))
//     animation: pulse 1.5s ease-in-out infinite

@keyframes pulse
    0%
        background-position: -200px 0
    50%
        background-position: 200px 0
    100%
        background-position: -200px 0


</style>