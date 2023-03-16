<script lang="ts">
import type { ContainerDirective } from "mdast-util-directive"
import NoteBlock from "./NoteBlock.svelte"
import Unsupported from "./Unsupported.svelte"

export let block: ContainerDirective
</script>
{#if ["note", "warning", "error", "tip"].includes(block.name)}
    <NoteBlock block={block}/>
{:else}
    <Unsupported/>
{/if}