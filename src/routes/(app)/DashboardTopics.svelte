<script lang="ts">
import CodeTags from "svelte-material-icons/CodeTags.svelte"
import Shape from "svelte-material-icons/Shape.svelte"
import CogOutline from "svelte-material-icons/CogOutline.svelte"
import CurrencyUsd from "svelte-material-icons/CurrencyUsd.svelte"
import TagOutline from "svelte-material-icons/TagOutline.svelte"
import Icon from "$lib/display/Icon.svelte"
import type { SvelteComponent } from "svelte"


let topics: {name: string, icon: typeof SvelteComponent, color: "brand" | "white" | "red" | "yellow" | "orange" | "purple" | "blue" | undefined }[] =[
    {
        name: "Programming",
        icon: CodeTags,
        color: "purple"
    },
    {
        name: "Graphic Design",
        icon: Shape,
        color: "yellow"
    },
    {
        name: "Engineering",
        icon: CogOutline,
        color: "blue"
    },
    {
        name: "Business & Startups",
        icon: CurrencyUsd,
        color: "orange"
    },
    {
        name: "Marketing",
        icon: TagOutline,
        color: "red"
    },
]
</script>

<div class="wrapper">
    {#each topics as topic, i}
        {#if i !== 0}
            <div class="breaker"/>
        {/if}
        <a
            class="block"
            href="/courses">
            <Icon
                color={topic.color}
                icon={topic.icon}
                size={72}/>
            { topic.name }
        </a>
        
    {/each}
</div>

<style lang="stylus">
@import "variables"
.wrapper
    display flex
    justify-content center
    gap 12px
    width 100%
    margin-top 160px
    gap 2px
    flex-wrap wrap
    // @media (max-width: $tablet)
    //     flex-direction column
    //     align-items center


.block
    display flex
    flex-direction column
    align-items center
    justify-content center
    flex 1
    padding 16px
    gap 9px
    font-size 18px
    color white
    font-weight 500
    text-align center
    border-radius 16px
    &:focus
        outline none
    &:hover
        background transparify(white, 8%)

.breaker
    width 2px
    height 100px
    background transparify(white, 8%)
</style>
