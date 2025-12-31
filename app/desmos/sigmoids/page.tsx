import { LinkWithIcon } from "@/app/_components/linkWithIcon";

export default function Page() {
    return (
        <>
            <div className="page">
                <h1>Sigmoid collection</h1>
                <p>
                    A while back, I decided to start collecting sigmoids. I
                    defined a sigmoid as a function that interpolates smoothly
                    from one value to another as x varies, and to no one's
                    surprise, there are a lot of different functions that
                    satisfy that requirement. So I also decided that no two
                    functions were allowed to be affinely equivalent - so, no
                    scaling, translating or shearing should be able to get the
                    graphs to completely overlap (discounting irreversible
                    transformations, of course). This is still a sizeable
                    collection, so I decided to feature it here. All functions
                    have been transformed to interpolate from 0 to 1 at a
                    somewhat similar rate.
                </p>
                <p>Link:</p>
                <LinkWithIcon
                    href="https://www.desmos.com/calculator/1c10e1dd8c"
                    src="/Icons/desmos.ico"
                    target="_blank"
                >
                    Sigmoid collection
                </LinkWithIcon>
                <p>
                    Yes, <i>technically</i> one of them only counts as a sigmoid
                    as <span className="code">m</span> approaches infinity, but
                    I decided to count it anyway.
                </p>
            </div>
        </>
    );
}
