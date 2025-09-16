import { useEffect, useState } from "react";
import {getAllProduct, type Product} from "../api/Ex2.ts";

export default function ProductList() {
    const [data, setData] = useState<Product[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const products = await getAllProduct();
                console.log("Danh sách sản phẩm:", products);
                setData(products);
            } catch (e) {
                setError("Lỗi");
            }
        })();
    }, []);

    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <main style={{ margin: "24px auto", padding: "0 16px" }}>
            <h1>Danh sách sản phẩm</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {data.map((p) => (
                    <li
                        key={p.id}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            borderBottom: "1px solid #ccc",
                            padding: "8px 0",
                        }}
                    >
                        <img
                            src={p.image}
                            alt={p.product_name}
                        />
                        <div style={{ flex: 1 }}>
                            <strong>{p.product_name}</strong>
                            <div>Số lượng: {p.quantity}</div>
                        </div>
                        <div style={{ fontWeight: 700 }}>
                            {p.price.toLocaleString("vi-VN")} đ
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}