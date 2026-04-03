<script lang="ts">
    import DataTable from "$lib/components/data-table.svelte";
    import { columns } from "./columns";
    import { type Event } from "$lib/tableUtils";
    import { onMount } from "svelte";
    import { invoke } from "@tauri-apps/api/core";
    import EventFilter from "$lib/components/event-filter.svelte";

    let data = $state<Event[]>([]);

    let filters = $state({
        title: "",
        startMonth: "",
        endMonth: "",
        status: [] as number[],
    });

    onMount(async () => {
        invoke<Event[]>("get_events")
            .then((result) => {
                data = result;
            })
            .catch((e) => {
                console.error(e);
            });
    });

    let ongoingData = $derived(
        data
            .filter((event) => new Date(event.end) > new Date())
            .sort(
                (a, b) => new Date(a.end).getTime() - new Date(b.end).getTime(),
            ),
    );

    let filteredResults = $derived(
        ongoingData.filter(
            (event) =>
                (filters.title === "" ||
                    event.title
                        .toLowerCase()
                        .includes(filters.title.toLowerCase())) &&
                (filters.startMonth === "" ||
                    new Date(event.start).getMonth() >=
                        parseInt(filters.startMonth)) &&
                (filters.endMonth === "" ||
                    new Date(event.end).getMonth() <=
                        parseInt(filters.endMonth)) &&
                (filters.status.length === 0 ||
                    filters.status.includes(event.is_approved)),
        ),
    );
</script>

<h2 class="mt-5 mb-4 ml-10 text-4xl font-semibold">Event Details</h2>

<div>
    <EventFilter
        bind:filterTitle={filters.title}
        bind:filterStartMonth={filters.startMonth}
        bind:filterEndMonth={filters.endMonth}
        bind:filterStatus={filters.status}
    />
</div>
<div class="flex flex-col gap-10 p-4 xl:flex-row xl:p-10">
    <DataTable data={filteredResults} {columns} showPagination={true} />
</div>
