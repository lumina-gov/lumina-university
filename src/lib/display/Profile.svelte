<script>

export let size = "32px"

</script>

<div
    style:--size={ size }
    class="profile">

</div>
<style lang="stylus">
@import 'variables'

.profile
    width var(--size)
    height var(--size)
    display inline-flex
    background transparify(white, 20%)
    border-radius 50px
    background-image url('/assets/default-profile.svg')
    background-size cover
    background-position center
    background-repeat no-repeat
</style>