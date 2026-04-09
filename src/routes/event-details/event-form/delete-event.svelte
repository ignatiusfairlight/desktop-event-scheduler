<script lang="ts">
    import * as AlertDialog from "$lib/components/ui/alert-dialog/index.js";
    import { buttonVariants } from "$lib/components/ui/button/index.js";
    import { invoke } from "@tauri-apps/api/core";

    const { id, onSuccess } = $props<{ id: number, onSuccess: () => void }>();

    async function onDelete() { 
        try {
            await invoke("delete_event", { id });
            onSuccess();
        } catch(e) {
            console.error(e)
        }
    }
</script>

<AlertDialog.Root>
    <AlertDialog.Trigger class={buttonVariants({ variant: "destructive" })}>
        Delete
    </AlertDialog.Trigger>
    <AlertDialog.Content>
        <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>
                This action cannot be undone. This will permanently delete the
                event from the database.
            </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <AlertDialog.Action onclick={onDelete}>Delete</AlertDialog.Action>
        </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>
