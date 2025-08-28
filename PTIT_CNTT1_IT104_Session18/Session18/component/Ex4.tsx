// @ts-ignore
import React,{ useState } from 'react';

const Ex4 = () => {
    const [hide, setHide] = useState(false);
    const handleToggle = () => {
        setHide(!hide);
    };

    return (
        <div style={{textAlign:"center",marginTop:20}}>
            <button
                onClick={handleToggle}
                style={{
                    padding: "6px 14px",
                    border: "1px solid #ccc",
                    borderRadius: 6,
                    background: "#fff",
                }}
            >
                {hide ? "Ẩn" : "Hiện"}
            </button>

            {hide && <h3 style={{ marginTop: 20 }}>Tiêu đề văn bản</h3>}
        </div>
    );
};

export default Ex4;