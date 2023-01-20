<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import ResponsiveLayout from "$lib/layouts/ResponsiveLayout.svelte"
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
        }}>
        <Heading left_icon={BookVariant}>Courses</Heading>
    </GridItem>
</Grid>
<hr/>
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}>
        <ResponsiveLayout min_item_size={250}>
            {#each data.courses as course}
                <Course {course}/>
            {/each}
        </ResponsiveLayout>
    </GridItem>
</Grid>