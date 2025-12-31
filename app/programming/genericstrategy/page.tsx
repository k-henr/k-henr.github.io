import { ImageContainer } from "@/app/_components/imageContainer";

export default function Page() {
    return (
        <>
            <div className="page">
                <h1>Generic strategy game</h1>
                <p>
                    In high school, I took a basic programming course. Our
                    "examination" consisted of a project, where we got to make
                    any program we liked. I made two games, this is my second
                    one.
                </p>
                <p>
                    The game is mostly inspired by{" "}
                    <a href="https://en.wikipedia.org/wiki/Stratego">
                        Stratego
                    </a>
                    , but also other similar games. There's a lot of them, so
                    I'd have a hard time picking out the exact ones I was
                    playing at the time. The concept is fairly standard - you
                    get a board, you place pieces, then you play a normal
                    turn-based battle against an AI opponent. It's exactly what
                    is says on the tin - a generic strategy game. But it was
                    fairly interesting to make either way!
                </p>
                <ImageContainer caption='The level "Mountain Pass", after having chosen positions for the black pieces.'>
                    <img src="/Images/stratego1.png" />
                </ImageContainer>
                <p>
                    This project builds on some of the tools I developed for the
                    first game. It has the same state manager and input systems,
                    since those worked well. I'm not sure, but I think this
                    might be the first time I actually reused old code for new
                    projects, which felt great.
                </p>
                <p>
                    I'm now hosting this game on a GHP website, see{" "}
                    <a href="https://k-henr.github.io/genericStrategyGame/index.html">
                        this link
                    </a>{" "}
                    to play the game! It's not the prettiest, and I've left in
                    all the bugs that I didn't have time to catch. I also made a
                    level editor, which can be found{" "}
                    <a href="https://k-henr.github.io/genericStrategyGame/levelBuilder.html">
                        here
                    </a>
                    .
                </p>
            </div>
        </>
    );
}
