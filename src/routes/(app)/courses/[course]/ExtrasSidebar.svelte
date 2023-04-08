<script lang="ts">
import ArrowDecision from "svelte-material-icons/ArrowDecision.svelte"
import Brain from "svelte-material-icons/Brain.svelte"
import Icon from "$lib/display/Icon.svelte"
import OpenInNew from "svelte-material-icons/OpenInNew.svelte"
import HeadCheck from "svelte-material-icons/HeadCheck.svelte"
import Database from "svelte-material-icons/Database.svelte"
import Sitemap from "svelte-material-icons/Sitemap.svelte"
let prerequisites = [
    {
        icon: ArrowDecision,
        color: "orange",
        name: "Logic"
    },
    {
        icon: Brain,
        color: "yellow",
        name: "Abstract Reasoning"
    },
]

let up_next = [
    {
        icon: HeadCheck,
        color: "red",
        name: "Solution Engineering"
    },
    {
        icon: Database,
        color: "purple",
        name: "Backend Development"
    },
    {
        icon: Sitemap,
        color: "green",
        name: "Frontend Development"
    },
]
</script>

<div class="wrapper">
    <div>PREREQUISITES</div>
    <div class="bars">
        {#each prerequisites as prerequisite}
            <div class="prereq">
                <Icon
                    color={prerequisite.color}
                    icon={prerequisite.icon}
                    size={18}/>
                <div class="text">{ prerequisite.name }</div>
                <Icon
                    color="white"
                    icon={OpenInNew}
                    opacity={0.5}
                    size={18}/>
            </div>
        {/each}
    </div>
    <div>NEXT UP</div>
    <div class="bars">
        {#each up_next as next}
            <div class="prereq">
                <Icon
                    color={next.color}
                    icon={next.icon}
                    size={18}/>
                <div class="text">{ next.name }</div>
                <Icon
                    color="white"
                    icon={OpenInNew}
                    opacity={0.5}
                    size={18}/>
            </div>
        {/each}
    </div>
</div>

<style lang="stylus">
@import "variables"

.wrapper
    display flex
    flex-direction column
    gap 16px
    padding 16px
    border 1px solid transparify(white, 10%)
    border-radius 8px
    font-size 18px
    font-weight 700
    color transparify(white, 50%)
    .bars
        display flex
        gap 8px
        flex-direction column
    .prereq
        font-size 16px
        font-weight 700
        gap 8px
        display flex
        align-items center
        padding 16px
        border-radius 4px
        background transparify(white, 4%)
        .text
            display flex
            flex 1
</style>