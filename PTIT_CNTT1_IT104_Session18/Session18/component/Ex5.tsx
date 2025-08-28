// @ts-ignore
import React, { useState } from "react";

const Ex5 = () => {
    const [title, setTitle] = useState("")

    return (
        <div style={{textAlign:"center",marginTop:20}}>
            <input
                type="text"
                placeholder="Nhập nội dung"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    padding: "8px 12px",
                    border: "1px solid #ccc",
                    borderRadius: 6,
                    marginBottom: 20,
                    width: 200,
                }}
            />
            {title && <h3>Đang nhập tiêu đề</h3>}
        </div>
    );
};

export default Ex5;