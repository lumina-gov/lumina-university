<script lang="ts">
import type { BlockResponseWithChildren } from "$lib/api/notion_api"
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import RichTextArray from "./RichTextArray.svelte"

export let block: BlockResponseWithChildren<BulletedListItemBlockObjectResponse>

</script>
<li>
    <RichTextArray rich_text_array={block.bulleted_list_item.rich_text}/>
</li>
<style lang="stylus">
li
    margin 0
    opacity 0.8
    margin-left 24px
</style>