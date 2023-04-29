<script lang="ts">
import type { PageData } from "./$types"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import OutlineSidebar from "./OutlineSidebar.svelte"
import ExtrasSidebar from "./ExtrasSidebar.svelte"

import CourseTree from "./CourseTree.svelte"
import { flatten_units } from "$lib/utils/unit"
import { UnitStatus } from "$lib/gql/graphql"

export let data: PageData

$: units = flatten_units(data.course.root_units)

$: {
    let first_unit = units.find(unit => unit.status !== UnitStatus.Completed)

    if(first_unit) {
        first_unit.status = UnitStatus.InProgress
    }
}

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
            course_icon={data.course.icon}
            course_name={data.course.name}
            unit_count={units.length}/>
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
            course_slug={data.course.course_slug}
            root_units={data.course.root_units}
            units={units}/>
    </GridItem>
</Grid>