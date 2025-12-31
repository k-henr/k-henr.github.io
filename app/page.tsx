import { LinkWithIcon } from "@/app/_components/linkWithIcon";

export default function Page() {
    return (
        <>
            <div className="page">
                <h1>About this webpage</h1>
                <p>
                    This website has 2 main reasons to be alive. It is 1) an
                    exercise in web development, and 2) a place where I collect
                    various projects and things I want to save in one spot. I
                    quite like the style of the website, so I might repurpose it
                    later.
                </p>
                <p>
                    The site is made using Next.js. Originally I had it as a
                    static .html file on Github pages, but that meant no real
                    routing, and required dubious workarounds to fetch page
                    data, so I ended up learning Next.js to move it to a less
                    bad system.
                </p>
            </div>
            <div className="page">
                <h1>About me</h1>
                <LinkWithIcon
                    src="Icons/github.svg"
                    href="https://github.com/k-henr"
                    target="_blank"
                >
                    Github: k-henr
                </LinkWithIcon>
                <LinkWithIcon
                    src="Icons/discord.svg"
                    href="https://discord.com/users/772538117898895421"
                    target="_blank"
                >
                    Discord: k_henr
                </LinkWithIcon>
                <p>
                    I'm a swede who likes programming and mathematics. I'm also
                    currently (as of autumn 2025) also trying to learn more
                    about electronics and breadboard circuits.
                </p>
                <p>
                    To my memory, I have programmed since when I was around 8
                    years old, mostly just for fun. But occasionally I've been
                    able to find applications for my programs.
                </p>
                <p>Familiar programming languages:</p>
                <ul>
                    <li>C#</li>
                    <li>Java</li>
                    <li>Processing</li>
                    <li>Static HTML/CSS/JS</li>
                    <li>Next.js</li>
                    <li>Python</li>
                </ul>
                <p>
                    For more information, see my{" "}
                    <a href="/programming">programming projects</a>.
                </p>
            </div>
        </>
    );
}
