<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import Flag from "svelte-material-icons/FlagOutline.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

export let zone: {
    slug: string
    name: string
    type: string[]
}

</script>
<a href="/zone/{zone.slug}" class="zone">
    <div class="left">
        <div class="top">
            <div class="icon">
                <Icon icon={Flag}/>
            </div>
            <div class="name">
                {zone.name}
            </div>
        </div>
        <div class="tags">
            {#each zone.type as tag}
                <Tag>{ tag }</Tag>
            {/each}
        </div>
    </div>
    <Icon style="brand" icon={ChevronRight}/>
</a>
<style lang="stylus">
@import "variables"

.zone
    display flex
    align-items center
    justify-content space-between
    padding 16px
    border-radius 8px
    outline 1px solid transparify(white, 8%)
    outline-offset -1px
    &:hover
        background transparify(white, 8%)
        outline 0
    .left
        display flex
        flex-direction column
        gap 8px
        gap 12px
    .top
        display flex
        align-items center
        gap 8px
        .icon
            color $brand
            display inline-flex
            font-size 24px
        .name
            font-weight 700
            color white
            font-size 24px

    .tags
        display flex
        gap 8px

</style>