<script lang="ts">
    import Calendar from "$lib/components/ui/calendar/calendar.svelte";
    import * as Popover from "$lib/components/ui/popover/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
    import {
        getLocalTimeZone,
        parseDate,
        today,
    } from "@internationalized/date";
    import type { CalendarDate } from "@internationalized/date";
    import { calendarDateToString } from "$lib/tableUtils";

    const id = $props.id();

    let open = $state(false);
    let value = $state<CalendarDate | undefined>();

    let {
        date = $bindable(""),
        minDate = "",
    }: { date: string; minDate?: string } = $props();
</script>

<div class="flex gap-4">
    <div class="flex flex-col gap-3">
        <Label for="{id}-date" class="px-1">Date</Label>
        <Popover.Root bind:open>
            <Popover.Trigger id="{id}-date">
                {#snippet child({ props })}
                    <Button
                        {...props}
                        variant="outline"
                        class="w-32 justify-between font-normal"
                    >
                        {value
                            ? value
                                  .toDate(getLocalTimeZone())
                                  .toLocaleDateString()
                            : "Select date"}
                        <ChevronDownIcon />
                    </Button>
                {/snippet}
            </Popover.Trigger>
            <Popover.Content class="w-auto overflow-hidden p-0" align="start">
                <Calendar
                    type="single"
                    bind:value
                    onValueChange={() => {
                        open = false;
                        date = value ? calendarDateToString(value) : "";
                    }}
                    minValue={minDate
                        ? parseDate(minDate.slice(0, 10))
                        : today(getLocalTimeZone())}
                    captionLayout="dropdown"
                />
            </Popover.Content>
        </Popover.Root>
    </div>
</div>
