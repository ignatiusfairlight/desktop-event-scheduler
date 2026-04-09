import type { ColumnDef } from "@tanstack/table-core";
import { statusMap, formatDate, formatTime, type Event } from "$lib/tableUtils";
import { renderComponent } from "$lib/components/ui/data-table/index.js"
import DeleteEvent from "./event-form/delete-event.svelte";

export function createColumns(onSuccess: () => void): ColumnDef<Event>[] {
    return [{
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
        id: "actions",
        cell: ({ row }) => renderComponent(DeleteEvent, { id: row.original.id, onSuccess })
    }
    ]
}