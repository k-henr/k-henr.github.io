<script lang="ts">
    import favicon from "$lib/assets/favicon.ico";
    import MenuItem from "$lib/components/MenuItem.svelte";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>khenr</title>
</svelte:head>

<!-- Menu -->
<div id="navbar">
    <a href="/">
        <img src="/logo.png" alt="My go-to profile" />
        <p>khenr</p>
    </a>
    <nav>
        <MenuItem name="Home" href="/" />
        <MenuItem name="Projects" href="/projects">
            <MenuItem name="The Ghost is your Friend" href="/projects/ghostfriend" />
            <MenuItem
                name="Unhelpful calculator"
                href="/projects/unhelpfulcalculator"
            />
            <MenuItem name="Tetris" href="/projects/desmostetris" />
            <MenuItem name="3Desmos" href="/projects/3desmos" />
        </MenuItem>
    </nav>
    <small
        ><i>
            Want to chat? Send me an email at mail@khenr.se or find me on discord as
            khenr!
        </i></small
    >
</div>
<!-- Main page -->
<main>
    <article>
        {@render children()}
    </article>
</main>

<style>
    @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter_24pt-Regular.ttf");
    }

    :global(body) {
        font-family: Inter;

        margin: 0px;
        padding: 0px;
        min-height: 100vh;

        display: flex;
        & > #navbar {
            width: 20vw;
            min-width: 20rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            background-color: var(--navbar-bg);
            & > a {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                text-decoration: none; /* Get rid of the underline from using an a tag */
                & > img {
                    width: 40px;
                    border: var(--menu-separator);
                    box-sizing: border-box;
                }
                & > p {
                    font-size: x-large;
                    color: var(--profile-text);
                }
            }
            & > nav {
                width: 100%;
            }
            & > small {
                color: var(--navbar-fineprint);
                width: 80%;
                text-align: center;
            }
        }
        & > main {
            flex: 1;
            & > article {
                padding: 4rem;
                background-color: var(--content-bg);
                height: 100%;
                box-sizing: border-box;

                & > :global(section) {
                    background-color: var(--article-bg);
                    padding: 4rem;
                    font-size: larger;
                    &:not(:first-child) {
                        margin-top: 4rem;
                    }
                }
            }
        }
    }

    :global(a) {
        color: var(--links);
    }

    :global(:root) {
        --navbar-bg: #a0a0a0;
        --content-bg: #c3dfe0;
        --article-bg: #fff;

        --profile-text: #f0f8f8;

        --menu-separator: 1px solid #787878;
        --navbar-fineprint: #3c3c3c;
        --menu-expand-btn-hover-bg: #787878;
        --menu-item-hover: #5a5a5a;

        --links: #0b4e85;
    }
</style>
