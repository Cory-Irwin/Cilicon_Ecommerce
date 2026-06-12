import React from 'react';
import PS5 from '../../assets/bigBestDealProductCard/Image.svg';
import Heart from '../../assets/bigBestDealProductCard/Heart.svg';
import Eyes from '../../assets/bestdeals/Eye.svg';
import Shopping from '../../assets/bestdeals/ShoppingCartSimple.svg';
import StarRating from '../../Components/RatingStars/fiveStarRating';

interface Product {
    name: string;
    price: number;
    percentageDiscount?: number;
    imageUrl: string; // Ensure the API actually provides this exact property
}

interface BigBestDealProductCardProps {
    reviewCount: number;
    product: Product | null;
}

const BigBestDealProductCard = ({ reviewCount, product }: BigBestDealProductCardProps) => {
    if (!product) return <div>No product found.</div>;

    const discount = product.percentageDiscount || 20;

    return (
        <div className="lg:h-auto h-auto flex  flex-row lg:flex-col">
            <div className="flex flex-col lg:flex-row w-full p-4 relative ">

                {/* Left side: Images and Badges */}
                <div className="flex flex-col text-center font-bold gap-3 relative">
                    <div className="bg-yellow-400 p-2 w-20">
                        <h1>{discount}% Off</h1>
                    </div>
                    <div className="bg-red-500 w-15 flex flex-col p-2">
                        <h1 className="text-white text-sm">HOT</h1>
                    </div>
                    <div className="size-auto">
                        {/* Fixed: Use ternary to check for empty strings or missing API images before applying fallback PS5 image */}
                        <img
                            src={product.imageUrl ? `http://localhost:5044${product.imageUrl}` : PS5}
                            alt={product.name || "Product"}
                        />
`
                    </div>
                </div>

                {/* Right side: Details */}
                <div className="flex flex-col flex-1 p-4 justify-between">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <span className="text-lg font-bold text-gray-800">${product.price}</span>

                            <div className="flex items-center mt-2">
                                <StarRating rating={5} />
                                <span className="text-gray-500 text-xs ml-2">({reviewCount} reviews)</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <img src={Heart} alt="Wishlist" className="w-6 h-6 cursor-pointer" />
                        <img src={Eyes} alt="Quick View" className="w-6 h-6 cursor-pointer" />
                        <img src={Shopping} alt="Add to Cart" className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BigBestDealProductCard;
