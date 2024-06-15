<PageHead title={data.course.name + " » " + unit.name}/>
<script lang="ts">
import Subheading from "$lib/display/Subheading.svelte"
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"
import TableOfContents from "./TableOfContents.svelte"
import ScrollbarRegion from "$lib/controls/ScrollbarRegion.svelte"
import CourseBreadcrumbs from "./CourseBreadcrumbs.svelte"
import UnitPaginator from "./UnitPaginator.svelte"
import CourseProgressBar from "./CourseProgressBar.svelte"
import { page } from "$app/stores"
import { MessageType } from "$lib/types/message"
import { afterNavigate } from "$app/navigation"
import UnitCompletionSound from "$lib/sounds/UnitCompletion.wav"
import Heading from "$lib/display/Heading.svelte"
import Text from "svelte-material-icons/Text.svelte"
import CourseTree from "../CourseTree.svelte"
import Sitemap from "svelte-material-icons/Sitemap.svelte"
import { SetUnitProgressDocument, UnitStatus } from "$lib/graphql/graphql-types"
import PageHead from "$lib/components/PageHead.svelte"
import type { ExtendedUnit } from "$lib/types/unit"
import QuestionBlock from "$lib/controls/QuestionBlock.svelte"
import SiteRenderer from "$lib/components/SiteRenderer.svelte"
import Course from "$lib/components/Course.svelte"
import { env } from "$env/dynamic/public"
import { PUBLIC_BUILDER_IO_KEY } from "$env/static/public"
import { Content } from "@builder.io/sdk-svelte"

export let data

$: unit = data.unit
$: extended_unit = data.unit_map[unit.slug]
let end_of_content: HTMLElement
let content: HTMLElement
let content_container: HTMLElement

$: units = data.units
$: subunits = units.filter(other_unit => other_unit.parentUnit?.slug === unit.slug)
$: previous_unit = get_unit_relative(extended_unit, "previous")
$: next_unit = get_unit_relative(extended_unit, "next")
$: user = data.user_store.user

function check_completed(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    if (entries[0].isIntersecting) {
        observer.disconnect()
        if(extended_unit.status === UnitStatus.Completed) return
        let sound = new Audio(UnitCompletionSound)
        sound.volume = 0.3
        sound.play()
        update_unit_progress(UnitStatus.Completed)
    }
}

async function update_unit_progress(status: UnitStatus): Promise<void> {
    let should_update_progress = extended_unit.unitProgressUpdatedAt ? new Date(extended_unit.unitProgressUpdatedAt) < new Date(unit.updatedAt) : true
    if(!should_update_progress) {
        if (extended_unit.status === UnitStatus.Completed) return
        if (extended_unit.status === status) return
    }
    if (user) {
        let res = await data.graph.gmutation(SetUnitProgressDocument, {
            course_slug: data.course.slug,
            unit_slug: extended_unit.slug, status
        })

        if (res.error) {
            return $page.data.alerts.create_alert(MessageType.Error, res.error.message)
        }
    } else {
        return $page.data.alerts.create_alert(MessageType.Warning, "Log in to track your progress")
    }
    extended_unit.status = status
    extended_unit = extended_unit
}

afterNavigate(() => {
    content_container.scrollIntoView({block: "start", behavior: "instant"})

    let observer = new IntersectionObserver(check_completed, {threshold: 1.0})
    observer.observe(end_of_content)

    update_unit_progress(UnitStatus.InProgress)
})


function get_unit_relative(unit: ExtendedUnit, direction: "previous" | "next"): ExtendedUnit | null {
    let index = units.findIndex(u => u.slug === unit.slug)
    let relative_index = direction === "previous" ? index - 1 : index + 1

    return units[relative_index] || null
}

</script>
<hr>
<div class="crumb-bar">
    <CourseBreadcrumbs course={data.course}/>
    <CourseProgressBar
        course={data.course}
        unit_map={data.unit_map}
        units={units}
        bind:unit={ extended_unit }
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
                    <Content
                        apiKey={env.PUBLIC_BUILDER_IO_KEY}
                        content={data.content}
                        model="page"/>
                    {#each data.unit.content as content}
                        {#if content.__typename === "MarkdownBlock"}
                            <MarkdownRenderer markdown={content.markdown}/>
                        {:else if content.__typename === "QuestionBlock"}
                            <QuestionBlock
                                context={content.context}
                                course_slug={data.course.slug}
                                question={content.question}
                                slug={content.id}
                                unit_slug={data.unit.slug}
                            />
                        {:else if content.__typename === "WebRenderer"}
                            <SiteRenderer
                                css={content.css || undefined}
                                html={content.html || undefined}
                                javascript={content.javascript || undefined}/>
                        {:else if content.__typename === "CourseBlock" && content.course}
                            <Course course={content.course}/>
                        {:else}
                            <p>Unknown content type: { content.__typename }</p>
                        {/if}
                    {/each}
                    <div bind:this={ end_of_content }/>
                    {#if subunits.length > 0}
                        <div class="subunits">
                            <Heading left_icon={Sitemap}>Subunits</Heading>
                            <CourseTree
                                course_slug={data.course.slug}
                                root_units={subunits}
                                units={units}
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
                </div>
            </div>
            <div class="toc">
                <ScrollbarRegion>
                    <div class="inner-toc">
                        <Subheading>On this page</Subheading>
                        <TableOfContents
                            markdown={data.unit.content.map(c => c.__typename === "MarkdownBlock" ? c.markdown : "").join("")}
                            bind:content/>
                    </div>
                </ScrollbarRegion>
            </div>
        </main>
    </ScrollbarRegion>
</div>

<style lang="stylus">
@import variables

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
    gap 1.8em

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

.inner-toc
    padding-top 40px
    width 100%
</style>