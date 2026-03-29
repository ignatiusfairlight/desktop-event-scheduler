<script lang="ts">
  import DataTable from "$lib/components/data-table.svelte";
  import { columns } from "./columns";
  import { type Event } from "$lib/tableUtils";
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

  let archivedData = $derived(
    data.filter(
      (event) => event.is_approved === 1 && new Date(event.end) < new Date(),
    ),
  );
</script>

<h2 class="mt-5 mb-4 ml-10 text-4xl font-semibold">Archives</h2>

<div class="flex flex-col gap-10 p-4 xl:flex-row xl:p-10">
  <DataTable data={archivedData} {columns} />
</div>
