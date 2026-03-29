<script lang="ts">
	import {
		Calendar,
		DayGrid,
		TimeGrid,
		Interaction,
	} from "@event-calendar/core";
	let { data }: { data: any } = $props();

	let plugins = [DayGrid, TimeGrid, Interaction];
	let options = $state({
		height: "75dvh",
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
</script>

<Calendar {plugins} {options} />