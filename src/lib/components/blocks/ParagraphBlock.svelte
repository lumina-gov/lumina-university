<script lang="ts">
import type { Paragraph } from "mdast-util-from-markdown/lib"
import PhrasingContentArray from "./PhrasingContentArray.svelte"

export let block: Paragraph

</script>
<p>
    <PhrasingContentArray children={block.children}/>
</p>
<style lang="stylus">

p
    margin 0
    opacity 0.8
</style>