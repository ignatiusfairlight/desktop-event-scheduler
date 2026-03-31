<script lang="ts">
  import Calendar from "$lib/components/calendar.svelte";
  import DataTable from "$lib/components/data-table.svelte";
  import { columns as approvalColumns } from "./approval-columns";
  import { columns as upcomingColumns } from "./upcoming-columns";
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

  let upcomingData = $derived(
    data
      .filter(
        (event) =>
          event.is_approved === 1 && new Date(event.start) > new Date(),
      )
      .sort(
        (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
      )
      .slice(0, 5)
  );

  let approvalData = $derived(
    data
      .filter(
        (event) =>
          event.is_approved === 0 && new Date(event.start) > new Date(),
      )
      .sort(
        (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
      )
      .slice(0, 5),
  );
</script>

<h2 class="mt-5 mb-4 ml-10 text-4xl font-semibold">Dashboard</h2>

<div>
  <div>
    <Calendar {data} />
  </div>
  <div>
    <DataTable data={upcomingData} columns={upcomingColumns} />
  </div>
  <div>
    <DataTable data={approvalData} columns={approvalColumns} />
  </div>
</div>
