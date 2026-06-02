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
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    img {
        /* todo: make this a prop */
        max-width: 14cm;
    }
</style>
