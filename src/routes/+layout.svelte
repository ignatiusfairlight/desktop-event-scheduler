<script lang="ts">
  import "./layout.css";
  import AppSidebar from "$lib/components/app-sidebar.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import { Toaster } from "$lib/components/ui/sonner/index.js";

  let { children } = $props();
</script>

<Toaster />

<Sidebar.Provider>
  <AppSidebar />
  <main class="flex-1 w-full overflow-auto">
    <Sidebar.Trigger />
    {@render children?.()}
  </main>
</Sidebar.Provider>
