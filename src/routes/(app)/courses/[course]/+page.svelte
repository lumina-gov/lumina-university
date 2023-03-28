<script lang="ts">
import CourseSidebar from "./CourseSidebar.svelte"
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
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"

export let data: PageData

</script>
<hr>
<Grid>
    <GridItem
        columns={{
            laptop: "span 16",
            tablet: "span 8",
            mobile: "span 4",
        }}>
        <VerticalLayout
            align_items="flex-start"
            vertical_padding={80}>
            <Heading left_icon={Book}>
                { data.course.name }
            </Heading>

            <Button
                right_icon={BookEdit}
                text="Enroll"
            />
        </VerticalLayout>
    </GridItem>
</Grid>
<hr>
<Grid padding_vertical={60}>
    <GridItem
        border_radius={true}
        columns={{
            laptop: "span 6",
            tablet: "span 8",
            mobile: "span 4",
        }}
        translucent={true}>
        <Box padding={true}>
            <Subheading>Course Outline</Subheading>
        </Box>
        <hr>
        <CourseSidebar
            course_slug={data.slug}
            items={data.root_units}
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