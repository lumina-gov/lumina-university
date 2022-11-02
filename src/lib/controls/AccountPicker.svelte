<script lang="ts">
import Icon from '$lib/display/Icon.svelte';
import Dropdown from 'svelte-material-icons/ArrowDownDropCircle.svelte'

export let account_name = "Lumina"
</script>
<div class="account-picker">
    <div class="logo">

    </div>
    <div class="name">
        { account_name }
    </div>
    <Icon icon={Dropdown} opacity="0.2"/>
</div>
<style lang="stylus">
@import "variables"

.account-picker
    display flex
    gap 8px
    align-items center
    .logo
        height 28px
        width 28px
        background #492C9C
        border-radius 100px

</style>