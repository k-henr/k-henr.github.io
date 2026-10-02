<script lang="ts">
    import favicon from "$lib/assets/favicon.ico";
    import Email from "$lib/components/Email.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";

    let { children } = $props();

    let menuIsOpen = $state(false);
    function toggleMenu() {
        menuIsOpen = !menuIsOpen;
    }
    function menuAttacher(el: Element) {
        if (menuIsOpen) {
            el.classList.remove("hidden-mobile");
        } else {
            el.classList.add("hidden-mobile");
        }
    }
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>k_henr</title>
</svelte:head>

<!-- Menu -->
<div id="navbar">
    <header>
        <a href="/">
            <!-- Remove the warning from using the word "picture" in an alt -->
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src="/profile-picture.png" alt="My go-to profile picture" />
            <p>k_henr</p>
        </a>
        <button onclick={toggleMenu} aria-label="toggle menu visibility"
            ><img src="/icons/menu.svg" alt="menu" /></button
        >
    </header>
    <div {@attach menuAttacher}>
        <nav>
            <MenuItem name="Home" href="/" />
            <MenuItem name="Projects" href="/projects">
                <MenuItem name="Resource Calculator" href="/projects/resourcecalc" />
                <MenuItem
                    name="The Ghost is your Friend"
                    href="/projects/ghostfriend"
                />
                <MenuItem
                    name="Unhelpful calculator"
                    href="/projects/unhelpfulcalculator"
                />
                <MenuItem name="Tetris" href="/projects/desmostetris" />
                <MenuItem name="3Desmos" href="/projects/3desmos" />
            </MenuItem>
            <MenuItem name="AI statement" href="/ai"></MenuItem>
            <MenuItem name="&quot;Stack&quot;" href="/stack"></MenuItem>
        </nav>
        <small
            ><i>
                Want to chat? Send me an email at <Email /> or find me on discord as k_henr!
            </i></small
        >
    </div>
</div>
<!-- Main page -->
<main>
    <article>
        {@render children()}
    </article>
</main>

<style>
    /* Used in headers */
    @font-face {
        font-family: "Rufina";
        src: url("/fonts/Rufina-Regular.ttf");
    }
    /* Used by default */
    @font-face {
        font-family: "Vollkorn";
        src: url("/fonts/Vollkorn-Regular.ttf");
    }
    /* Used for smaller print where a serif font isn't legible enough */
    @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter_24pt-Regular.ttf");
    }

    :global(html) {
        background-color: var(--content-bg);
    }

    :global(body) {
        font-family: Vollkorn;

        margin: 0px;
        padding: 0px;

        > :global(div) {
            min-height: 100vh;

            & > #navbar {
                padding: 1rem;
                gap: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;

                background-color: var(--navbar-bg);

                & > header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 3rem;
                    width: 100%;
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
                            font-family: Vollkorn;
                            font-size: x-large;
                            color: var(--profile-text);
                        }
                    }
                    & > button {
                        display: block;
                        padding: unset;
                        background-color: unset;
                        border: unset;
                        cursor: pointer;
                        aspect-ratio: 1;
                        height: 40px;
                        border: 1px solid var(--menu-expand-btn-hover-bg);
                        &:active {
                            background-color: var(--menu-expand-btn-hover-bg);
                        }
                        & > img {
                            width: 100%;
                        }
                    }
                }
                & > div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    & > nav {
                        width: 100%;
                    }
                    & > small {
                        font-family: Inter;
                        color: var(--navbar-fineprint);
                        width: 80%;
                        text-align: center;
                    }
                }
            }
            & > main {
                flex: 1;
                & > article {
                    padding: 1rem;
                    background-color: var(--content-bg);
                    height: 100%;
                    box-sizing: border-box;

                    & > :global(section) {
                        background-color: var(--article-bg);
                        padding: 1rem;
                        &:not(:first-child) {
                            margin-top: 1rem;
                        }
                    }
                }
            }
        }
    }

    :global(a) {
        color: var(--links);
        &:active {
            color: var(--links-active);
        }
    }

    :global(h1, h2, h3, h4, h5, h6) {
        font-family: Rufina;
    }

    @media screen and (max-width: 999px) {
        :global(.hidden-mobile) {
            display: none !important;
        }
    }

    @media screen and (min-width: 1000px) {
        :global(body) > :global(div) {
            display: flex;

            & > #navbar {
                width: 20vw;
                min-width: 20rem;

                & > header > button {
                    display: none !important;
                }
            }

            & > main > article {
                padding: 4rem;

                & > :global(section) {
                    padding: 4rem;
                    font-size: larger;
                    &:not(:first-child) {
                        margin-top: 4rem;
                    }
                }
            }
        }

        :global(.hidden-mobile) {
            display: unset;
        }
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

        --footnote-border: #aaa;
        --footnote-bg: #eee;

        --links: #0b4e85;
        --links-active: #072f51;
    }
</style>
