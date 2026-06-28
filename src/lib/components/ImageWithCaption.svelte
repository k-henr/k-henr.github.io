<script lang="ts">
    const { src, alt, caption }: { src: string; alt: string; caption: string } =
        $props();
</script>

<figure>
    <img {src} {alt} />
    <small>{caption}</small>
</figure>

<style>
    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 1rem;
    }
    img {
        /* todo: make the max-bounds be props */
        max-width: 14cm;
        max-height: 7cm;
        width: 100%;
        object-fit: contain;
    }
</style>
