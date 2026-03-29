export const statusMap: Record<number, string> = {
    0: "Pending",
    1: "Approved",
    2: "Rejected"
}

export function formatDate(datetime: string): string {
    const date = new Date(datetime);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
}

export function formatTime(datetime: string): string {
    const date = new Date(datetime);
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })
}