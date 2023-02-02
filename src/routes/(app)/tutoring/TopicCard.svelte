<script lang="ts">
import CodeTags from "svelte-material-icons/CodeTags.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Card from "$lib/cards/Card.svelte"

export let href: string | undefined = undefined
$: disabled = href === undefined
</script>

<Card
    align_items="normal"
    direction="horizontal"
    {disabled}
    interactive>
    <div class="left-segment">
        <CodeTags
            color="white"
            size={32}/>
    </div>
    <div class="right-segment">
        <div class="text-wrapper">
            <div class="top-text">
                Programming
            </div>
            <div class="bottom-text">
                Learn to code using the latest technology
            </div>
        </div>
        <div
            style:width={ "32px" }
            style:height={ "32px" }>
            <ChevronRight
                color="#12ac78"
                height={32}
                width={32}/>
        </div>
    </div>
</Card>


<style lang="stylus">
@import "variables"

.left-segment
    background-color $brand
    display flex
    align-items center
    justify-content center
    padding 16px
    border-radius: 6px 0 0 6px;

.right-segment
    display flex
    padding 16px
    align-items center
    justify-content space-between
    gap 16px
    flex-grow 1
    .text-wrapper
        display flex
        flex-direction column
        gap 16px
        .top-text
            font-size 22px
            font-weight 600
        .bottom-text
            font-size 14px
            font-weight 400
            color transparify(white, 70%)

</style>