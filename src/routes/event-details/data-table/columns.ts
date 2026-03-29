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

export const columns: ColumnDef<Event>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "start",
        header: "Start",
    },
    {
        accessorKey: "end",
        header: "End",
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
    }
]