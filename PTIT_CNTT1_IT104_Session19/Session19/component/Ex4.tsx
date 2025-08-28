import React, { useState, useEffect } from "react";

export default function Ex4() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
        const newErrors: { name?: string; email?: string } = {};

        if (!name.trim()) {
            newErrors.name = "Trường này là bắt buộc";
        }

        if (!email.trim()) {
            newErrors.email = "Trường này là bắt buộc";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Email không hợp lệ";
        }

        setErrors(newErrors);
        setIsValid(Object.keys(newErrors).length === 0);
    }, [name, email]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            alert("Gửi thành công!");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ maxWidth: 400, margin: "20px auto", fontFamily: "Arial" }}
        >
            <h2>Đăng ký thông tin</h2>

            <div style={{ marginBottom: 16 }}>
                <label>Họ tên</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập họ tên..."
                    style={{ width: "100%", padding: 8, marginTop: 4 }}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div style={{ marginBottom: 16 }}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                    style={{ width: "100%", padding: 8, marginTop: 4 }}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <button
                type="submit"
                disabled={!isValid}
                style={{
                    padding: "8px 16px",
                    background: isValid ? "blue" : "gray",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                }}
            >
                Gửi
            </button>
        </form>
    );
}