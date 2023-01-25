<script lang="ts">
import CodeTags from "svelte-material-icons/CodeTags.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
</script>

<div class="card-wrapper">
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
        <ChevronRight
            color="#12ac78"
            size={32}/>
    </div>
</div>

<style lang="stylus">
@import "variables"

.card-wrapper
    display flex
    width 100%
    height 100%
    border-radius 10px
    overflow hidden
    max-width 407px

.left-segment
    background-color $brand
    display flex
    align-items center
    justify-content center
    padding 8px

.right-segment
    display flex
    padding 16px
    align-items center
    gap 16px
    flex-grow 1
    background-color transparify(white, 4%)
    .text-wrapper
        display flex
        flex-direction column
        gap 16px
        .top-text
            font-size 24px
            font-weight 700
        .bottom-text
            font-size 16px
            font-weight 600

</style>