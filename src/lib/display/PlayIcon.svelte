<script lang="ts">
import Play from "svelte-material-icons/Play.svelte"

const point = (x: number, y: number, r: number, angle: number) => [
    (x + Math.sin(angle) * r).toFixed(2),
    (y - Math.cos(angle) * r).toFixed(2),
]

const full = (x: number, y: number, R: number, r: number) => {
    if (r <= 0) {
        return `M ${x - R} ${y} A ${R} ${R} 0 1 1 ${x + R} ${y} A ${R} ${R} 1 1 1 ${x - R} ${y} Z`
    }
    return `M ${x - R} ${y} A ${R} ${R} 0 1 1 ${x + R} ${y} A ${R} ${R} 1 1 1 ${x - R} ${y} M ${x - r} ${y} A ${r} ${r} 0 1 1 ${x + r} ${y} A ${r} ${r} 1 1 1 ${x - r} ${y} Z`
}

const part = (x: number, y: number, R: number, r: number, start: number, end: number) => {
    const [s, e] = [(start / 360) * 2 * Math.PI, (end / 360) * 2 * Math.PI]
    const P = [
        point(x, y, r, s),
        point(x, y, R, s),
        point(x, y, R, e),
        point(x, y, r, e),
    ]
    const flag = e - s > Math.PI ? "1" : "0"
    return `M ${P[0][0]} ${P[0][1]} L ${P[1][0]} ${P[1][1]} A ${R} ${R} 0 ${flag} 1 ${P[2][0]} ${P[2][1]} L ${P[3][0]} ${P[3][1]} A ${r} ${r}  0 ${flag} 0 ${P[0][0]} ${P[0][1]} Z`
}

type Options = {
    x?: number // The x-coordinate of the center of the circle
    y?: number // The y-coordinate of the center of the circle
    R?: number // Outer radius
    r?: number // Inner radius
    start?: number // Start angle - 0-360
    end?: number // End angle - 0-360
}

function arc(opts: Options = {}){
    const { x = 0, y = 0 } = opts
    let {
        R = 0, r = 0, start = 0, end = 360,
    } = opts;

    [R, r] = [Math.max(R, r), Math.min(R, r)]
    if (R <= 0) return ""
    if (start !== +start || end !== +end) return full(x, y, R, r)
    if (Math.abs(start - end) < 0.000001) return ""
    if (Math.abs(start - end) % 360 < 0.000001) return full(x, y, R, r);

    [start, end] = [start % 360, end % 360]

    if (start > end) end += 360
    return part(x, y, R, r, start, end)
}


export let size = "24px"
export let completion = 1

$: d = arc({
    x: 24,
    y: 24,
    R: 24,
    r: 18,
    start: 90 * 3,
    end: 360 * completion + 90 * 3,
})

</script>
<div
    class="play-icon"
    class:completed={completion==1}
    style="width: {size}; height: {size};">
    <div class="play">
        <Play/>
    </div>
    {#if completion > 0}
        <svg width={size} height={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path {d} fill="#7446F6"/>
        </svg>
    {/if}
</div>
<style lang="stylus">
@import "variables"

.play-icon
    position relative
    display flex
    align-items center
    justify-content center
    background mix(white, $dark_app, 10%)
    border-radius 500px
    .play
        z-index 10
        display inline-flex

    &.completed
        color white
    svg
        position absolute
</style>
<!--


<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="24" fill="#15181C"/>
    <rect width="48" height="48" rx="24" fill="white" fill-opacity="0.04"/>
    <path d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM4.8 24C4.8 34.6039 13.3961 43.2 24 43.2C34.6039 43.2 43.2 34.6039 43.2 24C43.2 13.3961 34.6039 4.8 24 4.8C13.3961 4.8 4.8 13.3961 4.8 24Z" fill="white" fill-opacity="0.1"/>
    <path d="M0 24C2.75533e-07 20.8483 0.620779 17.7274 1.82689 14.8156C3.03301 11.9038 4.80083 9.25804 7.02944 7.02943C9.25805 4.80083 11.9038 3.033 14.8156 1.82689C17.7274 0.620776 20.8483 -1.16473e-06 24 0C27.1517 1.16473e-06 30.2726 0.620781 33.1844 1.8269C36.0962 3.03301 38.742 4.80084 40.9706 7.02945C43.1992 9.25805 44.967 11.9038 46.1731 14.8156C47.3792 17.7274 48 20.8483 48 24L43.2 24C43.2 21.4786 42.7034 18.9819 41.7385 16.6525C40.7736 14.323 39.3593 12.2064 37.5765 10.4236C35.7936 8.64067 33.677 7.22641 31.3475 6.26152C29.0181 5.29662 26.5214 4.8 24 4.8C21.4786 4.8 18.9819 5.29662 16.6525 6.26151C14.323 7.2264 12.2064 8.64066 10.4236 10.4235C8.64067 12.2064 7.2264 14.323 6.26151 16.6525C5.29662 18.9819 4.8 21.4786 4.8 24L0 24Z" fill="#7446F6"/>
    <path d="M20 17.14V31.14L31 24.14L20 17.14Z" fill="#7446F6"/>
</svg> -->