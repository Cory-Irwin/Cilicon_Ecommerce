import { useState, useEffect } from 'react';

// Define your product interface
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    isActive: boolean;
    tagText: string;
    linkUrl: string;
    discount: number;
    reviewStars: number;
    reviewCount: number;
    percentageDiscount: number;
}

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch('http://localhost:5044/api/products')
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .then(() => setLoading(false))
            .catch((err) => {
                console.error(err);
                setError(err);
                setLoading(false);
            });
    }, []);

    return { products, loading, error };
}
