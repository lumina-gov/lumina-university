<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import Button from "$lib/controls/Button.svelte"
import Input from "$lib/controls/Input.svelte"
import type { SessionOfferWithTutor } from "$lib/types/session_offer"
import { fetch_as_json } from "$lib/utils/response"
import Calendar from "svelte-material-icons/Calendar.svelte"

export let session_offer: SessionOfferWithTutor
let hours = 1

async function book_session() {
    const res = await fetch_as_json<SessionOfferWithTutor>(fetch, "/api/session", {
        method: "POST",
        body: JSON.stringify({
            session_offer_id: session_offer.id,
            hours
        })
    })

    console.log(res)
}
</script>
<Card
    align_items="flex-start"
    gap="8px"
    padding="16px"
    reset_bg={true}>
    <h2>Book a session</h2>
    <p>Book a session with { session_offer.tutor.name }</p>
    <Input
        name="Number of hours"
        placeholder="How many hours?"
        type="number"
        bind:value={ hours }/>
    <Button
        style="branded"
        right_icon={Calendar}
        on:click={ book_session }>
        Pay Now
    </Button>
</Card>