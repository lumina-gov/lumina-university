<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import type { PageData } from "./$types"
import Lumina from "$lib/icons/Lumina.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import AccountCircle from "svelte-material-icons/AccountCircle.svelte"
import CreditCard from "svelte-material-icons/CreditCard.svelte"
import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte"
export let data: PageData
</script>
<hr>
<Grid>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
    >
        <VerticalLayout
            max_width={650}
            padding={16}
            vertical_padding={40}>
            <Heading left_icon={Lumina}>My Account</Heading>
            <Paragraph>
                Your Light University account is managed through the Lumina Government Website
            </Paragraph>
            <div>
                <Button
                    style="translucent"
                    href={data.customer_portal_url}
                    hug={true}
                    left_icon={AccountCircle}>
                    Manage Account
                </Button>
            </div>
        </VerticalLayout>
    </GridItem>
</Grid>
<hr>
<Grid>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
    >
        <VerticalLayout
            horizontal_padding={16}
            max_width={650}
            vertical_padding={40}>
            <Heading
                left_icon={CreditCard}
                level={3}>Billing</Heading>
            <Paragraph>
                Manage your education subscription, payment details and invoices through our payment provider.
            </Paragraph>
            <div class="button-wrapper">
                <Button
                    style="translucent"
                    href={data.customer_portal_url}
                    left_icon={AccountCircle}>
                    Manage Account
                </Button>
                <Button
                    style="branded"
                    href={data.customer_portal_url}
                    right_icon={RocketLaunch}>
                    Start Subscription
                </Button>
            </div>
        </VerticalLayout>
    </GridItem>


</Grid>


<style lang="stylus">
@import "variables"

.button-wrapper
    display flex
    gap 16px

</style>