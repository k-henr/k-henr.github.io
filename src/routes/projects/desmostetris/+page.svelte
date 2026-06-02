<script>
    import LinkWithIcon from "$lib/components/LinkWithIcon.svelte";
</script>

<section>
    <h1>Tetris in Desmos</h1>
    <p>
        The first of these was made as an exercise to learn{" "}
        <a href="https://help.desmos.com/hc/en-us/articles/4407725009165-Actions">
            Desmos actions
        </a>, which are a way to update variables automatically. After I'd learnt
        some more desmos tricks, I made another one. So I have two versions, the
        first of which is still slighly more performant due to fewer features, but
        the second one is still much prettier and better in general.
    </p>
    <p>
        Another interesting fact: All Desmos graphs have a link that looks like{" "}
        <code>desmos.com/[calculatorType]/[hash]</code>, where the hash is usually a
        random string of letters and numbers. But there's a way to set the hash
        yourself, as long as it's alphanumeric and either 10 or 20 characters long.
        The method is kept somewhat secret to avoid exhausting all the "good" hashes,
        and it's a relatively inconvenient process, but I've managed to nab myself
        the "tetrisgame" hash. So{" "}
        <a href="https://desmos.com/calculator/tetrisgame">
            https://desmos.com/calculator/tetrisgame
        </a>{" "}
        now leads to my tetris game (version 2).
    </p>
    <p>Links:</p>
    <LinkWithIcon
        href="https://www.desmos.com/calculator/78b054d578"
        src="/icons/desmos.ico"
        target="_blank"
    >
        Desmos Tetris, version 1
    </LinkWithIcon>
    <LinkWithIcon
        href="https://www.desmos.com/calculator/tetrisgame"
        src="/icons/desmos.ico"
        target="_blank"
    >
        Desmos Tetris, version 2
    </LinkWithIcon>
</section>
