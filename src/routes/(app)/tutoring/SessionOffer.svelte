<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import Button from "$lib/controls/Button.svelte"
import Profile from "$lib/display/Profile.svelte"
import SmallHeading from "$lib/display/SmallHeading.svelte"
import Tag from "$lib/display/Tag.svelte"
import type { SessionOfferWithTutor } from "$lib/types/session_offer"
import { createEventDispatcher } from "svelte"
import Calendar from "svelte-material-icons/Calendar.svelte"
import Box from "$lib/cards/Box.svelte"

let dispatch = createEventDispatcher<{ session: SessionOfferWithTutor }>()

export let session_offer: SessionOfferWithTutor

</script>
<Card
    align_items="flex-start"
    gap="16px"
    interactive
    padding="16px">
    <Box
        align_items="center"
        direction="horizontal"
        gap="16px"
        justify_content="space-between">
        <div class="info">
            <Profile size="48px"/>
            <div class="person-subject">
                <h3>{ session_offer.tutor.name }</h3>
                <Tag>{ session_offer.subject }</Tag>
            </div>
        </div>
        <div class="price">
            <h3>
                <span class="opacity">$</span>
                { session_offer.price_per_hour }
            </h3>
            <div class="opacity">per hour</div>
        </div>
    </Box>
    <SmallHeading text="Description"/>
    <div class="description">
        { session_offer.description }
    </div>
    <Button
        style="translucent"
        right_icon={Calendar}
        on:click={ () => dispatch("session", session_offer) }>
        Book Session
    </Button>
</Card>
<style lang="stylus">
@import "variables"

.info
    display flex
    align-items center
    gap 16px

.description
    font-size 14px
    line-height 1.2
    opacity 0.8

.person-subject
    flex 1
    display flex
    gap 8px
    flex-direction column
    align-items flex-start

.price
    display flex
    flex-direction column
    align-items flex-end
    gap 4px
    font-size 14px
    h3
        font-size 26px
    .opacity
        opacity 0.5
</style>