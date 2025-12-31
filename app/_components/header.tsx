/**
 * Constructs the header. Note that this has the client directive, so don't run JS here!
 */
"use client";
import { NextFont } from "next/dist/compiled/@next/font";
import { useState } from "react";

export function Header({
    children,
    brandingFont,
}: Readonly<{
    children: React.ReactNode;
    brandingFont: NextFont;
}>) {
    const [menuIsOpen, setMenuState] = useState(false);
    function toggleMenu() {
        setMenuState(!menuIsOpen);
    }

    return (
        <div id="header">
            <div id="mainHeader">
                <a id="branding" href="/">
                    <img id="brandingImage" src="/logo.png" />
                    <div id="brandingText" className={brandingFont.className}>
                        khenr
                    </div>
                </a>
                <img
                    id="openMenuButton"
                    src="/Icons/menu.svg"
                    onClick={toggleMenu}
                />
            </div>
            <div
                id="toggleableOnMobile"
                className={`menu ${menuIsOpen ? "" : "hiddenMobile"}`}
            >
                {children}
            </div>
        </div>
    );
}
