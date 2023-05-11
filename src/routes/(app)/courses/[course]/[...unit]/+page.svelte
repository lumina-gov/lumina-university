<script lang="ts">
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
import { flatten_units } from "$lib/utils/unit"
import CourseProgressBar from "./CourseProgressBar.svelte"
import { graphql } from "$lib/gql"
import { page } from "$app/stores"
import { MessageType } from "$lib/types/message"
import { UnitStatus } from "$lib/gql/graphql"
import { afterNavigate } from "$app/navigation"
import UnitCompletionSound from "$lib/sounds/UnitCompletion.wav"
import Heading from "$lib/display/Heading.svelte"
import Text from "svelte-material-icons/Text.svelte"
import CourseTree from "../CourseTree.svelte"
import Sitemap from "svelte-material-icons/Sitemap.svelte"

export let data: PageData

$: unit = data.unit
let end_of_content: HTMLElement
let content: HTMLElement
let content_container: HTMLElement
let subunits_roots: Unit[] = []
let flattened_subunits: Unit[] = []

$: flattened_units = flatten_units(data.course.root_units)
$: previous_unit = get_unit_relative(unit, "previous")
$: next_unit = get_unit_relative(unit, "next")

$: if(data.course.units_by_slug[unit.unit_slug].subunits.length > 0) {
    subunits_roots = [data.course.units_by_slug[unit.unit_slug]]
    flattened_subunits = flatten_units(subunits_roots)
} else { subunits_roots = []; flattened_subunits = [] }

function check_completed(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    if (entries[0].isIntersecting) {
        observer.disconnect()
        if(unit.status === UnitStatus.Completed) return
        let sound = new Audio(UnitCompletionSound)
        sound.volume = 0.3
        sound.play()
        update_unit_progress(UnitStatus.Completed)
    }
}

async function update_unit_progress(status: UnitStatus): Promise<void> {
    if (unit.status === status) return
    if (data.user_store.user) {
        let res = await data.graph.gmutation(graphql(`
        mutation SetUnitProgress($course_slug: String!, $unit_slug: String!, $status: UnitStatus!) {
            set_unit_progress(course_slug: $course_slug, unit_slug: $unit_slug, status: $status) {
                id
            }
        }
    `), {course_slug: data.course.course_slug, unit_slug: unit.unit_slug, status})
        if (res.error) {
            return $page.data.alerts.create_alert(MessageType.Error, res.error.message)
        }
    } else {
        return $page.data.alerts.create_alert(MessageType.Warning, "Log in to track your progress")
    }
    unit.status = status
    unit = unit
}

afterNavigate(() => {
    content_container.scrollIntoView({block: "start", behavior: "instant"})

    let observer = new IntersectionObserver(check_completed, {threshold: 1.0})
    observer.observe(end_of_content)

    if (data.unit.status === UnitStatus.Completed) return
    update_unit_progress(UnitStatus.InProgress)
})


function get_unit_relative(unit: Unit, direction: "previous" | "next"): Unit | null {
    let index = flattened_units.findIndex(u => u.unit_slug === unit.unit_slug)
    let relative_index = direction === "previous" ? index - 1 : index + 1

    return flattened_units[relative_index] || null
}


</script>
<hr>
<div class="crumb-bar">
    <CourseBreadcrumbs course={data.course}/>
    <CourseProgressBar
        course={data.course}
        current_unit={data.unit}
        units={flattened_units}
        bind:unit={ data.unit }
        on:set_unit_progress={ e => update_unit_progress(e.detail) }/>
</div>
<hr>
<div class="layout">
    <ScrollbarRegion>
        <main>
            <div
                bind:this={ content_container }
                class="content-container">
                <div
                    bind:this={ content }
                    class="content">
                    <Heading left_icon={Text}>{ data.unit.name }</Heading>
                    <hr>
                    <MarkdownRenderer markdown={data.markdown}/>
                    <div bind:this={ end_of_content }/>
                    {#if subunits_roots.length > 0}
                        <div class="subunits">
                            <Heading left_icon={Sitemap}>Subunits</Heading>
                            <CourseTree
                                course_slug={data.course.course_slug}
                                root_units={subunits_roots}
                                units={flattened_subunits}
                            />
                        </div>
                    {/if}
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
                            href="https://github.com/lumina-gov/lumina-university/edit/main/src/lib/courses/{data.course.course_slug}/{data.unit.unit_slug}.md"
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
                        <TableOfContents
                            markdown={data.markdown}
                            bind:content/>
                    </div>
                </ScrollbarRegion>
            </div>
        </main>
    </ScrollbarRegion>
</div>


<style lang="stylus">
@import "variables"

.crumb-bar
    display flex
    max-width $laptop
    margin auto
    padding 0 16px
    width 100%
    @media (max-width $tablet)
        flex-direction column
        align-items center
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
    max-width 650px
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

.subunits
    display flex
    flex-direction column
    gap 16px
    padding 32px 0px

.inner-toc
    padding-top 40px
    width 100%
</style>