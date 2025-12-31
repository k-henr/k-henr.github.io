/**
 * Currently unpublished, for a few reasons:
 * - The app has no proper security - the names of the last participants are
 *   still loaded in
 * - I'm not really happy with the current result. I'm working on a proper app
 *   with auth, API and databases, when that's done I'll link to that instead
 *   and take down the old page
 */

import { LinkWithIcon } from "@/app/_components/linkWithIcon";

export default function Page() {
    return (
        <>
            <div className="page">
                <h1>Secret Santa</h1>
                <p>
                    During high school, we used to hold a secret santa every
                    christmas. I thought this was cool, but I felt like I was
                    really bad at buying presents to people. I still wanted to
                    be a part of it, so I instead opted to be the "organizer" -
                    I would be the one to give people targets, which meant that
                    I wouldn't be giving or recieving gifts, but I'd still
                    contribute. This was great according to me - I got to
                    contribute without having to buy presents, and it also
                    somewhat excused me from other, more boring class duties
                    since I'd "already done something". The Swedish parallel to
                    high school is three years, and I did the randomizing every
                    year. The randomizing was easy and done the same every year
                    - take a list, shuffle it, everyone gets the person after.
                    This guarantees both that no one gets themself, and that the
                    permutation was cyclic (the connections form a full circle),
                    which we wanted. The difference between the years lies in
                    the presentation to the "players":
                </p>
                <p>
                    The first year, I gave everyone a slip of paper with a name
                    on it. Simple, but effective.
                </p>
                <p>
                    The second year, I decided to do something fun - I'd make a
                    website on Github that people enter a code to get their
                    name! This worked pretty well - everyone got a slip with a
                    code, they (manually) entered the URL and then their code,
                    and they got their name. We all tried our best to pretend
                    like this was somehow safer or more efficient than year 1,
                    but I think we all knew it wasn't. At least I could add some
                    easter eggs for when people entered things other than their
                    code.
                </p>
                <p>
                    The third year, I still made a website because it was fun,
                    but this time I at least sent the link in our group chat so
                    people didn't have to enter a URL. I had also given up on
                    the code, people just entered their names now to get their
                    target. Since GHP sent all the target data to the client
                    anyways, and especially since the repository was public,
                    people could "cheat" really easily either way. This was
                    actually a bit more efficient than years 1 and 2 as well,
                    since I didn't have to print a bunch of paper slips and
                    didn't have to go around handing them out.
                </p>
                <p>
                    And I thought that would be it. Turns out, this had actually
                    worked well enough that one of my friends asked me to send
                    the code for their own secret santa! Unfortunately, I had
                    stored it in an account linked to the school, so I was
                    locked out and couldn't retrieve it. So I set out to write a
                    new one, this time with a "proper" backend (I had now learnt
                    how to make bad web APIs in google apps script). This one
                    relies on an ID provided in the URL to get the name - much
                    like the "code" from year 2, except now it could be embedded
                    in a QR code, which made the whole thing feel a little more
                    streamlined. This also means that there's a spreadsheet
                    where you enter the names of the santa and the target,
                    instead of having to muck around with JSON.
                </p>
                <p>
                    This has been a lot of buildup, so here's a link to the repo
                    for the latest front-end (it's not much - just a static HTML
                    site). The backend is harder to share, and also a lot more
                    yucky, so I'll hold off on it for now.
                </p>
                <LinkWithIcon
                    href="https://github.com/k-henr/secretsanta"
                    src="/Icons/github.svg"
                >
                    Link to frontend repo
                </LinkWithIcon>
            </div>
        </>
    );
}
