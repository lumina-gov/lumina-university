<script lang="ts">
import Play from "svelte-material-icons/Play.svelte"
import Check from "svelte-material-icons/Check.svelte"
import { Unit } from "$lib/types/unit"
import { onMount } from "svelte"
import Icon from "$lib/display/Icon.svelte"
import Text from "svelte-material-icons/Text.svelte"
import { SubscriptionStatus, UnitStatus } from "$lib/gql/graphql"
import GameifiedButton from "$lib/controls/GameifiedButton.svelte"
import { page } from "$app/stores"
import Lock from "svelte-material-icons/Lock.svelte"

$: user = $page.data.user_store.user
$: subscription_status = user?.stripe_subscription_info.status ?? SubscriptionStatus.None
$: subscribed = subscription_status !== SubscriptionStatus.None
$: paywalled = unit.free === false && subscribed === false

export let level: number
export let unit: Unit
export let course_slug: string
export let el_map: Record<string, HTMLElement>

let element: HTMLElement

onMount(() => {
    el_map[unit.slug] = element
    el_map = el_map
})
</script>

<a
    style:padding-left={ level * 40 + "px" }
    class="unit"
    class:completed={ unit.status === UnitStatus.Completed }
    class:in-progress={ unit.status === UnitStatus.InProgress }
    class:not-started={ unit.status === UnitStatus.NotStarted }
    href="/courses/{course_slug}/{unit.slug}">
    <GameifiedButton
        style={unit.status === UnitStatus.Completed
            ? "pressed"
            : unit.status === UnitStatus.InProgress
            ? "highlighted"
            : "translucent"}
        icon={unit.status === UnitStatus.Completed ? Check : paywalled ? Lock : Play}
        bind:element/>
    <Icon
        color={unit.status === UnitStatus.InProgress ? "brand" : "white"}
        icon={Text}
        opacity={unit.status === UnitStatus.InProgress ? 1 : 0.5}
        size={24}/>
    <div class="text">
        { unit.name }
    </div>
</a>

{#each unit.subunits as subunit}
    <svelte:self
        {course_slug}
        el_map={el_map}
        level={level+1}
        unit={subunit}/>
{/each}

<style lang="stylus">
@import "variables"

.unit
    display flex
    gap 18px
    align-items center
    outline 0
    color white
.text
    display flex
    gap 8px
    font-size 16px
    font-weight 700
    align-items center
    opacity 0.5
    &.in-progress
        opacity 1

.icon-button
    opacity 0.5
    box-shadow 0 4px transparify($brand, 40%)
    border-radius 8px
    overflow hidden
</style>