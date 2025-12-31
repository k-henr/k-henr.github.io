import { LinkWithIcon } from "@/app/_components/linkWithIcon";

export default function Page() {
    return (
        <>
            <div className="page">
                <h1>3Desmos</h1>
                <p>
                    The first "big" project i did in Desmos was a 3D renderer. I
                    unfortunately didn't know a lot about projective geometry
                    <i>or</i> efficient Desmos:ing, so I ended up with quite a
                    monstrosity. I also did a lot of it in the mobile app, which
                    meant I ended up writing a 471 character expression on a
                    small phone screen. I could only see about 6% of the
                    expression at any given time, so it's a mystery how I didn't
                    make some mistake while writing the (incredibly repetitive)
                    expression. Anyways, I got a terrible mesh renderer working,
                    and even got to backface culling before realizing how
                    objectively terrible the code was to modify. So then I left
                    it for a while, until I actually learnt a little bit about
                    projective geometry in our local maths club. After that, I
                    decided to make a new and improved renderer, which was much
                    more flexible and didn't mess up as much at the extremes. I
                    decided to link to both, although I vastly prefer the second
                    graph.
                </p>
                <p>Links:</p>
                <LinkWithIcon
                    href="https://www.desmos.com/calculator/893e6198ae"
                    src="/Icons/desmos.ico"
                    target="_blank"
                >
                    3Desmos, version 1
                </LinkWithIcon>
                <LinkWithIcon
                    href="https://www.desmos.com/calculator/b37c222d99"
                    src="/Icons/desmos.ico"
                    target="_blank"
                >
                    3Desmos, version 2
                </LinkWithIcon>
            </div>
        </>
    );
}
