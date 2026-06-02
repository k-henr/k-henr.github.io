<script lang="ts">
    import type { Snippet } from "svelte";

    const {
        children,
        href,
        src,
        target,
    }: {
        children: Snippet;
        href: string;
        src: string;
        target?: "_self" | "_blank" | "_parent" | "_top" | (string & {});
    } = $props();
</script>

<a {href} {target}>
    <img {src} aria-hidden="true" alt="icon" />
    <p>{@render children()}</p>
</a>

<style>
    a {
        width: fit-content;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        & > img {
            height: 2rem;
        }
        & > p {
            margin: 0px;
        }
    }
</style>
