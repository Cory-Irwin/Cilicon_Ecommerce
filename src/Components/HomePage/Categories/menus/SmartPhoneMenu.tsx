import Flashcard from "../../../ProductCards/flashcard";
import Smartphone from "../../../../assets/misc/iphone.png";
import CategoriesMainAdvertCard from "../../Categories/categoriesMainAdvertCard";

export default function SmartPhoneMenu() {
    return (
        <div className="flex justify-between">
            <div className="">
                <ul className="flex flex-col">
                    <li className="px-4 py-2 hover:bg-gray-100">All</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Category 2</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Category 3</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2 justify-center ">
                <h1>Featured Products</h1>
                <Flashcard
                    imageurl={Smartphone}
                    name="Samsung Galaxy S21 5G"
                    description="8K video, 120Hz AMOLED, 64MP camera."
                    price={799.99}
                />
                <Flashcard
                    imageurl={Smartphone}
                    name="Samsung Galaxy S21 5G"
                    description="8K video, 120Hz AMOLED, 64MP camera."
                    price={799.99}
                />
                <Flashcard
                    imageurl={Smartphone}
                    name="Samsung Galaxy S21 5G"
                    description="8K video, 120Hz AMOLED, 64MP camera."
                    price={799.99}
                />
            </div>
            <div>
                <CategoriesMainAdvertCard />
            </div>
        </div>
    )
}