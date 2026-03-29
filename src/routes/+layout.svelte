<script lang="ts">
  import "./layout.css";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  let { children } = $props();
</script>

<Sidebar.Provider>
  <AppSidebar />
  <main class="flex-1 w-full overflow-auto">
    <Sidebar.Trigger />
    {@render children?.()}
  </main>
</Sidebar.Provider>
