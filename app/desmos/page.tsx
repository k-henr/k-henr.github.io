export default function Page() {
    return (
        <>
            <div className="page">
                <h1>Desmos projects</h1>
                <p>
                    I love Desmos. It's good-looking, intutitve and powerful
                    (albeit slow at times). There's a surprisingly large
                    community of math nerds out there, and I really enjoy the
                    community. I'm far from the true experts, but I can
                    generally get the graph paper to do what I want. My
                    favourite graphs are probably{" "}
                    <a href="/desmos/tetris">my Tetris copies</a>, particularly
                    version 2, and <a href="/desmos/3d">my 3D renderers</a>{" "}
                    (again, particularly version 2). Otherwise, most of my
                    graphs are visualizations of specific maths or physics
                    concepts, or in some cases mockups of algorithms that I want
                    to use in other programs.
                </p>
                <p>
                    I'm also a big fan of Desmodder - a browser extension that
                    adds a lot of QOL functionality to the calculator. I cannot
                    recommend it enough to other Desmos enthusiasts.
                </p>
                <p>Here are some of my graphs:</p>
                <ul>
                    <li>
                        <a href="/desmos/tetris">Tetris</a>: After learning
                        about actions, I made a bad tetris game. Later on, I
                        made a slightly better Tetris game. Here they are.
                    </li>
                    <li>
                        <a href="/desmos/3d">3D renderers</a>: Version one was
                        my very first "big" Desmos project, and I enjoyed making
                        it a lot. Later on, it turned out I knew nothing about
                        projective geometry, so after learning some more about
                        it (as well as a few Desmos tricks) I decided to make a
                        new version.
                    </li>
                    <li>
                        <a href="/desmos/harmonograph">Harmonograph</a>: When I
                        was younger I was very fascinated by harmonographs, but
                        never was able to build a physical one. So eventually, I
                        made one in Desmos instead. This is one of my most
                        extensively commented graphs, so it should be easy-ish
                        to handle.
                    </li>
                    <li>
                        <a href="/desmos/sigmoids">Budget sigmoids</a>: I've
                        collected what I call "budget sigmoids" for a while.
                        This is a collection of functions that interpolate
                        smoothly between 0 and 1, none of which can be affinely
                        transformed into each other.
                    </li>
                </ul>
                <p>
                    Of course, I have many more graphs on my account. But these
                    are my favourites.
                </p>
            </div>
        </>
    );
}
