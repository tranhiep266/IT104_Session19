// @ts-ignore
import React, { useState, ChangeEvent } from "react";

const Ex7 = () => {
    const [city, setCity] = useState("");

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);
    };

    return (
        <div style={{ textAlign: "center", marginTop: 30 }}>
            <label style={{ marginRight: 10, fontWeight: 500 }}>
                Thành phố:
            </label>
            <select
                id="city"
                value={city}
                onChange={handleChange}
                style={{
                    padding: "6px 12px",
                    border: "1px solid #ccc",
                    borderRadius: 6,
                }}
            >
                <option value="">-- Chọn thành phố --</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hà Nam">Hà Nam</option>
                <option value="Ninh Bình">Ninh Bình</option>
                <option value="Thanh Hóa">Thanh Hóa</option>
                <option value="Nghệ An">Nghệ An</option>
            </select>

            {city && (
                <h3 style={{ marginTop: 20 }}>
                    Thành phố: {city}
                </h3>
            )}
        </div>
    );
};

export default Ex7;