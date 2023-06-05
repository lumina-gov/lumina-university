<script lang="ts">
import hljs from "highlight.js"
import type { Code } from "mdast-util-from-markdown/lib"
import { tick } from "svelte"


export let code: Code

$: highlighted_code = hljs.highlight(code.value, {
    language: code.lang || "plaintext",
})

$: lines = highlighted_code.value.split("\n")
// $: digits = lines.length.toString().length
// $: numbers = lines.map((_, i) => {
//     const number = (i + 1).toString()

//     return [
//         "0".repeat(digits - number.length),
//         number,
//     ]
// })

let code_element: HTMLDivElement

function getRootOffset(type: "anchor" | "focus") {
    let selection = window.getSelection()
    if (!selection) return 0
    let node = type === "anchor" ? selection.anchorNode : selection.focusNode
    let offset = type === "anchor" ? selection.anchorOffset : selection.focusOffset

    while (node !== code_element && node !== null) {
        let previousNode = node.previousSibling
        while (previousNode) {
            if (previousNode.nodeType === Node.TEXT_NODE) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                offset += previousNode.textContent!.length
            } else if (previousNode.nodeType === Node.ELEMENT_NODE) {
                offset += (previousNode as HTMLElement).innerText.length
            }
            previousNode = previousNode.previousSibling
        }
        node = node.parentNode
    }

    return offset
}

interface AnchorData {
    anchorNode: Node | null;
    anchorOffset: number;
}

function findOffset(rootOffset: number): AnchorData {
    let anchorNode: Node | null = null
    let anchorOffset: number = rootOffset

    let stack: Node[] = [code_element]

    while (stack.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        let node = stack.pop()!

        if (node.nodeType === Node.TEXT_NODE) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (node.nodeValue!.length >= anchorOffset) {
                anchorNode = node
                break
            } else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                anchorOffset -= node.nodeValue!.length
            }
        } else {
            // We need to add child nodes in reverse order to the stack because the last one added will be the first one to be popped off (LIFO order).
            for (let i = node.childNodes.length - 1; i >= 0; i--) {
                stack.push(node.childNodes[i])
            }
        }
    }

    return { anchorNode, anchorOffset }
}

async function set_cursor_position(root_offset: number) {
    await tick()
    let selection = window.getSelection()
    if(!selection) return
    selection.removeAllRanges()
    let { anchorNode, anchorOffset } = findOffset(root_offset)
    if(!anchorNode) return
    var range = document.createRange()
    range.setStart(anchorNode, anchorOffset)
    range.setEnd(anchorNode, anchorOffset)
    selection.addRange(range)
}

function keypress(e: KeyboardEvent) {
    let selection = window.getSelection()
    if (!selection) return

    switch (e.key) {
        case "Enter":
            e.preventDefault()

            var anchorOffset = getRootOffset("anchor")
            var focusOffset = getRootOffset("focus")

            var start = anchorOffset < focusOffset ? anchorOffset : focusOffset
            var end = anchorOffset < focusOffset ? focusOffset : anchorOffset

            code.value = code.value.slice(0, start) + "\n" + code.value.slice(end)

            set_cursor_position(start)
            // enter
            break
        // case "Tab":
        //     if (e.shiftKey) {
        //         // shift+tab
        //         break
        //     }
        //     // tab
        //     break
        // case "z":
        //     if (e.ctrlKey) {
        //         if (e.shiftKey) {
        //         // redo
        //         }
        //         // undo
        //         break
        //     }
        //     // type value
        //     break
        // case "y":
        //     if (e.ctrlKey) {
        //     // redo
        //     }
        //     // type value
        //     break
        // case "v":
        //     if (e.ctrlKey) {
        //     // paste
        //     }
        //     // type value
        //     break
        default:
            // type value
            break
    }
}

</script>
<div class="code-editor">
    <div
        bind:this={ code_element }
        class="code">
        {#each lines as line}
            <div class="line">{@html line}</div>
        {/each}
    </div>
    <textarea bind:value={ code.value }></textarea>
</div>

<style lang="stylus">
@import variables

.line
    white-space break-spaces
    min-height 24px

textarea, .code-editor
    font-family "Source Code Pro", monospace
    font-size 14px
    line-height 24px
    width 100%
    padding 0
    margin 0

.code-editor
    position relative

textarea
    position absolute
    top 0
    left 0
    bottom 0
    right 0
    z-index 1
    opacity 0.1


</style>