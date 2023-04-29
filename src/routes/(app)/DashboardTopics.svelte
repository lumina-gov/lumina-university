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
        <a
            class="block"
            class:divider={ i!==0 }
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
    max-width 900px
    margin 0 auto
    flex-wrap wrap

.block
    display flex
    flex-direction column
    align-items center
    justify-content center
    min-width 232px
    padding 16px
    gap 9px
    font-size 18px
    color white
    font-weight 500
    outline none
    border-radius 6px
    &:hover
        background transparify(white, 8%)
</style>
