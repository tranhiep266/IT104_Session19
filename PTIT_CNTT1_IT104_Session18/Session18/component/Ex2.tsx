// @ts-ignore
import React,{ useState } from 'react';

interface Product{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const Ex2 = () => {
    const [product] = useState<Product>({
        id: 1,
        name: "Coca cola",
        price: 1000,
        quantity: 10,
    });
    return (
        <div style={{textAlign:"center",marginTop:20}}>
            <h2 style={{ marginBottom: 12 }}>Thông tin sản phẩm</h2>
            <p><b>Id:</b> {product.id}</p>
            <p><b>Name:</b> {product.name}</p>
            <p><b>Price:</b> {product.price.toLocaleString()} $</p>
            <p><b>Quantity:</b> {product.quantity}</p>
        </div>
    );
};

export default Ex2;