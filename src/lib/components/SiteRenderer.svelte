<script lang="ts">
import html_renderer from "./blocks/html_renderer"
import Tag from "$lib/display/Tag.svelte"
import CodeEditor from "./CodeEditor.svelte"

let iframe: HTMLIFrameElement

export let html: string | undefined
export let css: string | undefined
export let javascript: string | undefined

$: full_html = html_renderer(html, css, javascript)

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
        <CodeEditor
            editable={true}
            language="css"
            bind:code={ css }/>
        <hr>
    {/if}
    {#if javascript}
        <CodeEditor
            editable={true}
            language="javascript"
            bind:code={ javascript }/>
        <hr>
    {/if}
    {#if html}
        <CodeEditor
            editable={true}
            language="html"
            bind:code={ html }/>
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