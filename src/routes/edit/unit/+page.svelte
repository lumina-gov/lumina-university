<script lang="ts">

let markdown = `
This is a paragraph

Test
`

let editable: HTMLDivElement

function changed(e: KeyboardEvent) {
    console.log(editable.textContent)
    e.preventDefault()
    if (editable.textContent) {
    //
    }
}


</script>
<div
    bind:this={ editable }
    class="editable"
    contenteditable="true"
    on:keydown={ changed }>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html markdown}
</div>
<style lang="stylus">
@import variables

.editable
    white-space: pre-wrap
</style>