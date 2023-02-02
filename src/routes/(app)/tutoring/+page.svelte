<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import HumanMaleBoard from "svelte-material-icons/HumanMaleBoard.svelte"
import InfoBox from "$lib/display/InfoBox.svelte"
import type { PageData } from "./$types"
import SessionOfferComp from "./SessionOffer.svelte"
import Info from "svelte-material-icons/Information.svelte"
import CentreScrim from "$lib/controls/CentreScrim.svelte"
import BookSession from "./BookSession.svelte"
import type { SessionOfferWithTutor } from "$lib/types/session_offer"
import TopicCard from "./TopicCard.svelte"
import Magnify from "svelte-material-icons/Magnify.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import ResponsiveLayout from "$lib/layouts/ResponsiveLayout.svelte"
import CodeTags from "svelte-material-icons/CodeTags.svelte"
import ArrowDecision from "svelte-material-icons/ArrowDecision.svelte"
import ChevronLeft from "svelte-material-icons/ChevronLeft.svelte"
import Icon from "$lib/display/Icon.svelte"
import Box from "$lib/cards/Box.svelte"
import Tag from "$lib/display/Tag.svelte"
import Numeric1 from "svelte-material-icons/Numeric1.svelte"
import Numeric2 from "svelte-material-icons/Numeric2.svelte"
import Numeric3 from "svelte-material-icons/Numeric3.svelte"
import Numeric4 from "svelte-material-icons/Numeric4.svelte"
import Numeric5 from "svelte-material-icons/Numeric5.svelte"

export let data: PageData

$: authenticated = data.user_store.user !== null
let sessions: unknown[] = []
let session_offers = data.session_offers
let booking_session: SessionOfferWithTutor | null = null
let topics = [
    "Programming",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Geography",
    "French",
    "Spanish",
    "German",
    "Latin",
    "Greek",
    "Art",
]
let showSessionOffer = false
</script>

