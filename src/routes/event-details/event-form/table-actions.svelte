<script lang="ts">
  import DeleteEvent from "./delete-event.svelte";
  import EditEvent from "./edit-event.svelte";
  import type { Event as ChurchEvent } from "$lib/tableUtils";

  const { event, onSuccess } = $props<{
    event: ChurchEvent;
    onSuccess: () => void;
  }>();
</script>

<EditEvent {event} {onSuccess} />
<DeleteEvent id={event.id} {onSuccess} />
