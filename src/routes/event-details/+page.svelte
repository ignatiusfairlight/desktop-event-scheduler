<script lang="ts">
    import DataTable from "./data-table/data-table.svelte";
    import { columns } from "./data-table/columns";

    let data = $state([]);
</script>

<h2 class="mt-5 mb-4 ml-10 text-4xl font-semibold">Event Details</h2>

<div class="flex flex-col gap-10 p-4 xl:flex-row xl:p-10">
    <DataTable data={data} {columns} />
</div>
