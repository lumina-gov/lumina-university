<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import type { PageData } from "./$types"

export let data: PageData

</script>

<div class="hero">
    <div class="inner">
        <h2>Billing</h2>
        <p>Managed through stripe</p>
        <Button
            href={data.customer_portal_url}
            openInNewTab={true}
            style="branded">
            Manage Billing
        </Button>
    </div>
</div>