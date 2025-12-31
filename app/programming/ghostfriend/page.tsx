import { ImageContainer } from "@/app/_components/imageContainer";

export default function Page() {
    return (
        <>
            <div className="page">
                <h1>The Ghost is your Friend</h1>
                <p>
                    In high school, I took a basic programming course. Our
                    "examination" consisted of a project, where we got to make
                    any program we liked. I made two games, this is my first
                    one.
                </p>
                <p>
                    In it, you play as an evil demon who sets out with its
                    supernatural friend to kill emojis. Walk around together on
                    an infinite plane, kill approaching foes, and pick up their
                    cash! Then use the money to level up, gaining new skills or
                    upgrading old ones. The game was inspired by a (then-)small
                    game called Magic Survival, but the (then-)big game Vampire
                    Survivors apparently had a similar concept, so people kept
                    assuming that that's the main inspiration source, which
                    annoyed me to no end.
                </p>
                <p>
                    It's mostly made on a single canvas screen, which I'm a bit
                    ashamed to admit nowadays. The reason is that I was used to
                    that system from earlier experiments in Processing, but I
                    quickly realized that this wasn't the intention for
                    HTML-based programs. If I were to rewrite this, I would
                    definitely use an object-based approach if I did it in HTML.
                    So, don't consider the quality of this code to be
                    representative of my current abilities - it was my first
                    real foray into HTML, and I was bound to make that mistake.
                </p>
                <ImageContainer caption="Gameplay example from the early game.">
                    <img src="/Images/ghostfriend/gameplay.png" />
                </ImageContainer>
                <p>
                    The ghost was actually a last-day addition (or
                    last-two-days, anyways). I originally just had the demon,
                    but I noticed that the best strategy was always to just run
                    away and weave between the enemies and projectiles, and that
                    this wasn't very fun. So I added the ghost: A slow
                    companion, without which you're slowed and do almost no
                    damage. This solved the issue, and also let me add a few
                    interesting ghost-related abilities.
                </p>
                <p>
                    Try out the game{" "}
                    <a href="https://k-henr.github.io/theGhostIsYourFriend/index.html">
                        here!
                    </a>
                </p>
            </div>
        </>
    );
}
