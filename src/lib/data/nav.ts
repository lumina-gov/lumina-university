import BookOpenPageVariantfrom from "svelte-material-icons/BookOpenPageVariant.svelte"
import CheckCircle from "svelte-material-icons/CheckCircle.svelte"
import Brain from "svelte-material-icons/Brain.svelte"
import Chat from "svelte-material-icons/Chat.svelte"
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
import HumanHandsup from "svelte-material-icons/HumanHandsup.svelte"
import MessageQuestion from "svelte-material-icons/MessageQuestion.svelte"
import CertificateOutline from "svelte-material-icons/CertificateOutline.svelte"
export default [
    {
        icon: BookOpenPageVariantfrom,
        name: "Courses",
        href: "/courses",
        color: "#7446F6",
        subtext: "Expertly curated courses using first principle thinking"
    },
    {
        icon: Chat,
        name: "Tutoring",
        color: "#FF8947",
        subtext: "Accelerate your learning with tutoring"
    },
    {
        icon: CheckCircle,
        name: "Assignments",
    },
    {
        icon: Brain,
        name: "AI Tutor",
    },
    {
        icon: AccountGroup,
        name: "Peer Mentoring",
    },
    {
        icon: HumanHandsup,
        name: "Volunteering",
    },
    {
        icon: MessageQuestion,
        name: "Q&A",
    },
    {
        icon: CertificateOutline,
        name: "Certifications",
    },

]