<script>
    import ImageWithCaption from "$lib/components/ImageWithCaption.svelte";
    import LinkWithIcon from "$lib/components/LinkWithIcon.svelte";
</script>

<section>
    <h1>The Ghost is your Friend</h1>
    <p>
        This project was one of two examinating projects that I made in a high school
        programming course. I wasn't quite able to get the second one finished by the
        end of the course, which is why I'm not linking it here, but we were only
        really supposed to make one anyways. It's made on a single canvas screen
        (excluding text rendering), which is a bad way to do things when working in
        HTML, but I didn't realize that until it was too late to change.
    </p>
    <p>
        In the game, you play as an evil demon trying to kill emojis together with a
        ghost friend. Walk around on an infinite plane, kill approaching foes, and
        pick up their cash! Then use the money to level up, gaining new skills or
        upgrading old ones.
    </p>
    <ImageWithCaption
        src="/files/ghostfriend/gameplay.png"
        alt="What I'm sure was a thrilling moment of gameplay."
        caption="Gameplay example."
    />
    <p>Link:</p>
    <LinkWithIcon
        href="https://khenr.se/theGhostIsYourFriend/index.html"
        src="/icons/web-globe.svg"
        target="_blank"
    >
        The Ghost is your Friend
    </LinkWithIcon>
    <p>
        The ghost was actually a last-day addition (or last-two-days, anyways). I
        originally just had the demon, but the best strategy was always to just run
        away and weave between the enemies and projectiles, and that wasn't very fun.
        So I added the ghost: A slow companion that you had to stay near in order to
        do any meaningful damage. This solved the issue, and also let me add a few
        interesting ghost-related abilities.
    </p>
</section>
