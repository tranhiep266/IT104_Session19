// @ts-ignore
import React, { useMemo } from "react";

const cartItems = [
    { id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
    { id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 }
];

export default function ShoppingCart() {
    const total = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }, [cartItems]);

    return (
        <div>
            <h2>Giỏ hàng</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - Giá: {item.price.toLocaleString()}đ × {item.quantity}
                    </li>
                ))}
            </ul>
            <h3>
                Tổng giá trị đơn hàng: <span style={{ color: "red" }}>{total.toLocaleString()}đ</span>
            </h3>
        </div>
    );
}