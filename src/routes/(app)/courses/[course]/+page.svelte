<script lang="ts">
import type { PageData } from "./$types"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import Button from "$lib/controls/Button.svelte"
import BookEdit from "svelte-material-icons/BookEdit.svelte"
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"
import OutlineSidebar from "./OutlineSidebar.svelte"
import ExtrasSidebar from "./ExtrasSidebar.svelte"

export let data: PageData

</script>
<hr>

<Grid padding_vertical={60}>
    <GridItem
        border_radius={true}
        columns={{
            laptop: "span 6",
            tablet: "span 8",
            mobile: "span 4",
        }}
        gap={16}
        translucent={false}>
        <OutlineSidebar course_name={data.course.name}/>
        <ExtrasSidebar/>
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
        padding="24px"
        translucent={true}>
        <MarkdownRenderer markdown={data.markdown}/>
        <Button
            right_icon={BookEdit}
            text="Enroll"
        />
    </GridItem>
</Grid>