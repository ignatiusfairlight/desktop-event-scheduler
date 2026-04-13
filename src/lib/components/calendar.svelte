<script lang="ts">
	import {
		Calendar,
		DayGrid,
		TimeGrid,
	} from "@event-calendar/core";
	let { data }: { data: any } = $props();

	let plugins = [DayGrid, TimeGrid];
	let options = $state({
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
</script>

<Calendar {plugins} {options} />