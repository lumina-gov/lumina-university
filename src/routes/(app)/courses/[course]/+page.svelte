<PageHead
    description={data.course.description}
    title={data.course.name}/>
<SchemaComponent schema={schema}/>
<script lang="ts">
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import OutlineSidebar from "./OutlineSidebar.svelte"
import ExtrasSidebar from "./ExtrasSidebar.svelte"
import CourseTree from "./CourseTree.svelte"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Button from "$lib/controls/Button.svelte"
import Play from "svelte-material-icons/Play.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import Tag from "$lib/display/Tag.svelte"
import PageHead from "$lib/components/PageHead.svelte"
import SchemaComponent from "$lib/components/SchemaComponent.svelte"
import type { Course, WithContext} from "schema-dts"
import { UnitStatus } from "$lib/graphql/graphql-types"

export let data

$: schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: data.course.name,
    description: data.course.description,
    provider: {
        "@type": "Organization",
        name: "Lumina University",
        sameAs: "https://luminauniversity.earth",
    },

} satisfies WithContext<Course>

$: root_units = units.filter(unit => unit.parentUnit === null)
$: units = data.units

// make sure there is at least one unit in progress
$: {
    let first_unit = units.find(unit => unit.status !== UnitStatus.Completed)

    if(first_unit) {
        first_unit.status = UnitStatus.InProgress
    }
}

</script>
<hr>
<div class="header">
    <div
        style:background-image="url('{ data.course.image.url }')"
        class="image"/>
    <Grid padding_vertical={60}>
        <GridItem
            align_items="flex-start"
            border_radius={true}
            columns={{
                laptop: "span 10",
                tablet: "span 8",
                mobile: "span 4",
            }}
            gap={24}
            padding="16px"
            translucent={false}>
            <FlexWrap>
                {#each data.course.topics as tag}
                    <Tag
                        color={tag.color.hex}
                        filled={true}>{ tag.name.toUpperCase() }</Tag>
                {/each}
            </FlexWrap>
            <Heading
                left_icon={data.course.icon.url}
                left_icon_color={data.course.color.hex}>{ data.course.name }</Heading>
            <Paragraph>
                { data.course.description }
            </Paragraph>
            <Button
                right_icon={Play}
                use_sound={false}>
                Start Course
            </Button>
        </GridItem>
    </Grid>
</div>

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
        position={{
            laptop: "sticky",
            tablet: "static",
            mobile: "static",
        }}
        top_distance={78}
        translucent={false}>
        <OutlineSidebar course={data.course} />
        <ExtrasSidebar course={data.course} />
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
        padding="16px"
        translucent={false}>
        <CourseTree
            course_slug={data.course.slug}
            root_units={root_units}
            units={units}/>
    </GridItem>
</Grid>
<style lang="stylus">
@import variables

.image
    background transparify(white, 4%)
    background-size cover
    background-position center
    position absolute
    width 100%
    top 0
    left 0
    height 100%
    z-index -2
    &::after
        content ""
        background transparify(black, 50%)
        position absolute
        width 100%
        top 0
        left 0
        height 100%
        z-index -1
        backdrop-filter blur(6px)

.header
    position relative

</style>