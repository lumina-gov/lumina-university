<script lang="ts">
import type { SvelteComponent } from "svelte"
import Unsupported from "./Unsupported.svelte"
import ParagraphBlock from "./ParagraphBlock.svelte"
import HeadingBlock from "./HeadingBlock.svelte"
import type { Block } from "$lib/types/block"
import ContainerDirective from "./ContainerDirective.svelte"
import { PartialRecord } from "$lib/utils/typed_props"
import ListBlock from "./ListBlock.svelte"

export let block: Block

let block_types: PartialRecord<Block["type"], typeof SvelteComponent> = {
    "heading": HeadingBlock,
    "paragraph": ParagraphBlock,
    "containerDirective": ContainerDirective,
    "list": ListBlock,
// "bulleted_list_item": ListItemBlock,
}

function get_block_type(block: Block) {
    return block_types[block.type] || Unsupported
}

</script>
<svelte:component
    this={ get_block_type(block) }
    block={block}/>