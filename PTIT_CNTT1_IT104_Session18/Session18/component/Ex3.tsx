// @ts-ignore
import React,{ useState } from 'react';

const Ex3 = () => {
    const [isRed, setIsRed] = useState(false);
    const toggleColor = () => setIsRed(prev => !prev);

    return (
        <div style={{textAlign:"center",marginTop:20}}>
            <h2 style={{ color: isRed ? "#e74c3c" : "white" }}>
                Tiêu đề văn bản
            </h2>

            <button
                onClick={toggleColor}
                style={{
                    marginTop: 16,
                    padding: "18px 18px",
                    borderRadius: 8,
                    border: "1px solid #ddd",
                    background: "white",
                }}
            >
                Thay đổi màu
            </button>
        </div>
    );
};

export default Ex3;