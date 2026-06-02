<script>
    import ImageWithCaption from "$lib/components/ImageWithCaption.svelte";
    import LinkWithIcon from "$lib/components/LinkWithIcon.svelte";
</script>

<section>
    <h1>Unhelpful calculator</h1>
    <p>
        This is a pretty normal calculator, with support for variables, functions and
        a few built-in constants. However, the calculator doesn't like maths and will
        complain at you if the expression you wrote is too complicated and hard to
        figure out. You can ask it to try again, and it'll have a slightly higher
        tolerance for hard maths.
    </p>
    <ImageWithCaption
        src="/files/unhelpfulcalc/hardmaths.png"
        caption="It's not wrong"
        alt="The calculator struggles with maths."
    />
    <p>Link:</p>
    <LinkWithIcon
        src="/icons/calculator.svg"
        href="https://k-henr.github.io/unhelpfulcalculator"
        target="_blank">Unhelpful calculator</LinkWithIcon
    >
    <h2>List of supported keywords</h2>
    <p>Functions:</p>
    <ul>
        <li>sin</li>
        <li>cos</li>
        <li>tan</li>
        <li>arcsin</li>
        <li>arccos</li>
        <li>arctan</li>
        <li>abs</li>
        <li>round</li>
        <li>ln</li>
        <li>log</li>
        <li>sqrt</li>
        <li>cbrt</li>
        <li>round2</li>
    </ul>
    <p>Variables:</p>
    <ul>
        <li>TAU</li>
        <li>PI</li>
        <li>
            <a href="https://xkcd.com/1292/">PAU</a>
        </li>
        <li>E</li>
        <li>PHI</li>
    </ul>
</section>
