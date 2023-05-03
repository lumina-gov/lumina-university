<script lang="ts">
import type { LeafDirective } from "mdast-util-directive"
import Unsupported from "./Unsupported.svelte"
import QuestionBlock from "./QuestionBlock.svelte"

export let block: LeafDirective
</script>
{#if block.name === "question"}
    <QuestionBlock block={block}/>
{:else}
    <Unsupported/>
{/if}