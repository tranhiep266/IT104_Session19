import React, {type ChangeEvent, useState} from "react";

const OPTIONS = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

const Ex8: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const checked = e.target.checked;

        setSelected((prev) =>
            checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
    };

    return (
        <div style={{textAlign: "center", marginTop: 30}}>
            <p>
                Sở thích:{" "}
                <strong>
                    [{selected.map((item, i) => (
                    <span key={i}>
                        {item}
                        {i < selected.length - 1 && ", "}
                    </span>))}]
                </strong>
            </p>

            {OPTIONS.map((opt) => (
                <label key={opt} style={{display: "block", cursor: "pointer"}}>
                    <input
                        type="checkbox"
                        value={opt}
                        checked={selected.includes(opt)}
                        onChange={handleChange}
                        style={{marginRight: 8}}
                    />
                    {opt}
                </label>
            ))}
        </div>
    );
};

export default Ex8;