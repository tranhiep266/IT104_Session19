// @ts-ignore
import React, { useEffect, useState } from "react";

export default function Ex6() {
    const [lastKey, setLastKey] = useState<string>("");

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key === " " ? "Space" : e.key;
            setLastKey(key);
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div
            style={{
                minHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,}}
        >
            <div
                style={{
                    border: "2px dashed #9ca3af",
                    borderRadius: 12,
                    padding: "28px 36px",
                    fontSize: 48,
                    fontWeight: 700,
                    letterSpacing: 2,
                    background: "#f9fafb",
                    color:"#000000",
                    minWidth: 160,
                    textAlign: "center",
                }}
            >
                {lastKey ? lastKey.toUpperCase() : "—"}
            </div>
        </div>
    );
}