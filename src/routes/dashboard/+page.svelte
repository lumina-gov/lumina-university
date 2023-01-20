<script lang="ts">
import { enhance } from "$app/forms"
import { page } from "$app/stores"
import info from "./info.svg"
import { browser } from "$app/environment"
import type { ActionData, PageData } from "./$types"

export let form: ActionData
export let data: PageData

$: if (browser) {
    if (form?.error) alert(form?.error)
    else if (form?.info) alert(form?.info)
}
</script>

<main>
    {#if !$page.data.session}
        <h1>I am not logged in.</h1>
        <div
            style:display="flex"
            style:gap="10px"
            style:align-items="center">
            <img
                style:filter="invert()"
                style:height="20px"
                alt="info"
                src={info} />
            <p
                style:max-width="250px"
                style:font-size="small">
                You can use your Lumina account details here.
            </p>
        </div>
        <form
            method="POST"
            use:enhance>
            <input
                name="email"
                autocomplete="email"
                placeholder="Email address"
                type="email"
                value={form?.values?.email ?? ""} />
            <input
                name="password"
                autocomplete="current-password"
                placeholder="Password"
                type="password" />
            <input
                formaction="?/signin"
                type="submit"
                value="Sign in" />
            <input
                formaction="?/signup"
                type="submit"
                value="Create account" />
        </form>
    {:else}
        <h1>Welcome { $page.data.session.user.email }</h1>
        <p>I am logged in!</p>
        <p>My id: { data.profile?.data?.me.id }</p>
        <form
            action="?/signout"
            method="POST"
            use:enhance>
            <input
                type="submit"
                value="Sign out" />
        </form>
    {/if}
</main>

<style>
  main {
    margin: auto;
  }
  h1 {
    font-size: medium;
    margin: 20px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  :global(body) {
    background-color: #202020;
    color: #f0f0f0;
  }
  input {
    outline: none !important;
    padding: 5px;
    background: transparent;
    border: 2px solid white;
    color: #f0f0f0;
  }
  input[type="submit"]:hover {
    background-color: #404040;
    cursor: pointer;
  }
</style>
