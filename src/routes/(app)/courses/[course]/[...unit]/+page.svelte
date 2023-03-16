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
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"
import TableOfContents from "./TableOfContents.svelte"
import ScrollbarRegion from "$lib/controls/ScrollbarRegion.svelte"
import CourseBreadcrumbs from "./CourseBreadcrumbs.svelte"
import Pencil from "svelte-material-icons/Pencil.svelte"

export let data: PageData

</script>
<hr>
<div class="layout">
    <div class="sidebar">
        <CourseBreadcrumbs course={data.course}/>
        <hr>
        <CourseSidebar
            course_slug={data.slug}
            items={data.units_tree}
        />
    </div>
    <ScrollbarRegion>
        <main>
            <div class="content-container">
                <div
                    id="content"
                    class="content">
                    <MarkdownRenderer markdown={data.markdown}/>
                    <Button
                        style="transparent"
                        href="https://github.com/luminagov/lumina-education/edit/main/src/lib/courses/{data.slug}.md"
                        left_icon={Pencil}>
                        Edit this page on GitHub
                    </Button>
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

.toc
    width 100%
    position sticky
    height calc(100vh - 60px)
    top 0
    max-width 300px
    @media (max-width 1400px)
        display none

.inner-toc
    padding-top 40px
    width 100%


</style>