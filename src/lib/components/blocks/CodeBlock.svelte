<script lang="ts">
import type { Code } from "mdast-util-from-markdown/lib"
import hljs from "highlight.js"
import ContentCopy from "svelte-material-icons/ContentCopy.svelte"
import Icon from "$lib/display/Icon.svelte"
import { page } from "$app/stores"
import { MessageType } from "$lib/types/message"
import ButtonSound from "$lib/sounds/ButtonSound.wav"
import Tag from "$lib/display/Tag.svelte"
import { onMount, tick } from "svelte"
export let block: Code
export let editable = false

let pre: HTMLPreElement
let textarea: HTMLTextAreaElement
let code: HTMLElement

$: highlighted_code = hljs.highlight(block.value, {
    language: block.lang || "plaintext",
})

$: lines = highlighted_code.value.split("\n")
$: digits = lines.length.toString().length
$: numbers = lines.map((_, i) => {
    const number = (i + 1).toString()

    return [
        "0".repeat(digits - number.length),
        number,
    ]
})

function copy() {
    navigator.clipboard.writeText(block.value)
    $page.data.alerts.create_alert(MessageType.Info, "Copied to clipboard")
    let audio = new Audio(ButtonSound)
    audio.play()
}

async function resize() {
    await tick()
    if(!textarea) return
    textarea.style.height = `${pre.scrollHeight}px`
}

onMount(resize)

</script>
<pre
    bind:this={ pre }
    class:editable>
    <div
        class="header"
        class:show-header={ block.lang }>
        {#if block.lang}
            <Tag>{ block.lang }</Tag>
        {/if}
        {#if editable}
            <Tag color="green">Editable</Tag>
        {/if}
        <div
            class="copy"
            on:keypress={ e => e.key === "Enter" ? copy() : null }
            on:click={ copy }>
            <Icon icon={ContentCopy}/>
        </div>
    </div>
    <code bind:this={ code }>
        <div class="line">
            <div class="number small">{ Array(digits).fill(" ").join("") }</div>
        </div>
        {#each lines as line, i}
            <div class="line">
                <div class="number"><span class="zero">{ numbers[i][0] }</span>{ numbers[i][1] }</div>
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                <div class="code">{@html line}</div>
            </div>
        {/each}
        {#if editable}
            <div class="line textarea">
                <div class="number">{ Array(digits).fill(" ").join("") }</div>
                <textarea
                    bind:this={ textarea }
                    bind:value={ block.value }
                    on:input={ resize }/>
            </div>
        {/if}
        <div class="line">
            <div class="number small">{ Array(digits).fill(" ").join("") }</div>
        </div>
    </code>
</pre>
<style lang="stylus">
@import variables

.copy
    display inline-flex
    cursor pointer
    color white
    font-size 20px
    padding 6px
    border-radius 4px
    user-select none
    color transparify(white, 80%)
    background mix(white, $dark_app, 15%)
    margin-left auto
    &:hover, &:active
        color white
        background mix(white, $dark_app, 25%)

.header
    border-bottom 1px solid transparify(white, 10%)
    padding 4px
    gap 6px
    display contents
    align-items center
    justify-content space-between
    &.show-header
        display flex
    &:not(.show-header)
        .copy
            position absolute
            top 0
            right 0
            margin 10px

.number
    white-space pre
    color white
    user-select none
    background transparify(white, 6%)
    padding 0 8px
    letter-spacing 2px
    .zero
        display inline
        opacity 0.2

    &.small
        height 8px

pre
    position relative
    font-size 14px
    background transparify(white, 6%)
    font-family "Source Code Pro", monospace
    border-radius 4px
    &.editable
        border-radius 0
    width 100%
    white-space normal

.textarea
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    padding-top 8px
    padding-bottom 8px
    .number
        opacity 0

textarea
    font-size inherit
    line-height inherit
    white-space pre-wrap
    // word-break break-all
    font-family inherit
    width 100%
    z-index 1
    color transparent
    resize none
    background transparent
    opacity 1
    outline none
    caret-color white
    padding 0
    margin 0

code
    width 100%
    display block
    position relative

.code
    white-space pre-wrap
    max-width 100%
    // word-break break-all
    overflow-wrap anywhere

.line
    display flex
    gap 16px
    padding-right 16px

:global
    .hljs-comment,
    .hljs-quote
        color: #5c6370
        font-style: italic

    .hljs-doctag,
    .hljs-keyword,
    .hljs-formula
        color: #c678dd


    .hljs-section,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-deletion,
    .hljs-subst
        color: #e06c75

    .hljs-literal
        color: #56b6c2

    .hljs-string,
    .hljs-regexp,
    .hljs-addition,
    .hljs-attribute,
    .hljs-meta-string
        color: #98c379

    .hljs-built_in,
    .hljs-class .hljs-title
        color: #e6c07b


    .hljs-attr,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-type,
    .hljs-selector-class,
    .hljs-selector-attr,
    .hljs-selector-pseudo,
    .hljs-number
        color: #d19a66

    .hljs-symbol,
    .hljs-bullet,
    .hljs-link,
    .hljs-meta,
    .hljs-selector-id,
    .hljs-title
        color: #61aeee

    .hljs-emphasis
        font-style: italic

    .hljs-strong
        font-weight: bold

    .hljs-link
        text-decoration: underline
</style>