{#if booking_session !== null}
    <CentreScrim on:close={ () => (booking_session = null) }>
        <div class="card-wrapper">
            <BookSession bind:session_offer={ booking_session } />
        </div>
    </CentreScrim>
{/if}

<hr/>
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>
        <VerticalLayout 
            align_items="flex-start"
            max_width={600}>
            <Heading left_icon={HumanMaleBoard}>Tutoring</Heading>
            <Tag>TUTORING SERVICES</Tag>
            <Paragraph>Our customised tutoring is delivered by top professionals in the field, ensuring you receive cutting-edge training and support for success. Experience tailored instruction and take control of your education</Paragraph>
        </VerticalLayout>
    </GridItem>
</Grid>
<hr/>
<Hero
    translucent={true}
    vertical_padding={60}>
    <Grid side_padding={false}>
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 8",
                laptop: "span 16",
            }}
            gap={16}>
            <VerticalLayout max_width={600}>
                <Heading
                    left_icon={Magnify}
                    level={2}>Find a topic</Heading>
                <Paragraph>Discover a wealth of knowledge with our extensive list of topics.</Paragraph>
            </VerticalLayout>
        </GridItem>
    </Grid>
    <Grid
        padding_vertical={60}
        side_padding={false}>
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 8",
                laptop: "span 16",
            }}>
            <ResponsiveLayout min_item_size={300}>
                <TopicCard on:click={ () => showSessionOffer = true } />
                <TopicCard on:click={ () => showSessionOffer = true } />
                <TopicCard on:click={ () => showSessionOffer = true } />
                <TopicCard on:click={ () => showSessionOffer = true } />
            </ResponsiveLayout>
        </GridItem>
    </Grid>
    {#if showSessionOffer}
        <Grid side_padding={false}>
            <GridItem
                columns={{
                    mobile: "span 4",
                    tablet: "span 8",
                    laptop: "span 16",
                }}
                gap={16}>
                <Box
                    align_items="center"
                    direction="horizontal"
                    gap="16px"
                    href="/tutoring">
                    <Icon
                        color="brand"
                        icon={ChevronLeft} 
                        size={28} />
                    <span style:color="white">Back to topics</span>
                </Box>
                <Box
                    align_items="center"
                    direction="horizontal"
                    gap="16px">
                    <div class="icon-background">
                        <Icon
                            icon={CodeTags} 
                            size={28} />
                    </div>
                    <Heading level={2}>
                        Programming Tutors
                    </Heading>
                </Box>
                <VerticalLayout max_width={600}>
                    <Paragraph>
                        Get 1:1 mentoring from experienced tutors and learn valuable skills faster
                    </Paragraph>
                </VerticalLayout>
            </GridItem>
        </Grid>
        <Grid
            padding_vertical={60}
            side_padding={false}>
            <GridItem
                columns={{
                    mobile: "span 4",
                    tablet: "span 8",
                    laptop: "span 16",
                }}>
                <ResponsiveLayout min_item_size={250}>
                    {#if session_offers.length > 0}
                        <div class="session-offers">
                            {#each session_offers as session_offer}
                                <SessionOfferComp
                                    on:session={ event => (booking_session = event.detail) }
                                    bind:session_offer
                                />
                            {/each}
                        </div>
                    {:else}
                        <InfoBox
                            color="white"
                            icon={Info}
                            tag="Uh oh"
                            title="No tutoring sessions found"
                        />
                    {/if}
                </ResponsiveLayout>
            </GridItem>
        </Grid>
    {/if}
</Hero>
<hr/>
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>
        <VerticalLayout 
            align_items="flex-start"
            max_width={600}>
            <Heading left_icon={ArrowDecision}>How it works</Heading>
            <Tag>TUTORING SERVICES</Tag>
            <Paragraph>Our tutoring sessions are quick and easy to book, get the personalized support you need in a matter of minutes</Paragraph>
        </VerticalLayout>
    </GridItem>
</Grid>
<Grid>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>
        <Box 
            align_items="flex-start"
            direction="horizontal"
            gap="36px">
            <div class="steps">
                <Icon
                    icon={Numeric1} 
                    size={28} />
            </div>
            <Box
                align_items="flex-start"
                direction="vertical"
                gap="16px">
                <Heading level={2}>
                    Select a topic to learn
                </Heading>
                <Paragraph>
                    hjhajsdaks asdasdh aaj sjd ajshashdj aa hasdha jad ajshdahjashsdaad
                </Paragraph>
            </Box>
        </Box>
        <Box 
            align_items="flex-start"
            direction="horizontal"
            gap="36px">
            <div class="steps">
                <Icon
                    icon={Numeric2} 
                    size={28} />
            </div>
            <Box
                align_items="flex-start"
                direction="vertical"
                gap="16px">
                <Heading level={2}>
                    Select a tutor suitable for you
                </Heading>
                <Paragraph>
                    hjhajsdaks asdasdh aaj sjd ajshashdj aa hasdha jad ajshdahjashsdaad
                </Paragraph>
            </Box>
        </Box>
        <Box 
            align_items="flex-start"
            direction="horizontal"
            gap="36px">
            <div class="steps">
                <Icon
                    icon={Numeric3} 
                    size={28} />
            </div>
            <Box
                align_items="flex-start"
                direction="vertical"
                gap="16px">
                <Heading level={2}>
                    Find a time that works for you
                </Heading>
                <Paragraph>
                    hjhajsdaks asdasdh aaj sjd ajshashdj aa hasdha jad ajshdahjashsdaad
                </Paragraph>
            </Box>
        </Box>
        <Box 
            align_items="flex-start"
            direction="horizontal"
            gap="36px">
            <div class="steps">
                <Icon
                    icon={Numeric4} 
                    size={28} />
            </div>
            <Box
                align_items="flex-start"
                direction="vertical"
                gap="16px">
                <Heading level={2}>
                    Confirm the session
                </Heading>
                <Paragraph>
                    hjhajsdaks asdasdh aaj sjd ajshashdj aa hasdha jad ajshdahjashsdaad
                </Paragraph>
            </Box>
        </Box>
        <Box 
            align_items="flex-start"
            direction="horizontal"
            gap="36px">
            <div class="steps">
                <Icon
                    icon={Numeric5} 
                    size={28} />
            </div>
            <Box
                align_items="flex-start"
                direction="vertical"
                gap="16px">
                <Heading level={2}>
                    Attend the session
                </Heading>
                <Paragraph>
                    hjhajsdaks asdasdh aaj sjd ajshashdj aa hasdha jad ajshdahjashsdaad
                </Paragraph>
            </Box>
        </Box>
    </GridItem>
</Grid>
<hr />
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}>
        <VerticalLayout 
            align_items="flex-start"
            max_width={600}>
            <Heading left_icon={HumanMaleBoard}>Become a tutor</Heading>
            <Tag>TUTORING SERVICES</Tag>
            <Paragraph>Join our community of experts and start earning by sharing your knowledge, help others while making a difference in your own life</Paragraph>
        </VerticalLayout>
    </GridItem>
</Grid>

<div class="hero">
    <div class="inner">
        {#if authenticated}
            <h2>My sessions</h2>
            <p>Here are your upcoming sessions</p>
            {#each sessions as session}
                <todo />
            {/each}
        {:else}
            <div class="card">
                <h2>Sign up to get started</h2>
                <p>Sign up for free and start learning today</p>
                <a
                    class="button"
                    href="/signup">Sign up</a>
            </div>
        {/if}
    </div>
</div>

<style lang="stylus">
@import "variables"

.inner
    max-width 1200px
    width 100%
    padding 40px 16px

.card-wrapper
    width 100%
    max-width 600px

.session-offers
    display grid
    grid-template-columns repeat(auto-fill, minmax(300px, 1fr))
    gap 16px

.hero
    display flex
    align-items center
    flex-direction column
    &.light
        background lighten($dark_app, 3%)

.icon-background
    background-color $brand
    padding 12px
    border-radius 6px

.steps
    background-color $brand
    padding 4px
    border-radius 50%

.strip
    width 8px
    height 100%
    background-color white
    opacity 0.1
</style>
