export function LinkWithIcon({
    children,
    src,
    href,
    target,
}: Readonly<{
    children: React.ReactNode;
    src: string;
    href?: string;
    target?:
        | ("_self" | "_blank" | "_parent" | "_top" | (string & {}))
        | undefined;
}>) {
    return (
        <a href={href} className="pageIconLinkListElement" target={target}>
            <img src={src} />
            <p className="pageIconLinkLabel">{children}</p>
        </a>
    );
}
