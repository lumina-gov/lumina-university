<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import Button from "$lib/controls/Button.svelte"
import Profile from "$lib/display/Profile.svelte"
import SmallHeading from "$lib/display/SmallHeading.svelte"
import Tag from "$lib/display/Tag.svelte"
import type { SessionOfferWithTutor } from "$lib/types/session_offer"
import { createEventDispatcher } from "svelte"
import Calendar from "svelte-material-icons/Calendar.svelte"

let dispatch = createEventDispatcher<{ session: SessionOfferWithTutor }>()

export let session_offer: SessionOfferWithTutor

</script>
<Card padding="16px" gap="16px" align_items_center={false}>
    <div class="info">
        <Profile
            size="48px"
            url={session_offer.tutor.photo_url}
            />
        <div class="person-subject">
            <h3>{session_offer.tutor.name}</h3>
            <Tag>{ session_offer.subject }</Tag>
        </div>
        <div class="price">
            <h3>
                <span class="opacity">$</span>
                { session_offer.price_per_hour }
            </h3>
            <div class="opacity">per hour</div>
        </div>
    </div>
    <SmallHeading text="Description"/>
    <div class="description">
        { session_offer.description }
    </div>
    <Button
        on:click={() => dispatch("session", session_offer)}
        right_icon={Calendar}
        style="translucent">
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