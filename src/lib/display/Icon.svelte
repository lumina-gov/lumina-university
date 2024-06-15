<script lang="ts">
import type { ComponentType } from "svelte"

export let icon: ComponentType | string
export let size: number | string | undefined = "1em"
export let color: "brand" | "white" | "red" | "yellow" | "orange" | "purple" | "blue" | "yellow_green" | "green" | string | undefined = undefined
export let opacity = 1

</script>
{#if typeof icon === "string"}
    <div
        style:width={ size }
        style:height={ size }
        style:mask="url('{ icon }') no-repeat center / contain"
        style:-webkit-mask="url('{ icon }') no-repeat center / contain"
        style:background-color={ color }
        class="icon"/>
{:else}
    <div
        style:opacity
        class="icon {color ?? ""}"
        on:click
        on:keypress>
        <svelte:component
            this={ icon }
            size={size}/>
    </div>
{/if}
<style lang="stylus">
@import variables

.icon
    display inline-flex
    size 1em
    &.brand
        color $brand
    &.white
        color white
    &.red
        color $red
    &.yellow
        color $yellow
    &.orange
        color $orange
    &.purple
        color $purple
    &.blue
        color $blue
    &.yellow_green
        color $yellow_green
    &.green
        color $green

</style>