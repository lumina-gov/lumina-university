<script lang="ts">
import CourseSidebar from "../CourseSidebar.svelte"
import type { PageData } from "./$types"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import Book from "svelte-material-icons/Book.svelte"
import Heading from "$lib/display/Heading.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import Subheading from "$lib/display/Subheading.svelte"
import Box from "$lib/cards/Box.svelte"
import BlocksArray from "$lib/components/blocks/BlocksArray.svelte"
import Button from "$lib/controls/Button.svelte"
import BookEdit from "svelte-material-icons/BookEdit.svelte"

export let data: PageData

</script>
<hr>
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            laptop: "span 5",
            tablet: "span 8",
            mobile: "span 4",
        }}>
        <CourseSidebar
            course_slug={data.slug}
            items={data.course.units}
        />
    </GridItem>
    <GridItem
        align_items="flex-start"
        border_radius={true}
        columns={{
            laptop: "span 10",
            tablet: "span 8",
            mobile: "span 4",
        }}
        padding="24px"
        translucent={true}>
        <BlocksArray blocks={data.blocks}/>
    </GridItem>
</Grid>