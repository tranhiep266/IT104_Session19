// @ts-ignore
import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext.tsx";
import Header from "./HeaderTheme.tsx";
import Content from "./Content.tsx";

function Shell() {
    const { theme } = useContext(ThemeContext);

    const styles =
        theme === "light"
            ? { background: "#fff", color: "#111" }
            : { background: "#111", color: "#fff" };

    return (
        <div style={{ minHeight: "100vh", ...styles }}>
            <h1 style={{ padding: 16, margin: 0 }}>My Themed App</h1>
            <Header />
            <Content />
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <Shell />
        </ThemeProvider>
    );
}