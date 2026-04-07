<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Form from "$lib/components/ui/form/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { formSchema } from "./schema";
    import { defaults, superForm } from "sveltekit-superforms";
    import { zod4 } from "sveltekit-superforms/adapters";
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import DatePicker from "./component/date-picker.svelte";

    const form = superForm(defaults(zod4(formSchema)), {
        validators: zod4(formSchema),
        SPA: true,
    });

    const { form: formData, enhance } = form;
</script>

<Dialog.Root>
    <Dialog.Trigger>Create New Event</Dialog.Trigger>
    <Dialog.Content>
        <form use:enhance>
            <Form.Field {form} name="title">
                <Form.Control>
                    {#snippet children({ props })}
                        <Form.Label>Title</Form.Label>
                        <Input {...props} bind:value={$formData.title} />
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
            <Form.Field {form} name="startDate">
                <Form.Control>
                    {#snippet children({ props })}
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker
                            {...props}
                            bind:date={$formData.startDate}
                        />
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
            <Form.Field {form} name="startTime">
                <Form.Control>
                    {#snippet children()}
                        <Form.Label>Start Time</Form.Label>
                    {/snippet}
                </Form.Control>
            </Form.Field>
            <Form.Field {form} name="endDate">
                <Form.Control>
                    {#snippet children({ props })}
                        <Form.Label>End Date</Form.Label>
                        <DatePicker {...props} bind:date={$formData.endDate} minDate={$formData.startDate} />
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
            <Form.Field {form} name="endTime">
                <Form.Control>
                    {#snippet children()}
                        <Form.Label>End Time</Form.Label>
                    {/snippet}
                </Form.Control>
            </Form.Field>
            <Form.Field {form} name="location">
                <Form.Control>
                    {#snippet children({ props })}
                        <Form.Label>Location</Form.Label>
                        <Input {...props} bind:value={$formData.location} />
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
            <Form.Field {form} name="personInCharge">
                <Form.Control>
                    {#snippet children({ props })}
                        <Form.Label>Person In Charge</Form.Label>
                        <Input
                            {...props}
                            bind:value={$formData.personInCharge}
                        />
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
            <Form.Field {form} name="contactNum">
                <Form.Control>
                    {#snippet children({ props })}
                        <Form.Label>Contact Number</Form.Label>
                        <Input {...props} bind:value={$formData.contactNum} />
                    {/snippet}
                </Form.Control>
                <Form.FieldErrors />
            </Form.Field>
            <Dialog.Footer>
                <Dialog.Close
                    type="button"
                    class={buttonVariants({ variant: "outline" })}
                >
                    Cancel
                </Dialog.Close>
                <Button
                    type="button"
                    class={buttonVariants({ variant: "secondary" })}
                    >Save changes</Button
                >
            </Dialog.Footer>
        </form>
    </Dialog.Content>
</Dialog.Root>
