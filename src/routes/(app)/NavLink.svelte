<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { SvelteComponent } from "svelte"
import Tag from "$lib/display/Tag.svelte"

export let icon: typeof SvelteComponent
export let name: string
export let subtext = ""
export let color: string | undefined = undefined
export let href: string | undefined = undefined

$: inactive = href == undefined
$: tag = href ? "a" : "div"
</script>

<svelte:element
    this={ tag }
    class="nav-link"
    class:inactive
    {href}>
    <div
        style:background-color={ color ? color : "#4B4B4B" }
        class="icon">
        <Icon
            color="white"
            icon={icon}
            size={20}/>
    </div>
    <div class="text">
        <div class="name">
            { name }
        </div>
        {#if !subtext}
            <div>
                <Tag
                    color="white"
                    opacity={true}
                    small={true}
                    text="Coming Soon"/>
            </div>
        {:else}
            <div class="subtext">
                { subtext }
            </div>
        {/if}
    </div>
</svelte:element>

<style lang="stylus">
@import "variables"
.nav-link
    display flex
    padding 12px
    gap 12px
    cursor pointer
    border-radius 4px
    color white
    &:hover
        background transparify(white, 8%)
    &.inactive
        cursor default
        opacity 0.5
        background none
    .icon
        display flex
        padding 6px
        border-radius 4px
        width 32px
        height 32px
    .text
        display flex
        flex-direction column
        gap 4px
        .name
            font-size 14px
            font-weight 800
        .subtext
            font-size 12px
            font-weight 600
            opacity 0.5
</style>