export function ImageContainer({
    children,
    caption,
}: Readonly<{
    children: React.ReactNode;
    caption: string;
}>) {
    return (
        <>
            <div className="imageContainer">{children}</div>
            <i className="imageCaption">{caption}</i>
        </>
    );
}
