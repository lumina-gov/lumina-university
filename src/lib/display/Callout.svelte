<script lang="ts">
import Alert from "svelte-material-icons/Alert.svelte"
import CheckCircle from "svelte-material-icons/CheckCircle.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Icon from "./Icon.svelte"

const icons = {
    "note": Information,
    "error": CloseCircle,
    "warning": Alert,
    "success": CheckCircle,
}

export let type: keyof typeof icons
</script>
<div class="callout {type}">
    <div class="icon">
        <Icon
            icon={icons[type]}
            size="24"/>
    </div>
    <div class="content">
        <slot/>
    </div>
</div>
<style lang="stylus">
@import "variables.styl"

.callout
    display flex
    gap 20px
    width 100%
    padding 20px
    border-radius 4px
    background transparify(white, 10%)
    &.note
        background transparify($blue, 10%)
        .icon
            color $blue
    &.error
        background transparify($red, 10%)
        .icon
            color $red
    &.warning
        background transparify($yellow, 10%)
        .icon
            color $yellow
    &.success
        background transparify($green, 10%)
        .icon
            color $green

</style>