<script lang="ts">
    import DataTable from "$lib/components/data-table.svelte";
    import { columns, type Event } from "./columns";
    import { onMount } from "svelte";
    import { invoke } from "@tauri-apps/api/core";

    let data = $state<Event[]>([]);

    onMount(async () => {
        invoke<Event[]>("get_events")
            .then((result) => {
                data = result;
            })
            .catch((e) => {
                console.error(e);
            });
    });
</script>

<h2 class="mt-5 mb-4 ml-10 text-4xl font-semibold">Event Details</h2>

<div class="flex flex-col gap-10 p-4 xl:flex-row xl:p-10">
    <DataTable {data} {columns}/>
</div>
