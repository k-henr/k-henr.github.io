import type { Metadata } from "next";
import { Inter, Monda } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { MenuItem } from "./_components/menuitem";

// Create fonts
const contentFont = Inter({
    subsets: ["latin"],
});
const brandingFont = Monda({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "khenr",
    description: "Personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>khenr</title>
            </head>
            <body>
                <Header brandingFont={brandingFont}>
                    <div id="menu" className={contentFont.className}>
                        <MenuItem name="Home" href="/" />
                        <MenuItem name="Desmos projects" href="/desmos">
                            <MenuItem name="Tetris" href="/desmos/tetris" />
                            <MenuItem name="3D renderers" href="/desmos/3d" />
                            <MenuItem
                                name="Harmonograph"
                                href="/desmos/harmonograph"
                            />
                            <MenuItem
                                name="Sigmoid collection"
                                href="/desmos/sigmoids"
                            />
                        </MenuItem>
                        <MenuItem
                            name="Programming projects"
                            href="/programming"
                        >
                            <MenuItem
                                name="The Ghost is your Friend"
                                href="/programming/ghostfriend"
                            />
                            <MenuItem
                                name="Generic Strategy Game"
                                href="/programming/genericstrategy"
                            />
                        </MenuItem>
                    </div>
                    <div
                        className={`headerDisclaimer ${contentFont.className}`}
                    >
                        Want to contact me regarding the website? DM me on
                        Discord (
                        <a
                            className="mutedLink"
                            href="https://discord.com/users/1455231110601638045"
                            target="blank"
                        >
                            k_henr
                        </a>
                        )!
                    </div>
                </Header>

                <div id="content" className={contentFont.className}>
                    {children}
                </div>
            </body>
        </html>
    );
}
