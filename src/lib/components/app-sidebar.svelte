<script lang="ts">
    import CalendarIcon from "@lucide/svelte/icons/calendar";
    import HouseIcon from "@lucide/svelte/icons/house";
    import InboxIcon from "@lucide/svelte/icons/inbox";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";

    // Menu items.
    const items = [
        {
            title: "Dashboard",
            url: "/",
            icon: HouseIcon,
        },
        {
            title: "Event Details",
            url: "/event-details",
            icon: CalendarIcon,
        },
        {
            title: "Archives",
            url: "/archives",
            icon: InboxIcon,
        }
    ];
</script>

<Sidebar.Root>
    <Sidebar.Content>
        <Sidebar.Group>
            <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
            <Sidebar.GroupContent>
                <Sidebar.Menu>
                    {#each items as item (item.title)}
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton>
                                {#snippet child({ props })}
                                    <a href={item.url} {...props}>
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
                    {/each}
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
    </Sidebar.Content>
</Sidebar.Root>
