import CategoriesMainAdvertCard from "../categoriesMainAdvertCard";

export default function ComputerLaptopMenu() {
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
