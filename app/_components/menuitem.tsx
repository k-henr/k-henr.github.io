"use client";
import { useState } from "react";

export function MenuItem({
    children,
    name,
    href,
}: Readonly<{
    children?: React.ReactNode;
    name: string;
    href: string;
}>) {
    const [folderIsOpen, setMenuState] = useState(false);
    function toggleFolder() {
        setMenuState(!folderIsOpen);
    }

    return (
        <div className={`menuItem`}>
            <div className="menuItemDisplay">
                <a href={href}>{name}</a>
                {children ? (
                    <img
                        className="menuExpander"
                        src={
                            folderIsOpen
                                ? "/Icons/arrowUp.svg"
                                : "/Icons/arrowDown.svg"
                        }
                        onClick={toggleFolder}
                    />
                ) : (
                    <></>
                )}
            </div>
            {children ? (
                <div
                    className={`folderContent ${folderIsOpen ? "" : "hidden"}`}
                >
                    {children}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
