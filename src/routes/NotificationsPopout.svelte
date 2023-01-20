<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import Card from "$lib/cards/Card.svelte"
import InformationOutline from "svelte-material-icons/InformationOutline.svelte"
import Bell from "svelte-material-icons/Bell.svelte"

async function request_notification_permissions() {
    return
}
</script>
<Card
    gap="16px"
    padding="16px"
    reset_bg={true}>
    <div class="description">
        <InformationOutline/>
        No new notifications
    </div>
    <Button
        left_icon={Bell}
        on:click={ request_notification_permissions }>
        Enable notifications
    </Button>
</Card>
<style lang="stylus">
@import 'variables'

.description
    opacity 0.4
    display flex
    gap 8px
    align-items center
</style>