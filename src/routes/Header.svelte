<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import Logo from "$lib/display/Logo.svelte"
import { browserLocalPersistence, GoogleAuthProvider, signInWithPopup, type User } from "firebase/auth"
import { FirebaseError } from "firebase/app"
import { page } from "$app/stores"
import { delete_cookie, set_cookie } from "$lib/utils/cookie"
import { MessageType } from "$lib/types/message"
import { goto, invalidate } from "$app/navigation"
import ProfileButton from "$lib/controls/ProfileButton.svelte"
import ClickoutRegion from "$lib/controls/ClickoutRegion.svelte"
import Inside from "$lib/controls/Inside.svelte"
import AccountPopout from "./AccountPopout.svelte"

enum Dropdown {
    Account,
    Notifications
}

let dropdown: Dropdown | null = null

function toggle(toggling: Dropdown) {
    if (toggling === dropdown) {
        dropdown = null
    } else {
        dropdown = toggling
    }
}

export let user: User | null

async function logout() {
    delete_cookie("token")
    user = null
    await goto("/")
}

async function signin() {
    const provider = new GoogleAuthProvider()
    try {
        let auth = $page.data.firebase.auth
        await auth.setPersistence(browserLocalPersistence)

        let result = await signInWithPopup(auth, provider)

        const credential = GoogleAuthProvider.credentialFromResult(result)

        let id_token = credential?.idToken || null
        if (!id_token) {
            $page.data.alerts.create_alert(MessageType.Error, "No id token")
        }

        set_cookie("token", id_token)
        await invalidate("app:user")
    } catch (error) {
        if (error instanceof Error) {
            $page.data.alerts.create_alert(MessageType.Error, error.message)
        }

        if (error instanceof FirebaseError){
            // const credential = GoogleAuthProvider.credentialFromError(error)
        }
    }
}

</script>
<header>
    <div class="left">
        <Logo size="48px"/>
        <div class="text">
            <div class="light">
                Light
            </div>
            <div class="university">
                University
            </div>
        </div>
        <!-- <Icon icon={Slash} opacity="0.2" size="24px"/> -->
        <!-- <AccountPicker/> -->
    </div>
    <ClickoutRegion condition={dropdown !== null} clicked_outside={() => dropdown = null}>
        <div class="right">
            {#if user}
                <Inside>
                    <ProfileButton
                        on:click={() => toggle(Dropdown.Account)}
                        bind:url={user.photoURL}/>
                </Inside>
            {:else}
                <Button on:click={signin}>
                    Start Learning
                </Button>
            {/if}
            {#if user && dropdown === Dropdown.Account}
                <Inside>
                    <div class="out-of-sidebar">
                        <AccountPopout bind:user on:logout={logout}/>
                    </div>
                </Inside>
            {/if}
        </div>
    </ClickoutRegion>
</header>
<style lang="stylus">
@import "variables"

.out-of-sidebar
    max-width 300px
    width 100vw
    position absolute
    top calc(100% + 16px)
    z-index 10
    right 16px


.text
    font-weight 800
    text-transform uppercase
    .light
        font-size 22px
        letter-spacing 5px
    .university
        font-size 14px

.left
    align-items center
    display flex
    gap 4px

header
    display flex
    align-items center
    justify-content space-between
    padding 0 16px
    height 60px
    z-index 5
    background $dark_app
    border-bottom 1px solid transparify(white, 8%)
    position sticky
    top 0
    color white
    .right
        display flex
        gap 8px
</style>