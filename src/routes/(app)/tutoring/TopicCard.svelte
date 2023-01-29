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
        <div
            style:width={ "32px" }
            style:height={ "32px" }>
            <ChevronRight
                color="#12ac78"
                height={32}
                width={32}/>
        </div>
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
    cursor pointer
    -webkit-touch-callout none
    -webkit-user-select none
    -khtml-user-select none
    -moz-user-select none
    -ms-user-select none
    user-select none

.left-segment
    background-color $brand
    display flex
    align-items center
    justify-content center
    padding 16px

.right-segment
    display flex
    padding 16px
    align-items center
    justify-content space-between
    gap 16px
    flex-grow 1
    background-color transparify(white, 4%)
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