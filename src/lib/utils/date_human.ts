


export function get_day_suffix(day: number) {
    switch (day % 10) {
        case 1: return "st"
        case 2: return "nd"
        case 3: return "rd"
        default: return "th"
    }
}

// if the date difference is less than 3 days, we want to show something like:
// "3 hours ago", "2 days ago", "10 minutes ago", etc.
export function format_human_date(date: Date){
    const now = new Date()

    const diff = now.getTime() - date.getTime()
    const diff_seconds = Math.floor(diff / 1000)
    const diff_minutes = Math.floor(diff_seconds / 60)
    const diff_hours = Math.floor(diff_minutes / 60)
    const diff_days = Math.floor(diff_hours / 24)

    if (diff_seconds < 60) {
        return `${diff_seconds} seconds ago`
    }

    if (diff_minutes < 60) {
        return `${diff_minutes} minutes ago`
    }

    if (diff_hours < 24) {
        return `${diff_hours} hours ago`
    }


    return `${diff_days} days ago`
}