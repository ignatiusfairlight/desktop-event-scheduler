<script lang="ts">
	import { Calendar, DayGrid, TimeGrid } from "@event-calendar/core";
	let { data }: { data: any } = $props();

	let plugins = [DayGrid, TimeGrid];
	let options = $derived({
		height: "600px",
		headerToolbar: {
			start: "today",
			center: "title",
			end: "dayGridMonth,timeGridWeek,timeGridDay prev,next",
		},
		view: "dayGridMonth",
		eventSources: [
			{
				events: () => {
					return data.events;
				},
			},
		],
	});
	let ec: any = $state();
	$effect(() => {
		data.events; // track changes
		ec?.refetchEvents();
	});
</script>

<Calendar bind:this={ec} {plugins} {options} />
