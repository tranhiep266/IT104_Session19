// @ts-ignore
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Header() {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <header style={{ padding: 16 }}>
            <button onClick={toggleTheme} style={{ padding: "8px 12px", borderRadius: 8 }}>
                Toggle Theme
            </button>
        </header>
    );
}