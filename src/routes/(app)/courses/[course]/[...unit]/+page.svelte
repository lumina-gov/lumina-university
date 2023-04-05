<script lang="ts">
import CourseSidebar from "../CourseSidebar.svelte"
import type { PageData } from "./$types"
import Subheading from "$lib/display/Subheading.svelte"
import Button from "$lib/controls/Button.svelte"
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"
import TableOfContents from "./TableOfContents.svelte"
import ScrollbarRegion from "$lib/controls/ScrollbarRegion.svelte"
import CourseBreadcrumbs from "./CourseBreadcrumbs.svelte"
import Pencil from "svelte-material-icons/Pencil.svelte"
import type { Unit } from "$lib/types/unit"
import UnitPaginator from "./UnitPaginator.svelte"

export let data: PageData

$: previous_unit = get_unit_relative(data.units_by_id[data.unit.slug], "previous")
$: next_unit = get_unit_relative(data.units_by_id[data.unit.slug], "next")

function flatten_unit(unit: Unit): Unit[] {
    let flattened: Unit[] = []
    flattened.push(unit)

    for (let subunit of unit.subunits) {
        flattened.push(...flatten_unit(subunit))
    }

    return flattened
}

function get_unit_relative(unit: Unit, direction: "previous" | "next"): Unit | null {
    let units_flattened = data.root_units.flatMap(unit => flatten_unit(unit))
    let index = units_flattened.findIndex(u => u.slug === unit.slug)
    let relative_index = direction === "previous" ? index - 1 : index + 1

    return units_flattened[relative_index] || null
}

</script>
<hr>
<div class="layout">
    <div class="sidebar">
        <CourseBreadcrumbs course={data.course}/>
        <hr>
        <CourseSidebar
            course_slug={data.course.slug}
            items={data.root_units}
        />
    </div>
    <ScrollbarRegion>
        <main>
            <div class="content-container">
                <div
                    id="content"
                    class="content">
                    <MarkdownRenderer markdown={data.markdown}/>
                    <div class="section row">
                        <UnitPaginator
                            course={data.course}
                            direction="previous"
                            unit={previous_unit}/>
                        <UnitPaginator
                            course={data.course}
                            direction="next"
                            unit={next_unit}/>
                    </div>
                    <div class="section">
                        <Button
                            style="transparent"
                            href="https://github.com/lumina-gov/light-university/edit/main/src/lib/courses/{data.course.slug}/{data.unit.slug}.md"
                            left_icon={Pencil}>
                            Edit this page on GitHub
                        </Button>
                    </div>
                </div>
            </div>
            <div class="toc">
                <ScrollbarRegion>
                    <div class="inner-toc">
                        <Subheading>On this page</Subheading>
                        <TableOfContents markdown={data.markdown}/>
                    </div>
                </ScrollbarRegion>
            </div>
        </main>
    </ScrollbarRegion>
</div>
<style lang="stylus">
@import "variables"

.section
    display flex
    flex-direction column
    gap 16px
    &.row
        flex-direction row

.layout
    display flex
    flex-direction row
    max-height 100%
    height 100%
    flex 1
    flex-basis 0
    position relative
    overflow-y hidden

.sidebar
    width 100%
    max-width 380px
    border-right 1px solid transparify(white, 10%)

main
    flex 1
    display flex
    height 100%
    flex-basis 0
    gap 40px

.content-container
    flex 1
    padding 40px

.content
    max-width 700px
    margin 0 auto
    display flex
    flex-direction column
    gap 16px

.toc
    width 100%
    position sticky
    height calc(100vh - 61px)
    top 0
    max-width 300px
    @media (max-width 1400px)
        display none

.inner-toc
    padding-top 40px
    width 100%


</style>