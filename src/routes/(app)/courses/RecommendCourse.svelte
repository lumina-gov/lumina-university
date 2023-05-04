<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import BookPlus from "svelte-material-icons/BookPlus.svelte"


</script>

<!-- <div class="wrapper">
    <div class="inner">

    </div>
</div> -->
<!-- <hr/>
<VerticalLayout max_width={600}>
    <Heading
        left_icon={BookPlus}
        level={2}>What Course Would You Like To See Added?</Heading>
    
    
</VerticalLayout> -->
<hr/>
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>
        <Heading
            left_icon={BookPlus}
            level={2}>What Would You Like To See Added?</Heading>
        <VerticalLayout max_width={600}>
            <Paragraph>
                Welcome to Light University's courses page! Here you will find our courses,
                designed to provide you with the knowledge and skills you need to excel in your field.
                Our course is taught by industry experts and covers the latest trends and technologies
            </Paragraph>
        </VerticalLayout>
    </GridItem>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>

        
    </GridItem>
</Grid>

<style lang="stylus">
@import "variables"

</style>