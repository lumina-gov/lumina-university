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
import InstructionBox from "./InstructionBox.svelte"
import LaptopAccount from "svelte-material-icons/LaptopAccount.svelte"
    import AccountPlus from "svelte-material-icons/AccountPlus.svelte";

export let data: PageData

$: authenticated = data.user_store.user !== null
let sessions: unknown[] = []
let session_offers = data.session_offers
let booking_session: SessionOfferWithTutor | null = null
let topics = [
    "Programming",
    "Cybersecurity",
    "AI/ML",
    "Data Science",
    "Robotics",
    "VR/AR",
    "3D Printing",
    "UX/UI Design"
]
let boxes = [
    {
        heading: "Select a topic to learn",
        paragraph:
            "Choose from a wide range of topics to learn from. We have a wide range of topics to choose from, so you can find the perfect topic for you.",
    },
    {
        heading: "Find a tutor",
        paragraph:
            "We have a wide range of tutors to choose from, so you can find the perfect tutor for you.",
    },
    {
        heading: "Book a session",
        paragraph:
            "Book a session with your tutor and get started on your learning journey.",
    },
    {
        heading: "Learn",
        paragraph:
            "Learn from your tutor and get the most out of your learning experience.",
    },
    {
        heading: "Review",
        paragraph:
            "Review your tutor and help others find the perfect tutor for them.",
    },
]
let colors = ["#00B473", "#E25454", "#FF8947"]

let show_session_offer = false
$: console.log(show_session_offer)
</script>

{#if booking_session !== null}
    <CentreScrim on:close={ () => (booking_session = null) }>
        <div class="card-wrapper">
            <BookSession bind:session_offer={ booking_session } />
        </div>
    </CentreScrim>
{/if}

<hr />
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}
    >
        <VerticalLayout
            align_items="flex-start"
            max_width={600}>
            <Heading left_icon={HumanMaleBoard}>Tutoring</Heading>
            <Tag>TUTORING SERVICES</Tag>
            <Paragraph
            >Our customised tutoring is delivered by top professionals in
                the field, ensuring you receive cutting-edge training and
                support for success. Experience tailored instruction and take
                control of your education</Paragraph
            >
        </VerticalLayout>
    </GridItem>
</Grid>
<hr />
<Hero
    translucent={true}
    vertical_padding={60}>
    {#if show_session_offer}
        <Grid side_padding={false}>
            <GridItem
                columns={{
                    mobile: "span 4",
                    tablet: "span 8",
                    laptop: "span 16",
                }}
                gap={16}
            > 
                <div class="back-control">
                    <Box
                        align_items="center"
                        direction="horizontal"
                        on:click={ () => (show_session_offer = false) }
                    >
                        <Icon
                            color="brand"
                            icon={ChevronLeft}
                            size={28} />
                        <span
                            style:color="white"
                            style:font-weight="bold">Back to topics</span>
                    </Box>
                </div>
                <Box
                    align_items="center"
                    direction="horizontal"
                    gap="16px">
                    <div class="icon-background">
                        <Icon
                            icon={CodeTags}
                            size={28} />
                    </div>
                    <Heading level={2}>Programming Tutors</Heading>
                </Box>
                <VerticalLayout max_width={600}>
                    <Paragraph>
                        Get 1:1 mentoring from experienced tutors and learn
                        valuable skills faster
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
                }}
            >
                <ResponsiveLayout min_item_size={250}>
                    {#if session_offers.length > 0}
                        <div class="session-offers">
                            {#each session_offers as session_offer}
                                <SessionOfferComp
                                    on:session={ event =>
                                        (booking_session = event.detail) }
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
    {:else}
        <Grid side_padding={false}>
            <GridItem
                columns={{
                    mobile: "span 4",
                    tablet: "span 8",
                    laptop: "span 16",
                }}
                gap={16}
            >
                <VerticalLayout max_width={600}>
                    <Heading
                        left_icon={Magnify}
                        level={2}>Find a topic</Heading
                    >
                    <Paragraph
                    >Discover a wealth of knowledge with our extensive list
                        of topics.</Paragraph
                    >
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
                }}
            >
                <ResponsiveLayout min_item_size={300}>
                    {#each topics as topic, i}
                        <TopicCard
                            color={colors[i % colors.length]}
                            {topic}
                            on:click={ () => (show_session_offer = true) }
                        />
                    {/each}
                </ResponsiveLayout>
            </GridItem>
        </Grid>
    {/if}
</Hero>
<hr />
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
    >
        <VerticalLayout
            align_items="flex-start"
            max_width={600}>
            <Heading left_icon={ArrowDecision}>How it works</Heading>
            <Tag>TUTORING SERVICES</Tag>
            <Paragraph
            >Our tutoring sessions are quick and easy to book, get the
                personalized support you need in a matter of minutes</Paragraph
            >
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
    >
        {#each boxes as box, i}
            <InstructionBox
                {box}
                {i} />
        {/each}
    </GridItem>
</Grid>
<Grid padding_vertical={60}>
    <GridItem
        columns={{
            mobile: "span 4",
            tablet: "span 8",
            laptop: "span 16",
        }}
        gap={16}
    >
        <VerticalLayout
            align_items="flex-start"
            max_width={600}>
            <Heading left_icon={HumanMaleBoard}>Become a tutor</Heading>
            <Tag>TUTORING SERVICES</Tag>
            <Paragraph
            >Join our community of experts and start earning by sharing your
                knowledge, help others while making a difference in your own
                life</Paragraph
            >
        </VerticalLayout>
    </GridItem>
</Grid>

<style lang="stylus">
@import "variables"

.session-offers
    display grid
    grid-template-columns repeat(auto-fill, minmax(300px, 1fr))
    gap 16px

.icon-background
    background-color $brand
    padding 12px
    border-radius 6px

.back-control
    max-width 152px
    cursor pointer
    border-radius 6px
    &:hover
            background transparify(white, 8%)
</style>
