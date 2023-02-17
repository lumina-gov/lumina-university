<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import type { PageData } from "./$types"

export let data: PageData

</script>

<h2>Billing</h2>
<p>Manage payment methods through stripe</p>
<Button
    style="branded"
    href={data.customer_portal_url}>
    Manage Billing
</Button>

<Button
    style="branded"
    href={data.checkout_session_url}>
    Start Subscription
</Button>