// @ts-ignore
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Content() {
    const { theme } = useContext(ThemeContext);

    return (
        <main style={{ padding: 24 }}>
            <p>Đây là phần nội dung chính của ứng dụng.</p>
            <p>
                Theme hiện tại: <b>{theme.toUpperCase()}</b>
            </p>
        </main>
    );
}