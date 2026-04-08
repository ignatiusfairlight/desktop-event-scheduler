<script lang="ts">
    import * as Select from "$lib/components/ui/select/index.js";

    const statuses = [
        { value: "0", label: "Pending" },
        { value: "1", label: "Approved" },
        { value: "2", label: "Rejected" },
    ];

    let { approvalStatus = $bindable() } = $props();

    const triggerContent = $derived(
        statuses.find((f) => f.value === approvalStatus)?.label ?? "Is it approved?",
    );
</script>

<Select.Root type="single" name="isApproved" bind:value={approvalStatus}>
    <Select.Trigger class="w-[180px]">
        {triggerContent}
    </Select.Trigger>
    <Select.Content>
        {#each statuses as status}
            <Select.Item value={status.value}>{status.label}</Select.Item>
        {/each}
    </Select.Content>
</Select.Root>
