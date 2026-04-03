<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import * as Select from "$lib/components/ui/select/index.js";

    let {
        filterTitle = $bindable(),
        filterStartMonth = $bindable(),
        filterEndMonth = $bindable(),
        filterStatus = $bindable(),
    } = $props();

    const months = [
        { value: "", label: "Select a month"},
        { value: "0", label: "January" },
        { value: "1", label: "February" },
        { value: "2", label: "March" },
        { value: "3", label: "April" },
        { value: "4", label: "May" },
        { value: "5", label: "June" },
        { value: "6", label: "July" },
        { value: "7", label: "August" },
        { value: "8", label: "September" },
        { value: "9", label: "October" },
        { value: "10", label: "November" },
        { value: "11", label: "December" },
    ];

    const startSelectTrigger = $derived(
        months.find((f) => f.value === filterStartMonth)?.label ??
            "Select a month",
    );

    const startEndTrigger = $derived(
        months.find((f) => f.value === filterEndMonth)?.label ??
            "Select a month",
    );
</script>

<div>
    <Input
        bind:value={filterTitle}
        placeholder="Enter event title"
        class="max-w-xs"
    />
</div>

<div>
    <Select.Root type="single" bind:value={filterStartMonth}>
        <Select.Trigger class="w-[180px]">{startSelectTrigger}</Select.Trigger>
        <Select.Content>
            {#each months as month}
                <Select.Item value={month.value}>{month.label}</Select.Item>
            {/each}
        </Select.Content>
    </Select.Root>
    <Select.Root type="single" bind:value={filterEndMonth}>
        <Select.Trigger class="w-[180px]">{startEndTrigger}</Select.Trigger>
        <Select.Content>
            {#each months as month}
                <Select.Item value={month.value}>{month.label}</Select.Item>
            {/each}
        </Select.Content>
    </Select.Root>
</div>

<div></div>
