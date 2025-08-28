// @ts-ignore
import React, { useState } from "react";

const QUOTES = [
    "Rikkei Academy",
    "Thất bại là mẹ thành công",
    "RikkeiSoft",
];

export default function Ex5() {
    const [quote, setQuote] = useState<string>(QUOTES[0]);

    const pickRandom = () => {
        const idx = Math.floor(Math.random() * QUOTES.length);
        setQuote(QUOTES[idx]);
    };

    return (
        <div
            style={{
                maxWidth: 520,
                margin: "24px auto",
                padding: 24,
                borderRadius: 12,
                border: "1px solid #e5e7eb",
                textAlign: "center",
            }}
        >
            <h2 style={{ marginBottom: 12 }}>Câu nói truyền cảm hứng hôm nay:</h2>
            <blockquote style={{ fontSize: 20, fontStyle: "italic", margin: "12px 0" }}>
                “{quote}”
            </blockquote>

            <button
                onClick={pickRandom}
                style={{
                    marginTop: 12,
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: 8,
                    background: "#2563eb",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                Lấy câu nói mới
            </button>
        </div>
    );
}