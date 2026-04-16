<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Checkbox } from "$lib/components/ui/checkbox/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";

    let {
        filterTitle = $bindable(),
        filterStartMonth = $bindable(),
        filterEndMonth = $bindable(),
        filterStatus = $bindable(),
    } = $props();

    const months = [
        { value: "", label: "Select a month" },
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

<Popover.Root>
    <Popover.Trigger class={buttonVariants({ variant: "default" })}>Filter</Popover.Trigger>
    <Popover.Content>
        <div>
            <Input
                bind:value={filterTitle}
                placeholder="Enter event title"
                class="max-w-xs"
            />
        </div>
        <div>
            <Select.Root type="single" bind:value={filterStartMonth}>
                <Select.Trigger class="w-[180px]"
                    >{startSelectTrigger}</Select.Trigger
                >
                <Select.Content>
                    {#each months as month}
                        <Select.Item value={month.value}
                            >{month.label}</Select.Item
                        >
                    {/each}
                </Select.Content>
            </Select.Root>
            <Select.Root type="single" bind:value={filterEndMonth}>
                <Select.Trigger class="w-[180px]"
                    >{startEndTrigger}</Select.Trigger
                >
                <Select.Content>
                    {#each months as month}
                        <Select.Item value={month.value}
                            >{month.label}</Select.Item
                        >
                    {/each}
                </Select.Content>
            </Select.Root>
        </div>
        <div>
            <div>
                <Checkbox
                    onclick={() =>
                        (filterStatus = filterStatus.includes(0)
                            ? filterStatus.filter((item: number) => item !== 0)
                            : [...filterStatus, 0])}
                />
                <Label>Pending</Label>
            </div>
            <div>
                <Checkbox
                    onclick={() =>
                        (filterStatus = filterStatus.includes(1)
                            ? filterStatus.filter((item: number) => item !== 1)
                            : [...filterStatus, 1])}
                />
                <Label>Approved</Label>
            </div>
            <div>
                <Checkbox
                    onclick={() =>
                        (filterStatus = filterStatus.includes(2)
                            ? filterStatus.filter((item: number) => item !== 2)
                            : [...filterStatus, 2])}
                />
                <Label>Rejected</Label>
            </div>
        </div>
    </Popover.Content>
</Popover.Root>
