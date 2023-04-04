<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { SvelteComponent } from "svelte"
import Tag from "./Tag.svelte"

export let icon: typeof SvelteComponent
export let header: string
export let subtext: string
export let color: string
export let inactive = false
</script>

<div
    style:opacity={ inactive ? 0.5 : 1.0 }
    class="wrapper">
    <div
        style:background-color={ color }
        class="icon">
        <Icon
            color="white"
            icon={icon}
            size={20}/>
    </div>
    <div class="text">
        <div class="header">
            { header }
        </div>
        {#if inactive}
            <Tag
                color="white"
                opacity={true}
                text="Coming Soon"/>
        {:else}
            <div class="subtext">
                { subtext }
            </div>
        {/if}
    </div>
</div>

<style lang="stylus">
@import "variables"
.wrapper
    display flex
    padding 6px
    gap 12px
    cursor pointer
    border-radius 4px
    &:hover
            background transparify(white, 8%)
    .icon
        display flex
        padding 6px
        border-radius 4px
        //get this to hug the icon
        width 32px
        height 32px
    .text
        display flex
        flex-direction column
        gap 4px
        .header
            font-size 14px
            font-weight 800
        .subtext
            font-size 12px
            font-weight 600
            opacity 0.5
</style>