<script lang="ts">
import type { CourseFull } from "$lib/types/course"
import RelatedCourses from "./RelatedCourses.svelte"

export let course: CourseFull

</script>
<div class="wrapper">
    <RelatedCourses
        related={course.prerequisites}
        related_type="PREREQUISITES"/>
    <RelatedCourses
        related={course.next_up}
        related_type="NEXT UP"/>
    <RelatedCourses
        related={course.recommended}
        related_type="RECOMMENDED"/>
</div>
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
</style>