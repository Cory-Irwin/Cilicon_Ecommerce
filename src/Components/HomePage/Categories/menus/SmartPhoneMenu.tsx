import Flashcard from "../../../ProductCards/flashcard";
import Smartphone from "../../../../assets/misc/iphone.png";
import CategoriesMainAdvertCard from "../../Categories/categoriesMainAdvertCard";

export default function SmartPhoneMenu() {
    return (
        <div className="grid  grid-cols-[200px_1fr_1fr]  ">

            <div className="  h-full">
                <div className="">
                    <ul className="flex p-2 flex-col 0 ">
                        <li className="px-4 py-2  hover:bg-gray-100">All</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Iphone</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Samsung</li>
                        <li className="px-4 py-2 hover:bg-gray-100">RealMe</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Xiaomi</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Oppo</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Vivo</li>
                        <li className="px-4 py-2 hover:bg-gray-100">OnePlus</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Huawei</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Infinix</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Tecno</li>
                    </ul>
                </div>
            </div>
            <div className="h-full">
                <div className="flex flex-col gap-10 p-2 justify-center ">
                    <h1 className="text-2xl">Featured Products</h1>
                    <div className="items-center flex flex-col w-full hover:bg-gray-200">
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
                    /></div>
                </div>
            </div>
            <div className="  h-full">
                <div className="p-4">
                    <CategoriesMainAdvertCard />
                </div> </div>
            {/* 
                
            */}
        </div>
    )
}