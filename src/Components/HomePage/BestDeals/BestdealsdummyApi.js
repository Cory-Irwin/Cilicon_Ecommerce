import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ProductCards from "../../ProductCards/CatProductCards";
import BigBestDealProductCard from "../../ProductCards/bigBestDealProductCard";
import { NavLink } from "react-router-dom";
const BestDeals = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://api.escuelajs.co/api/v1/products?categorySlug=electronics");
                const data = await response.json();
                // Add fake discount, rating, stock for demo purposes
                const enriched = data.map((product) => ({
                    ...product,
                    discountPercentage: Math.floor(Math.random() * 30) + 5, // 5-35%
                    rating: +(Math.random() * 5).toFixed(1), // 0.0-5.0 stars
                    stock: Math.floor(Math.random() * 500) + 50, // 50-549 items
                }));
                setProducts(enriched);
            }
            catch (error) {
                console.error("Failed to fetch products", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    if (loading)
        return _jsx("div", { className: "p-4", children: "Loading Best Deals..." });
    if (!products.length)
        return _jsx("div", { className: "p-4", children: "No products found." });
    const bigDeal = products[0];
    const otherDeals = products.slice(1);
    return (_jsx("div", { className: "mx-auto max-w-screen-xl my-10 px-4", children: _jsxs("section", { className: "w-full bg-white left-0 z-40", children: [_jsxs("div", { className: "max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center", children: [_jsxs("div", { className: "p-2", children: [_jsx("h1", { className: "text-4xl font-semibold", children: "Best Deals" }), _jsx("h1", { children: "Deals end in 10 Days" })] }), _jsx("div", { children: _jsx(NavLink, { to: "/ComparePage", children: _jsx("span", { className: "hover:text-gray-400 cursor-pointer", children: "See more..." }) }) })] }), _jsxs("div", { className: "mx-auto flex-row flex w-full max-w-screen-xl", children: [_jsx("div", { className: "max-w-80 border-l-2 border-b-2 border-t-2 border-gray-200", children: _jsx(BigBestDealProductCard, { reviewStars: bigDeal.rating, reviewCount: bigDeal.stock, imageurl: bigDeal.images[0], name: bigDeal.title, description: bigDeal.description, price: bigDeal.price, percentageOff: bigDeal.discountPercentage.toString() }) }), _jsx("div", { className: "grid grid-cols-4 grid-rows-2 border-gray-200 border-2 flex-1 h-full", children: otherDeals.map((product, index) => (_jsx("div", { className: `border-gray-200 ${index < 4 ? "border-b-2" : ""} ${(index + 1) % 4 !== 0 ? "border-r-2" : ""}`, children: _jsx(ProductCards, { reviewStars: product.rating, reviewCount: product.stock, imageurl: product.images[0], name: product.title, price: product.price }) }, product.id))) })] })] }) }));
};
export default BestDeals;
