import CategoriesMainAdvertCard from "../categoriesMainAdvertCard";

type FeaturedProductsDropDownProps = {
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  Availability: string;
  brand: string;
  Category: string;
  reviewStars?: number;
  ratingStars?: number;
  sku: string;
  feedback: number;
  reviewCount: number;
};

export default function FeaturedProductsMenu(props: FeaturedProductsDropDownProps) {
    return (
        <div className="flex justify-between">
            <div className="">
                <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100">PCs</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Laptops</li>
                    <li className="px-4 py-2 hover:bg-gray-100">All in Ones</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2 justify-center ">
                <h1>ur mom</h1>
            </div>
            <div>
                <CategoriesMainAdvertCard />
            </div>
        </div>
    )
}
