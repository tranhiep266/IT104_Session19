// @ts-ignore
import React, { useState, ChangeEvent } from "react";

const Ex6 = () => {
    const [text, setText] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
    const charCount = text.length;
    return (
        <div style={{ textAlign: "center", marginTop: 20 }}>
            <input
                type="text"
                placeholder="Nhập nội dung"
                value={text}
                onChange={handleChange}
                style={{
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    borderRadius: 6,
                    marginBottom: 12,
                    width: 200,
                }}
            />
            <p>Số ký tự: {charCount}</p>
        </div>
    );
};

export default Ex6;