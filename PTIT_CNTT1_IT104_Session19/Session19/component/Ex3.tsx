// @ts-ignore
import React, { useState, useRef, useEffect } from "react";

export default function Ex3() {
    const [value, setValue] = useState("");
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current += 1;
    });

    return (
        <div style={{ padding: 20, fontFamily: "Arial" }}>
            <h2>Component Render Counter</h2>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Nhập gì đó..."
            />
            <p>Component đã render: {renderCount.current} lần</p>
        </div>
    );
}