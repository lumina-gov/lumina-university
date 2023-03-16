<script lang="ts">
import type { SvelteComponent } from "svelte"
import Unsupported from "./Unsupported.svelte"
import ParagraphBlock from "./ParagraphBlock.svelte"
import HeadingBlock from "./HeadingBlock.svelte"
// import CalloutBlock from "./CalloutBlock.svelte"
// import ListItemBlock from "./ListItemBlock.svelte"
import type { Block } from "$lib/types/block"
import ContainerDirective from "./ContainerDirective.svelte"

export let block: Block

let block_types: { [key: string]: typeof SvelteComponent } = {
    "heading": HeadingBlock,
    "paragraph": ParagraphBlock,
    "containerDirective": ContainerDirective,
// "bulleted_list_item": ListItemBlock,
}

function get_block_type(block: Block) {
    return block_types[block.type] || Unsupported
}

</script>
<svelte:component
    this={ get_block_type(block) }
    block={block}/>