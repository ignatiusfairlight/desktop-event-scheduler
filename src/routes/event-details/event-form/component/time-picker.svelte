<script lang="ts">
    import { Label } from "$lib/components/ui/label/index.js";
    import { Input } from "$lib/components/ui/input/index.js";

    const id = $props.id();

    let { time = $bindable("") }: { time: string } = $props();
</script>


<!--TODO-->
<!-- Create a logic to prevent the user from picking time occurs before the start -->

<div>
    <div class="flex flex-col gap-3">
        <Label for="{id}-time" class="px-1">Time</Label>
        <Input
            type="time"
            id="{id}-time"
            step="1"
            bind:value={time}
            class="
                bg-background appearance-none 
                [&::-webkit-calendar-picker-indicator]:hidden 
                [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
    </div>
</div>
