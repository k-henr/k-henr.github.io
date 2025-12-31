export default function Page() {
    return (
        <>
            <div className="page">
                <h1>Programming projects</h1>
                <p>
                    This page exists for collecting the projects that I've
                    worked on, and that I actually feel are good or interesting
                    enough to deserve mention. I've programmed for a very long
                    time, and there are probably hundreds of things that I've
                    started (I've <i>finished</i> a lot fewer though). But most
                    of those were quite messy - nothing I'd want to show in a
                    public website. So consider this a small list of projects
                    that have either been curated because I enjoyed making them,
                    or because I enjoyed the result.
                </p>
                <p>
                    I haven't had the time/initiative to actually sift through
                    my projects and choose which ones to put here, so the list
                    is quite small for now:
                </p>
                <ul>
                    <li>
                        <a href="/programming/ghostfriend">
                            The Ghost is your Friend
                        </a>
                    </li>
                    <li>
                        <a href="/programming/genericstrategy">
                            Generic Strategy Game
                        </a>
                    </li>
                </ul>
            </div>
            <div className="page">
                <h1>Programming over time</h1>
                <p>
                    For fun, and to keep track myself, I've written out what
                    programming languages I've preferred working in over time
                    here. Note that this was written at university age, so
                    anything before that is from my memory only.
                </p>
                <p>
                    <b>8y-10y{/*2014-2016*/}: Scratch</b>. (Yes, I do count
                    scratch as a programming language). I was introduced to
                    Scratch programming (and a number of other similar systems)
                    in school. I tended to sit for way too long and make
                    elaborate platformers and copies of other simple games (I
                    remember a Polka dot game that I was quite proud of). It was
                    a fun time, but looking back, I actually already felt like I
                    wanted some basic OOP - not in those terms, of course, but I
                    wanted variables-per-object, and a way to inherit behaviour
                    between objects.
                </p>
                <p>
                    <b>10y-11y{/*2016-2017*/}: Scratch, Python</b>. Around this
                    point, I get a book detailing HTML/CSS/JS, but it's all way
                    over my head so I don't touch it much. Python, on the other
                    hand, is way easier for me to understand. At this point I'm
                    into programming enough that the lack of visuals (I didn't
                    do anything with Pygame) isn't a big issue, I'm exited
                    either way. I'm still going back to scratch every now and
                    then to make something small, though mostly ironically/for
                    fun.
                </p>
                <p>
                    <b>11y-15y{/*2017-2021*/}: Processing, Unity/C#, Python</b>.
                    Somewhere around here is when I start learning Unity. I
                    understand C#:s strong typing relatively quickly. I start
                    making bad Discord bots in Python, which I find fun - it's
                    the first time I actually use code <i>for</i> something. I
                    also discover and learn Processing, which I see at the time
                    as a bit like Python, but typed and with easy graphics. I
                    start preferring that over Python as my "mock-up"-language.
                </p>
                <p>
                    <b>
                        15y-18y{/*2021-2025*/}: Unity/C#, HTML/CSS/JS,
                        Processing
                    </b>
                    . In 2021, I take a programming course in high school, which
                    was in Javascript. I quickly grow to prefer it over Python,
                    since the syntax makes more sense to me and I like the
                    divide between layout (HTML), design (CSS) and behaviour
                    (JS). I still use Processing every now and then, but JS
                    becomes my go-to. This is also where I really start getting
                    into <a href="/desmos">Desmos</a>, and most of those
                    projects are from late high school.
                </p>
                <p>
                    <b>
                        18y-{/*2025-*/}: Pure C#, Unity/C#, HTML/CSS/JS, Python
                    </b>
                    . My programming courses in university use C#, and I really
                    like it. I already knew most of the syntax from my earlier
                    Unity experiments, but using it without all the Unity things
                    felt really nice - it was like being back with Python,
                    except this time I had a typed language with OOP
                    capabilities. It's one of the only environments where I
                    haven't felt like I had to fight the code to get what I
                    wanted. I still occasionally use JS for mockups (though I
                    have started disliking it a bit), and I'm using Python to
                    program a Raspberry Pi to do my bidding. I also put off
                    learning Git until now, but this is where I start
                    understanding how it works.
                </p>
                <p>
                    As of 2025, I'm trying to switch to Java over C#. The
                    cross-platform compatibility is nice to have, but the lack
                    of "QOL" features like computed properties are kind of
                    annoying. I'm doing some Java on the side right now, and
                    I'll see if I start liking it more than C#. Additionally,
                    I've tried learning more about modern web development using
                    frameworks like Next.js for this very site.
                    <br />
                    I've also briefly pondered Rust, but that seems like an
                    amalgamation of paradigms that doesn't know what it wants,
                    and I want my inheritance.
                </p>
            </div>
        </>
    );
}
