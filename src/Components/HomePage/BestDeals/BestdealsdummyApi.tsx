import React, { useEffect, useState } from "react";
import ProductCards from "../../ProductCards/CatProductCards";
import BigBestDealProductCard from "../../ProductCards/bigBestDealProductCard";
import { NavLink } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number; // Platzi API does not provide discountPercentage, so we will fake it
  rating: number;             // Platzi API doesn't have rating, fake it
  stock: number;              // Platzi API doesn't have stock, fake it
  brand: string;
  category: string;
  images: string[];           // images array, use images[0]
};

const BestDeals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products?categorySlug=electronics");
        const data: Product[] = await response.json();

        // Add fake discount, rating, stock for demo purposes
        const enriched = data.map((product) => ({
          ...product,
          discountPercentage: Math.floor(Math.random() * 30) + 5, // 5-35%
          rating: +(Math.random() * 5).toFixed(1),                // 0.0-5.0 stars
          stock: Math.floor(Math.random() * 500) + 50,            // 50-549 items
        }));

        setProducts(enriched);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="p-4">Loading Best Deals...</div>;

  if (!products.length) return <div className="p-4">No products found.</div>;

  const bigDeal = products[0];
  const otherDeals = products.slice(1);

  return (
    <div className="mx-auto max-w-screen-xl my-10 px-4">
      <section className="w-full bg-white left-0 z-40">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="p-2">
            <h1 className="text-4xl font-semibold">Best Deals</h1>
            <h1>Deals end in 10 Days</h1>
          </div>
          <div>
            <NavLink to="/ComparePage">
              <span className="hover:text-gray-400 cursor-pointer">See more...</span>
            </NavLink>
          </div>
        </div>

        <div className="mx-auto flex-row flex w-full max-w-screen-xl">
          {/* Big Deal Card */}
          <div className="max-w-80 border-l-2 border-b-2 border-t-2 border-gray-200">
            <BigBestDealProductCard
              reviewStars={bigDeal.rating}
              reviewCount={bigDeal.stock}
              imageurl={bigDeal.images[0]}
              name={bigDeal.title}
              description={bigDeal.description}
              price={bigDeal.price}
              percentageOff={bigDeal.discountPercentage.toString()}
            />
          </div>

          {/* Grid of smaller deal cards */}
          <div className="grid grid-cols-4 grid-rows-2 border-gray-200 border-2 flex-1 h-full">
            {otherDeals.map((product, index) => (
              <div
                key={product.id}
                className={`border-gray-200 ${index < 4 ? "border-b-2" : ""} ${
                  (index + 1) % 4 !== 0 ? "border-r-2" : ""
                }`}
              >
                <ProductCards
                  reviewStars={product.rating}
                  reviewCount={product.stock}
                  imageurl={product.images[0]}
                  name={product.title}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BestDeals;
