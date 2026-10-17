<script>
    import Footnote from "$lib/components/Footnote.svelte";
</script>

<section>
    <h1>Hosting solutions</h1>
    <p>
        At the time of writing, I host all my projects on Github Pages. This is nice
        for stability and ease of use, but doesn't let me do dynamic pages. Since
        SvelteKit supports dynamic websites as well and GHP can't distinguish between
        the static and dynamic part I also have to do a weird prerender thing to get
        it to work on GHP, which works fairly well but is annoying to set up.
    </p>
    <p>
        I'm planning to run my own home server at some point in the near future,
        which would let me host dynamic websites without outsourcing to other
        companies like Netlify or Vercel. Once I do, I'll probably also move this
        website there in order to get rid of the prerendering step.
    </p>
</section>
<section>
    <h1>Typescript weirdness</h1>
    <p>
        Many of my "smaller", more focused projects are made in simple, static HTML.
        I like not having a folder full of build files, and as long as I only need
        one page for the app static HTML is the easiest solution in my opinion. But I
        still want to use typescript rather than javascript, so what I've ended up
        doing is have an esbuild job in VSCode watching my .ts files and rebuilding
        the javascript side every time I save. This also has the effect of pushing
        all the generated code into a single file, and I could get it to minify it as
        well if I wanted. It's a little yucky; it duplicates all the code since I
        have both JS and TS, and the job has to be configured differently in
        different IDEs. But it works well enough for me.
    </p>
    <p>
        This is also currently my preferred way to write mockups and prototypes,
        rather than python or some other language. I used to use Unity/C# for this,
        but the overhead was annoying and the ease of writing Typescript has won me
        over. It also lets me host any projects online if I feel like it without
        having to rewrite everything.
    </p>
</section>
<section>
    <h1>Domain</h1>
    <p>
        My domain is registered at Oderland, a registrar based in Gothemburg. They
        also do hosting, SMTP and various other web services, but I only use the
        domain part of their business.
    </p>
    <p>
        I thought for a bit about whether I wanted a .se or .com domain, but
        eventually I landed on .se. There were a few reasons for that, but mainly I
        chose it because the organization that manages these is nicer than the .com
        one. They also have a maximum price for the domain, so while the "rent" on a
        .com domain could theoretically rise arbitrarily high
        <Footnote
            >The way this works, to my understanding, is that there's a central
            authority that's responsible for the top domain, and then the registrars
            can request domains from this authority. The authority takes money for
            this, and it's up to the registrar to choose how much they want to charge
            the customer. So if the central authority for .com domains (<a
                href="https://en.wikipedia.org/wiki/Verisign">Verisign</a
            >) decides to double the price for all .com domains, all the registrars
            would have to follow to stay alive. I'd assume that there would be some
            legal trouble for Verisign if they tried, but I prefer to interact with a
            nonprofit either way.</Footnote
        >, .se-domains have more bureucratic protections.
    </p>
</section>
