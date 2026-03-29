import type { ColumnDef } from "@tanstack/table-core";
import { formatDate, type Event } from "$lib/tableUtils";

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
        accessorKey: "location",
        header: "Location",
    }
]