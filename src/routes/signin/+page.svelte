<script lang="ts">
import { goto, invalidateAll } from "$app/navigation"
import { page } from "$app/stores"
import Heading from "$lib/display/Heading.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import Inner from "$lib/layouts/Inner.svelte"
import { MessageType } from "$lib/types/message"
import { set_cookie } from "$lib/utils/cookie"
import { onMount } from "svelte"

onMount(async () => {
    let url = new URL(window.location.href)
    let token = url.searchParams.get("token")
    if (!token) {
        $page.data.alerts.create_alert(MessageType.Error, "Recieved no login token")
    } else {
        set_cookie("token", url.searchParams.get("token"))
    }
    await invalidateAll()
    return await goto("/")
})
</script>
<Hero>
    <Heading level={1}>Signing you in</Heading>
</Hero>