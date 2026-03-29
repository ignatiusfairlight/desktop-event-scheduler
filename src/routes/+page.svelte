<script lang="ts">
  import Calendar from "$lib/components/calendar.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<h2 class="mt-5 mb-4 ml-10 text-4xl font-semibold">Dashboard</h2>

<div>
  <div>
    <Calendar {data} />
  </div>
</div>
