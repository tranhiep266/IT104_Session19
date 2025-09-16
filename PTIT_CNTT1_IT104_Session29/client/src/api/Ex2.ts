export interface Product {
    id: number;
    product_name: string;
    image: string;
    price: number;
    quantity: number;
    created_at: string;
}

const BASE_URL = "http://localhost:3000";

export async function getAllProduct(): Promise<Product[]> {
    const res = await fetch(`${BASE_URL}/students`);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    const data: Product[] = await res.json();
    return data;
}