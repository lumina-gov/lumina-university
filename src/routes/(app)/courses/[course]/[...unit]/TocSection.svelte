<script lang="ts">
import { get_plain_text } from "$lib/utils/markdown/plain_text"
import type { Heading } from "mdast-util-from-markdown/lib"

export let heading: Heading
export let active_id: string | null

$: plain_text = get_plain_text(heading.children)
$: id = plain_text.toLowerCase().replace(/ /g, "-")

$: active = active_id === id

</script>
<a
    style:padding-left="{ heading.depth * 10 }px"
    class="toc-section"
    class:active
    href="#{id}">
    { plain_text }
</a>
<style lang="stylus">
@import variables

.toc-section
    color transparify(white, 80%)
    border-radius 4px 0 0 4px
    padding 6px 10px
    font-size 14px
    line-height 1.8em
    font-weight 700
    display flex
    width 100%
    &:hover
        background-color transparify(white, 10%)
        color white
    &.active
        background-color transparify($brand, 10%)
        color $brand
</style>