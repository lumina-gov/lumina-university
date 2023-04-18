<script lang="ts">
import type { PageData } from "./$types"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import Button from "$lib/controls/Button.svelte"
import BookEdit from "svelte-material-icons/BookEdit.svelte"
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"
import OutlineSidebar from "./OutlineSidebar.svelte"
import ExtrasSidebar from "./ExtrasSidebar.svelte"

import CourseTree from "./CourseTree.svelte"
import { flatten_unit, flatten_units } from "$lib/utils/unit"

export let data: PageData

</script>
<hr>

<Grid padding_vertical={60}>
    <GridItem
        align_self="start"
        border_radius={true}
        columns={{
            laptop: "span 6",
            tablet: "span 8",
            mobile: "span 4",
        }}
        gap={16}
        position="sticky"
        top_distance={78}
        translucent={false}>
        <OutlineSidebar
            course_name={data.course.name}
            unit_count={data.root_units.flatMap(unit => flatten_unit(unit)).length}/>
        <ExtrasSidebar show={false}/>
    </GridItem>
    <GridItem
        align_items="flex-start"
        border_radius={true}
        columns={{
            laptop: "span 10",
            tablet: "span 8",
            mobile: "span 4",
        }}
        gap={24}
        padding="24px 108px"
        translucent={false}>
        <CourseTree
            course_slug={data.course.slug}
            root_units={data.root_units}
            units={flatten_units(data.root_units)}/>
        <!-- <MarkdownRenderer markdown={data.markdown}/> -->
    </GridItem>
</Grid>