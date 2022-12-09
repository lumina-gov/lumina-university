<script lang="ts">
export let size = "32px"
export let url: string | null = null

$: profile_url = url ? url : "/assets/default-profile.svg"

</script>

<div class="profile" style="
    --size: {size};
    background-image: url({profile_url});
">
</div>
<style lang="stylus">
@import 'variables'

.profile
    width var(--size)
    height var(--size)
    min-width var(--size)
    min-height var(--size)
    background transparify(white, 20%)
    background-size cover
    background-repeat no-repeat
    background-position center
    border-radius 50px
    display flex
    justify-content center
    align-items center
    padding 4px
</style>