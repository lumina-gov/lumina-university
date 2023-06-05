<script lang="ts">
import type { ContainerDirective } from "mdast-util-directive"
import type { Code } from "mdast-util-from-markdown/lib"
import html_renderer from "./html_renderer"
import CodeBlock from "./CodeBlock.svelte"
import Tag from "$lib/display/Tag.svelte"

export let block: ContainerDirective
let iframe: HTMLIFrameElement

$: html = get_code("html", block)
$: css = get_code("css", block)
$: js = get_code("js", block)

function get_code(lang: string, block: ContainerDirective): Code | undefined {
    return block.children.find(child => child.type === "code" && child.lang === lang) as Code | undefined
}

$: full_html = html_renderer(html?.value, css?.value, js?.value)

let document_title: string | undefined

function loaded () {
    if (!iframe.contentDocument) {
        iframe.style.height = "unset"
        return
    }
    document_title = iframe.contentDocument?.title
    iframe.style.height = (iframe.contentDocument?.body.scrollHeight || 0) + 1 + "px"
}

</script>

<div class="site">
    {#if css}
        <CodeBlock
            editable={true}
            bind:block={ css }/>
        <hr>
    {/if}
    {#if js}
        <CodeBlock
            editable={true}
            bind:block={ js }/>
        <hr>
    {/if}
    {#if html}
        <CodeBlock
            editable={true}
            bind:block={ html }/>
        <hr>
    {/if}
    <div class="tab">
        <Tag color="brand">Output</Tag>
        {#if document_title}
            Tab Title:
            <Tag color="blue">{ document_title }</Tag>
        {/if}
    </div>
    <iframe
        bind:this={ iframe }
        srcdoc={full_html}
        title="IFrame"
        on:load={ loaded }/>
</div>
<style lang="stylus">
@import variables

.site
    // outline 2px solid transparify(white, 12%)
    // outline-offset 10px
    border-radius 4px
    display flex
    overflow hidden
    flex-direction column
    width 100%
    border 1px solid transparify(white, 10%)
    .tab
        background transparify(white, 4%)
        // border-top 1px solid transparify(white, 10%)
        padding 4px 8px
        font-size 14px
        font-weight 500

iframe
    width 100%
    border none
    border-top 1px solid transparify(white, 10%)
    border-radius 4px
    box-sizing border-box

</style>