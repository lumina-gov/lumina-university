<script lang="ts">
import Box from "$lib/cards/Box.svelte"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"

export let box: {
    heading: string
    paragraph: string
}
export let i: number

</script>
<div style:position="relative">
    <Box 
        align_items="flex-start"
        direction="horizontal"
        gap="36px">
        <div class="steps">
            <div class="number">
                { i + 1 }
            </div>
        </div>
        <div style:padding-bottom="36px">
            <Box
                align_items="flex-start"
                direction="vertical"
                gap="16px">
                <Heading level={2}>
                    { box.heading }
                </Heading>
                <Paragraph>
                    { box.paragraph }
                </Paragraph>
            </Box>
        </div>
        <div class="sidebar"/>
    </Box>
</div>

<style lang="stylus">
@import "variables"
.steps
    display flex
    background-color $brand
    padding 10px
    border-radius 100%
    align-items center
    justify-content center
    position relative

.number
    display flex
    color white
    font-size 18px
    font-weight 700
    width 24px
    height 24px
    align-items center
    justify-content center

.sidebar
    width 8px
    position absolute
    height 100%
    z-index -1
    left 18px
    background-color #2D3035
    opacity 100%

</style>