import Flashcard from "../../ProductCards/flashcardFlashSale";
import MousePad from "../../../assets/misc/Mousepad.png";
import Headphones from "../../../assets/misc/headphones.png";
import Smartphone from "../../../assets/misc/iphone.png";
import Mice from "../../../assets/misc/Mice.png";
import Ultrawide from "../../../assets/misc/ultrawide.png";
import Keyboard from "../../../assets/misc/keyboard.png";

export const Flashsale = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20 p-4">
      <div className="grid grid-col-1 grid-rows-1 lg:grid-cols-4 lg:grid-rows-[30%_1f_1fr_1fr] gap-4">
        <div className="grid-cols-1 grid ">
        <div className="">
            <h1 className=" ">FLASH SALE TODAY</h1>
          </div>
           <div className=" col-span-2  lg:col-start-1 lg:row-start-2">
            <Flashcard
              imageurl={Ultrawide}
              name='Samsung Odyssey G9 49" Curved Monitor'
              description="Dual QHD with 240Hz refresh rate."
              price={1099.99}
            />
          </div>
          <div className="col-span-2  lg:col-start-1 lg:row-start-3">
            <Flashcard
              imageurl={Ultrawide}
              name='Samsung Odyssey G9 49" Curved Monitor'
              description="Dual QHD with 240Hz refresh rate."
              price={1099.99}
            />
          </div>
          <div className="col-span-2  lg:col-start-1 lg:row-start-4">
            <Flashcard
              imageurl={Mice}
              name="Logitech G Pro X Superlight"
              description="Ultra-lightweight wireless gaming mouse."
              price={129.99}
            />
        </div>
        
        </div>
        <div>
        <div className="lg:col-start-2 lg:row-start-1">
          <h1 className=" ">BEST SELLERS</h1>
        </div>
        <div className="lg:col-start-2 lg:row-start-2">
          <Flashcard
            imageurl={Mice}
            name="Logitech G Pro X Superlight"
            description="Ultra-lightweight wireless gaming mouse."
            price={129.99}
          />
        </div>
        <div className="lg:col-start-2 lg:row-start-3">
          <Flashcard
            imageurl={Headphones}
            name="Sony WH-1000XM5 Headphones"
            description="Industry-leading noise cancellation."
            price={349.99}
          />
        </div>{" "}
        <div className="lg:col-start-2 lg:row-start-4">
          <Flashcard
            imageurl={Mice}
            name="Logitech G Pro X Superlight"
            description="Ultra-lightweight wireless gaming mouse."
            price={129.99}
          />
        </div>
        </div>
        <div>
        <div className="lg:col-start-3 lg:row-start-1">
          <h1 className=" ">TOP RATED</h1>
        </div>
        <div className="lg:col-start-3 lg:row-start-2">
          <Flashcard
            imageurl={Smartphone}
            name="Samsung Galaxy S21 5G"
            description="8K video, 120Hz AMOLED, 64MP camera."
            price={799.99}
          />
        </div>
        <div className="lg:col-start-3 lg:row-start-3">
          <Flashcard
            imageurl={Keyboard}
            name="Razer Huntsman V2"
            description="Optical switches, ultra-fast response."
            price={14.99}
          />
        </div>
        <div className="lg:col-start-3 lg:row-start-4">
          <Flashcard
            imageurl={MousePad}
            name="SteelSeries QcK Prism XL"
            description="RGB-illuminated extra-large mousepad."
            price={59.99}
          />
        </div>
        </div>
        <div>
        <div className="lg:col-start-4 lg:row-start-1">
          <h1 className=" ">NEW ARRIVALS</h1>
        </div>
        <div className="lg:col-start-4 lg:row-start-2">
          <Flashcard
            imageurl={Ultrawide}
            name='LG 34" UltraGear QHD Monitor'
            description="Curved 160Hz display for immersive gaming."
            price={499.99}
          />
        </div>
        <div className="lg:col-start-4 lg:row-start-3">
          <Flashcard
            imageurl={Smartphone}
            name="iPhone 14 Pro"
            description="A16 Bionic, ProMotion, Dynamic Island."
            price={99.99}
          />
        </div>
        <div>
          <Flashcard
            imageurl={Headphones}
            name="Bose QuietComfort 45"
            description="High-fidelity audio with ANC."
            price={329.99}
          />
        </div>
        </div>
      </div>
    </div>

  );
};

export default Flashsale;
