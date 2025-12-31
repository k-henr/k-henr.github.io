import { LinkWithIcon } from "@/app/_components/linkWithIcon";

export default function Page() {
    return (
        <>
            <div className="page">
                <h1>Tetris in Desmos</h1>
                <p>
                    I've always enjoyed making games in Desmos, and these are
                    two of my favourite graphs. The first one was made as an
                    exercise to learn{" "}
                    <a href="https://help.desmos.com/hc/en-us/articles/4407725009165-Actions">
                        Desmos actions
                    </a>
                    , which are a way to update variables automatically,
                    essentially making Desmos a full game engine. I was very
                    proud of my Tetris game, but eventually I felt like I had
                    learnt enough to make a new and improved version. So I have
                    two versions, the first of which is still slighly more
                    performant due to fewer features, but the second one is
                    still much prettier and better in general.
                </p>
                <p>
                    Another interesting fact: Basically, all Desmos graphs have
                    a link that looks like{" "}
                    <span className="code">
                        desmos.com/[calculatorType]/[hash]
                    </span>
                    , where the hash is normally a random collection of letters
                    and numbers. But there's a way to set the hash yourself, as
                    long as it's alphanumeric and either 10 or 20 characters
                    long. The method is kept somewhat secret to avoid exhausting
                    all the "good" hashes, and it's a relatively inconvenient
                    process, but I've managed to nab myself the "tetrisgame"
                    hash. So{" "}
                    <a href="https://desmos.com/calculator/tetrisgame">
                        https://desmos.com/calculator/tetrisgame
                    </a>{" "}
                    now leads to my tetris game (version 2).
                </p>
                <p>Links:</p>
                <LinkWithIcon
                    href="https://www.desmos.com/calculator/78b054d578"
                    src="/Icons/desmos.ico"
                    target="_blank"
                >
                    Desmos Tetris, version 1
                </LinkWithIcon>
                <LinkWithIcon
                    href="https://www.desmos.com/calculator/tetrisgame"
                    src="/Icons/desmos.ico"
                    target="_blank"
                >
                    Desmos Tetris, version 2
                </LinkWithIcon>
            </div>
        </>
    );
}
