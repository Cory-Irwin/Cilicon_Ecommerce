import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Add routing as needed
import StarRating from "../../Components/RatingStars/fiveStarRating";
import Heart from "../../assets/bigBestDealProductCard/Heart.svg";
import Eyes from "../../assets/bestdeals/Eye.svg";
import Shopping from "../../assets/bestdeals/ShoppingCartSimple.svg";

interface Product {
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

interface CatProductCardsProps {
    productList?: Product[];
}

const CatProductCards = ({ productList }: CatProductCardsProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const BACKEND_URL = "http://localhost:5044";

    useEffect(() => {
        // Only fetch if a productList wasn't passed as a prop from the parent
        if (!productList) {
            fetch(`${BACKEND_URL}/api/products`)
                .then((res) => res.json())
                .then((data) => setProducts(data))
                .catch((err) => console.error(err));
        }
    }, [productList]);

    // Use the passed-in prop products, or fallback to the fetched ones
    const displayProducts = productList || products;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-4">
            {displayProducts.map((product) => (
                <div key={product.id} className="relative p-2 text-sm border-2 border-gray-200 bg-white flex flex-col h-full justify-between">
                    {/* Product Image */}
                    <div className="flex items-center p-2 justify-center flex-grow">
                        <img
                            src={`${BACKEND_URL}${product.imageUrl.startsWith('/') ? '' : '/'}${product.imageUrl}`}
                            alt={product.name}
                            className="h-40 object-contain"
                        />
                    </div>

                    {/* Reviews */}
                    <div className="flex p-1 px-2 flex-row gap-2 items-center">
                        <p className="text-gray-400 text-sm">({product.reviewCount || 0})</p>
                    </div>

                    {/* Product Name */}
                    <div className="p-1 px-2 flex-grow">
                        <p className="line-clamp-3">{product.name}</p>
                    </div>

                    {/* Price */}
                    <div className="p-1 px-2">
                        <h1 className="text-xl text-green-900 font-semibold">
                            ${product.price}
                        </h1>
                    </div>

                    {/* Action Buttons */}
                    <div className="my-2 flex justify-center">
                        {/* ... your button UI ... */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CatProductCards;
