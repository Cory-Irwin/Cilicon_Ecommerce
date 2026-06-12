import { NavLink } from 'react-router-dom';
import { useProducts } from '../../../hooks/useProduct.tsx';
import BigBestDealProductCard from '../../ProductCards/BigBestDealProductCard';
import ProductCards from '../../ProductCards/CatProductCards';

const Bestdeals = () => {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products.</p>;

    // Safely grab the first product for the Big Deal
    const bigDealProduct = products && products.length > 0 ? products[0] : null;
    // Safely grab the products for the grid (
    const gridProducts = products ? products.slice(0, 8) : [];

    return (
        <div className="mx-auto max-w-screen-xl my-10 px-4">
            <div className="mx-auto px-4 py-2 flex justify-between items-center">
                <div className="p-2">
                    <h1 className="text-4xl font-semibold">Best Deals</h1>
                    <h1>Deals end in 10 Days</h1>
                </div>
                <div>
                    {/* Added the 'end' prop to prevent active styling bleeding to child routes */}
                    <NavLink to="/ComparePage" className="hover:text-gray-400" end>
                        See more...
                    </NavLink>
                </div>
            </div>

            <div className="lg:flex gap-4  border-2 border-gray-200">
                {/* Big Deal Card */}
                <div className="w-full h-auto lg:w-1/3 ">
                    {bigDealProduct && (
                        <BigBestDealProductCard
                            reviewCount={0}
                            product={bigDealProduct}
                        />
                    )}
                </div>

                {/* Dynamic Product Cards Grid */}
                <div className="w-full lg:w-2/3">
                    <ProductCards productList={gridProducts} />
                </div>
            </div>
        </div>
    );
};

export default Bestdeals;
