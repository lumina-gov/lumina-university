<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import ChatQuestion from "svelte-material-icons/ChatQuestion.svelte"
import type { LeafDirective } from "mdast-util-directive"
import { tick, type SvelteComponent} from "svelte"
import { onMount } from "svelte"
import IconButton from "$lib/controls/IconButton.svelte"
import Send from "svelte-material-icons/Send.svelte"
import Brain from "svelte-material-icons/Brain.svelte"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import ButtonSound from "$lib/sounds/ButtonSound.wav"
import CheckCircle from "svelte-material-icons/CheckCircle.svelte"
import { page } from "$app/stores"
import { gql } from "@urql/core"
import { MessageType } from "$lib/types/message"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import type { Prop } from "$lib/utils/typed_props"
import AlertCircle from "svelte-material-icons/AlertCircle.svelte"
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"
import { afterNavigate } from "$app/navigation"

export let block: LeafDirective
let response: null | {
    feedback: string
    assessment: "PASS" | "FAIL" | "SOFT_PASS" | "UNKNOWN"
} = null

$: attributes = block.attributes as {
    question: string
    slug: string
    context?: string
}

let audio: HTMLAudioElement

$: assessment = response?.assessment ?? "UNKNOWN"
$: user = $page.data.user_store.user

let textarea: HTMLTextAreaElement
let answer = ""
let loading = true

const assessment_mappings: Record<string, {
    icon: typeof SvelteComponent,
    color: Prop<Icon, "color">,
    text: string
}> = {
    "PASS": {
        icon: CheckCircle,
        color: "brand",
        text: "Correct"
    },
    "FAIL": {
        icon: CloseCircle,
        color: "red",
        text: "Incorrect"
    },
    "SOFT_PASS": {
        icon: CheckCircle,
        color: "yellow_green",
        text: "Partially Correct"
    },
    "UNKNOWN": {
        icon: AlertCircle,
        color: "white",
        text: "Unknown"
    }
}

afterNavigate(() => {
    load_assessment()
})

onMount(() => {
    audio = new Audio(ButtonSound)
    resize_text_area()
    load_assessment()
})

function resize_text_area() {
    if(!textarea) return
    textarea.style.height = "0"
    textarea.style.height = textarea.scrollHeight + 1 + "px"
}

async function load_assessment() {
    if(!user) return
    loading = true

    let res = await $page.data.graph.gquery(gql(`
        query GetQuestionAssessment(
            $course_slug: String!
            $unit_slug: String!
            $question_slug: String!
        ) {
            question_assessment(
                course_slug: $course_slug
                unit_slug: $unit_slug
                question_slug: $question_slug
            ) {
                feedback
                answer
                assessment
            }
        }
    `), {
        course_slug: $page.data.course.course_slug,
        unit_slug: $page.data.unit.unit_slug,
        question_slug: attributes.slug
    })

    loading = false

    if(res["error"]) {
        $page.data.alerts.create_alert(MessageType.Error, res["error"]["message"])
        return
    }

    let data = res["data"]["question_assessment"]

    if (!data) return

    answer = data["answer"]
    response = data

    await tick()
    resize_text_area()
}

async function submit() {
    if(answer.trim() === "") return
    if(loading) return

    loading = true
    response = null
    let res = await $page.data.graph.gmutation(gql(`
            mutation SetQuestionAssessment(
                $question: String!
                $answer: String!
                $course_slug: String!
                $unit_slug: String!
                $question_slug: String!
                $context: String
            ) {
                question_assessment(
                    question: $question
                    answer: $answer
                    course_slug: $course_slug
                    unit_slug: $unit_slug
                    question_slug: $question_slug,
                    question_context: $context
                ) {
                    feedback
                    assessment
                }
            }
        `), {
        question: attributes.question,
        answer,
        course_slug: $page.data.course.course_slug,
        unit_slug: $page.data.unit.unit_slug,
        question_slug: attributes.slug,
        context: attributes.context
    })

    loading = false


    if(res["error"]) {
        $page.data.alerts.create_alert(MessageType.Error, res["error"]["message"])
        return
    }

    audio.play()

    response = res["data"]["question_assessment"]
    await tick()
    resize_text_area()
}

</script>
<div
    class="question"
    class:correct={ assessment === "PASS" }
    class:incorrect={ assessment === "FAIL" }
    class:partially-correct={ assessment === "SOFT_PASS" }>
    <div class="section">
        <div class="section-header">
            <Icon
                icon={ChatQuestion}
                opacity={0.5}
                size={24}/>
            <div class="title">
                <MarkdownRenderer markdown={attributes.question}/>
            </div>
        </div>
    </div>
    {#if !loading}
        <div class="section no-padding">
            <textarea
                bind:this={ textarea }
                placeholder="Type your answer here..."
                on:input={ resize_text_area }
                on:keydown={ e => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        audio.play()
                        e.preventDefault()
                        submit()
                    }
                } }
                bind:value={ answer }/>
            <IconButton
                style="transparent"
                icon={Send}
                on:click={ submit }
            />
        </div>
        {#if response}
            <div class="section">
                <div class="section-header">
                    <Icon
                        icon={Brain}
                        opacity={0.5}
                        size={24}/>
                    <div class="title">AI Assessment</div>
                </div>
                <div class="feedback">
                    <MarkdownRenderer markdown={response.feedback}/>
                </div>
                <div class="assessment">
                    <Icon
                        color={assessment_mappings[response.assessment].color}
                        icon={assessment_mappings[response.assessment].icon}
                        size={24}/>
                    { assessment_mappings[response.assessment].text }
                </div>
            </div>
        {/if}
    {:else if !user}
        <div class="section">
            <div class="feedback">
                <MarkdownRenderer markdown="You must be logged in use **AI assessments**"/>
            </div>
        </div>
    {:else}
        <div class="section">
            <div class="loading">
                <OverlayLoading background={false}/>
            </div>
        </div>
    {/if}
</div>
<style lang="stylus">
@import "variables"



.loading
    height 100px

.question
    display flex
    width 100%
    border-radius 4px
    overflow hidden
    flex-direction column
    background transparify(white, 4%)
    outline 2px solid transparify(white, 10%)
    margin-top 5px
    margin-bottom 5px
    outline-offset 10px
    border 1px solid transparify(white, 10%)
    &.correct
        outline-color $green
    &.partially-correct
        outline-color $yellow_green
    &.incorrect
        outline-color $red

.section
    padding 16px
    display flex
    position relative
    gap 8px
    flex-direction column
    border-top 1px solid transparify(white, 10%)
    &:first-child
        border-top 0
    &.no-padding
        flex-direction row
        align-items center
        padding 0
        padding-right 8px

.section-header
    display flex
    align-items center
    gap 12px
    .title
        font-weight 600

.assessment
    display flex
    align-items center
    font-weight 600
    gap 8px

.feedback
    opacity 0.7

textarea
    padding 16px
    cursor text
    border 0
    width 100%
    color white
    outline 0
    resize none
    overflow hidden
    line-height 1.5em
    height calc(1.5em + 32px)
    background transparent

</style>