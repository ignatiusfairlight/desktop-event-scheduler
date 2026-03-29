import type { ColumnDef } from "@tanstack/table-core";

export type Event = {
    title: string;
    start: string;
    end: string;
    location: string;
    person_in_charge: string;
    contact_num: string;
    is_approved: number;
}

const statusMap: Record<number, string> = {
    0: "Pending",
    1: "Approved",
    2: "Rejected"
}

export const columns: ColumnDef<Event>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        id: "startDate",
        header: "Start Date",
        accessorFn: (row) => row.start,
        cell: ({ row }) => formatDate(row.original.start)
    },
    {
        id: "startTime",
        header: "Start Time",
        accessorFn: (row) => row.start,
        cell: ({ row }) => formatTime(row.original.start)
    },
    {
        id: "endDate",
        header: "End Date",
        accessorFn: (row) => row.end,
        cell: ({ row }) => formatDate(row.original.end)
    },
    {
        id: "endTime",
        header: "End Time",
        accessorFn: (row) => row.end,
        cell: ({ row }) => formatTime(row.original.end)
    },
    {
        accessorKey: "location",
        header: "Location",
    },
    {
        accessorKey: "person_in_charge",
        header: "Person in Charge",
    },
    {
        accessorKey: "contact_num",
        header: "Contact Number",
    },
    {
        accessorKey: "is_approved",
        header: "Approval Status",
        cell: ({ row }) => statusMap[row.original.is_approved]
    },
    {
        id: "actions"
    }
]

function formatDate(datetime: string): string {
    const date = new Date(datetime);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })
}

function formatTime(datetime: string): string {
    const date = new Date(datetime);
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })
}