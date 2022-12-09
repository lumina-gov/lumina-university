<script lang="ts">
import Profile from "$lib/display/Profile.svelte"

export let active = false
export let url: string | null
</script>
<div
    on:click|stopPropagation
    tabindex="0"
    role="button"
    on:keypress|stopPropagation
    class="profile-button-wrapper"
    class:active>
    <Profile bind:url/>
</div>
<style lang="stylus">
@import 'variables'

.profile-button-wrapper
    padding 4px
    cursor pointer
    border-radius 4px
    &:hover
        background transparify(white, 4%)
    &:active
        background transparify(white, 12%)
    &.active
        background transparify(white, 8%)
</style>