<script lang="ts">
import CourseSidebar from "./CourseSidebar.svelte"
import type { PageData } from "./$types"

export let data: PageData
</script>


<CourseSidebar
    course_slug{data.course_slug}
    items={data.course.units}
/>
