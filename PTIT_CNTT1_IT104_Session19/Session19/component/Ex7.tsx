// @ts-ignore
import React, { useRef } from "react";

export default function Ex7() {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const filler = (
        <p style={{
            lineHeight: 1.8,
            color:"#000000"
        }}>
            RikkeiAcademy
        </p>
    );

    return (
        <div style={{ fontFamily: "system-ui, sans-serif" }}>
            <section
                style={{
                    padding: "56px 16px",
                    background: "#1d4ed8",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: 40, marginBottom: 16 }}> Cuộn tới nội dung</h1>
                <button
                    onClick={handleScroll}
                    style={{
                        background: "white",
                        color: "#1d4ed8",
                        border: "none",
                        borderRadius: 10,
                        padding: "10px 16px",
                        fontWeight: 600,
                        cursor: "pointer",
                    }}
                >
                    Đi tới phần nội dung
                </button>
            </section>

            <section style={{ padding: 24, background: "#f3f4f6" }}>
                {filler}
                {filler}
                {filler}
                {filler}
                {filler}
                {filler}
                {filler}
                {filler}
                {filler}
                {filler}
            </section>

            <section
                ref={targetRef}
                style={{
                    padding: 32,
                    margin: "24px auto",
                    maxWidth: 720,
                    background: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: 12,
                }}
            >
                <h2 style={{color:"#000000"}}> RikkeiSoft</h2>
            </section>
        </div>
    );
}