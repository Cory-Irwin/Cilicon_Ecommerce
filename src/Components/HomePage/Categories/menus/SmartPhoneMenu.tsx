import Flashcard from "../../../ProductCards/flashcardCategories";
import Smartphone from "../../../../assets/misc/iphone.png";
import CategoriesMainAdvertCard from "../../Categories/categoriesMainAdvertCard";
import ComputerLaptopMenu from "./ComputerLaptopMenu";
import { JSX } from "react/jsx-runtime";
import FeaturedProductsMenu from "./ComputerLaptopMenu";

const MenuCategories = [
  {
    title: "Computer & Laptop",
    menu: (
      <FeaturedProductsMenu
        name={""}
        price={0}
        originalPrice={0}
        discount={0}
        Availability={""}
        brand={""}
        Category={""}
        sku={""}
        feedback={0}
        reviewCount={0}
      />
    ),
  },
  // {
  //     title: "Computer & Laptop"
  //     menu
  // }
];
// Comments to do
// All
// Iphone
// Samsung
// RealMe
// Xiaomi
// Oppo
// Vivo
// OnePlus
// Huawei
// Infinix
// Tecno

type SmartPhoneMenuProps = {
  name: string;
};

export default function SmartPhoneMenu(props: SmartPhoneMenuProps) {
  function setActiveMenu(menu: JSX.Element): void {
    throw new Error("Function not implemented.");
  }
  return (
    <div className="grid  grid-cols-[200px_1fr_1fr]">
      <div className="">
        <ul className="flex p-2 flex-col">
          <ul className="flex flex-col">
            {/* this will read each object in the menu categories */}
            {MenuCategories.map((cat) => (
              <li
                key={cat.title}
                className="px-4 py-2 hover:bg-gray-100"
                onMouseOver={() => setActiveMenu(cat.menu)}
              >
                {cat.title}
              </li>
            ))}
          </ul>
        </ul>
      </div>
      <div className="">
        <div className="flex flex-col gap-4 pt-3 p-2 justify-center ">
          <h1 className="text-xl">Featured Products</h1>
          <div className="items-center flex gap-3 flex-col w-full ">
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
        </div>
      </div>

      <div className="h-full">
        <div className="p-4">
          <CategoriesMainAdvertCard />
        </div>
      </div>
    </div>
  );
}

{
  /* <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">All {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">Iphone {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">Samsung {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">RealMe {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">Xiaomi {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">Oppo {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">Vivo {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">OnePlus {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">Huawei {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">Infinix {props.name}</li>
                        <li className="px-4 text-gray-600 text-sm py-2 hover:bg-gray-100">Tecno {props.name}</li> */
}
