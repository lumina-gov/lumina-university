<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import BookVariant from "svelte-material-icons/BookVariant.svelte"
import type { PageData } from "./$types"
import Course from "./Course.svelte"

export let data: PageData
</script>
<hr/>
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>
        <Heading left_icon={BookVariant}>Courses</Heading>
        <VerticalLayout max_width={600}>
            <Paragraph>
                Welcome to Light University's courses page! Here you will find our courses,
                designed to provide you with the knowledge and skills you need to excel in your field.
                Our course is taught by industry experts and covers the latest trends and technologies
            </Paragraph>
        </VerticalLayout>
    </GridItem>
</Grid>
<hr/>
<Grid
    columns={{
        laptop: 12,
        tablet: 8,
        mobile: 4,
    }}
    padding_vertical={60}>
    {#each data.courses as course}
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 4",
                laptop: "span 4",
            }}>
            <Course {course}/>
        </GridItem>
    {/each}
</Grid>
