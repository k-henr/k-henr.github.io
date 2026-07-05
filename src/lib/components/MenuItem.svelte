<script lang="ts">
    import type { Snippet } from "svelte";

    let open = $state(false);
    function toggle() {
        open = !open;
    }

    let {
        children,
        href,
        name,
    }: { children?: Snippet; href: string; name: string } = $props();
</script>

<div class="item">
    <section>
        <a {href}>{name}</a>
        {#if children}
            <button aria-label="Open or close menu" onclick={toggle}
                ><img
                    src={open ? "/icons/arrow-up.svg" : "/icons/arrow-down.svg"}
                    alt="open/close"
                /></button
            >
        {/if}
    </section>
    {#if open && children}
        <div class="child-list">
            {@render children()}
        </div>
    {/if}
</div>

<style>
    .item {
        border-top: var(--menu-separator);
        :global(nav) > &:last-child {
            border-bottom: var(--menu-separator);
        }

        & > section {
            display: flex;
            padding: 0.2rem;
            align-items: center;
            & a {
                padding: 0.5rem;
                color: unset;
                text-decoration: none;
                flex: 1;
                font-size: larger;
                height: 100%;
                &:hover {
                    color: var(--menu-item-hover);
                }
            }
        }
    }
    .child-list {
        margin-left: 16px;
    }

    button {
        padding: unset;
        background-color: unset;
        border: unset;
        cursor: pointer;
        aspect-ratio: 1;
        width: 2rem;
        height: 2rem;
        &:active {
            background-color: var(--menu-expand-btn-hover-bg);
        }
        @media screen and (min-width: 800px) {
            &:hover {
                background-color: var(--menu-expand-btn-hover-bg);
            }
        }
        & > img {
            width: 100%;
        }
    }
</style>
