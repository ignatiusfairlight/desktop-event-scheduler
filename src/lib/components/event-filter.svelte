<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import { Checkbox } from "$lib/components/ui/checkbox/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import * as Popover from "$lib/components/ui/popover/index.js";

    let { onFilter } = $props<{
        onFilter: (filters: {
            filterTitle: string;
            filterStartMonth: string;
            filterEndMonth: string;
            filterStatus: number[];
        }) => void;
    }>();

    let filterTitle = $state("");
    let filterStartMonth = $state("");
    let filterEndMonth = $state("");
    let filterStatus = $state<number[]>([]);

    let isOpen = $state(false);

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

<Popover.Root bind:open={isOpen}>
    <Popover.Trigger class={buttonVariants({ variant: "default" })}
        >Filter</Popover.Trigger
    >
    <Popover.Content class="flex flex-col gap-4">
        <div class="grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-3">
            <Label>Title</Label>
            <Input
                bind:value={filterTitle}
                placeholder="Enter event title"
                class="max-w-xs"
            />
            <Label>Start</Label>
            <Select.Root type="single" bind:value={filterStartMonth}>
                <Select.Trigger class="w-full"
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
            <Label>End</Label>
            <Select.Root type="single" bind:value={filterEndMonth}>
                <Select.Trigger class="w-full">{startEndTrigger}</Select.Trigger
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
        <Label>Status</Label>
        {#each [{ value: 0, label: "Pending" }, { value: 1, label: "Approved" }, { value: 2, label: "Rejected" }] as status}
            <div class="flex gap-2">
                <Checkbox
                    onclick={() =>
                        (filterStatus = filterStatus.includes(status.value)
                            ? filterStatus.filter(
                                  (item: number) => item !== status.value,
                              )
                            : [...filterStatus, status.value])}
                />
                <Label>{status.label}</Label>
            </div>
        {/each}
        <Button
            onclick={() => {
                onFilter({
                    filterTitle,
                    filterStartMonth,
                    filterEndMonth,
                    filterStatus,
                });
                isOpen = false;
            }}>Submit</Button
        >
    </Popover.Content>
</Popover.Root>
