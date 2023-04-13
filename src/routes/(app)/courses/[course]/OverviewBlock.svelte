<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import Icon from "$lib/display/Icon.svelte"
import Play from "svelte-material-icons/Play.svelte"
import Text from "svelte-material-icons/Text.svelte"
import Check from "svelte-material-icons/Check.svelte"

export let status: "completed" | "in-progress" | "not-started" = "not-started"
export let title: string
export let href: string
</script>

<div class="wrapper {status}">
    <IconButton
        style={(status !== "not-started") ? "branded" : "translucent"}
        gamified={status !== "completed"}
        {href}
        icon={status === "completed" ? Check : Play}
        opacity={false} />
    <div class="text">
        {#if status !== "not-started"}
            <Icon
                color="brand"
                icon={Text}
                size={24}/>
        {/if}
        <div>{ title }</div>
    </div>
</div>

<style lang="stylus">
@import "variables"


.wrapper
    display flex
    gap 24px
    align-items center
    justify-content center
    z-index 10
    
    &.not-started
        opacity 0.5
    &.in-progress
        opacity 1
    &.completed
        opacity 0.5
    .text
        margin-top 100px
        display flex
        gap 8px
        font-size 16px
        font-weight 700
        align-items center

    
</style>

