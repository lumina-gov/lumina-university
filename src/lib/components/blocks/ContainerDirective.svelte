<script lang="ts">
import type { ContainerDirective } from "mdast-util-directive"
import NoteBlock from "./NoteBlock.svelte"
import Unsupported from "./Unsupported.svelte"
import SpoilerBlock from "./SpoilerBlock.svelte"
import SiteRenderer from "./SiteRenderer.svelte"

export let block: ContainerDirective
</script>
{#if ["note", "warning", "error", "tip"].includes(block.name)}
    <NoteBlock block={block}/>
{:else if "spoiler" === block.name}
    <SpoilerBlock block={block}/>
{:else if "renderer" === block.name}
    <SiteRenderer block={block}/>
{:else}
    <Unsupported/>
{/if}