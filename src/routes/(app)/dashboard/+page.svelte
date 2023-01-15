<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import info from "./info.svg";
  import { browser } from "$app/environment";
  import type { ActionData, PageData } from "./$types";

  export let form: ActionData;
  export let data: PageData;

  $: if (browser) {
    if (form?.error) alert(form?.error);
    else if (form?.info) alert(form?.info);
  }
</script>

<main>
  {#if !$page.data.session}
    <h1>I am not logged in.</h1>
    <div style="display: flex; align-items: center; gap: 10px">
      <img style="filter: invert(); height: 20px; " src={info} />
      <p style="max-width: 250px; font-size: small;">
        You can use your Lumina account details here.
      </p>
    </div>
    <form use:enhance method="POST">
      <input
        name="email"
        type="email"
        value={form?.values?.email ?? ""}
        placeholder="Email address"
        autocomplete="email" />
      <input
        autocomplete="current-password"
        name="password"
        type="password"
        placeholder="Password" />
      <input type="submit" formaction="?/signin" value="Sign in" />
      <input type="submit" formaction="?/signup" value="Create account" />
    </form>
  {:else}
    <h1>Welcome {$page.data.session.user.email}</h1>
    <p>I am logged in!</p>
    <p>My id: {data.profile?.data?.me.id}</p>
    <form use:enhance method="POST" action="?/signout">
      <input type="submit" value="Sign out" />
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
