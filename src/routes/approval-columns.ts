import type { ColumnDef } from "@tanstack/table-core";
import { formatDate, formatTime, type Event } from "$lib/tableUtils";

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
        accessorKey: "person_in_charge",
        header: "Person in Charge",
    }
]