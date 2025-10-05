import React from "react";
import Flashcard from "../../../Components/ProductCards/flashcard";
import Controller from "../../../assets/misc/controller.png";
import MousePad from "../../../assets/misc/Mousepad.png";
import Headphones from "../../../assets/misc/headphones.png";
import Smartphone from "../../../assets/misc/iphone.png";
import Mice from "../../../assets/misc/Mice.png";
import Ultrawide from "../../../assets/misc/ultrawide.png";
import Keyboard from "../../../assets/misc/keyboard.png";
import Charger from "../../../assets/misc/charger.png";

export const Flashsale = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-20 p-4">

      {/* Column 1 */}

      <div className="flex lg:flex-row gap-53 ">
        
        <div className="flex flex-row gap-43">
        <h1 className=" hidden lg:block">FLASH SALE TODAY</h1>
       
        
        <h1 className=" hidden lg:block">BEST SELLERS</h1>
       
        </div>
       
       
           <div className="flex flex-row gap-58">
        <h1 className=" hidden lg:block">TOP RATED</h1>
      
       
        <h1 className=" hidden lg:block">FLASH SALE TODAY</h1>
        </div>
      </div>

        <div>
            <h1 className="   lg:hidden">FLASH SALE TODAY</h1>
        </div>
      <div className="flex  flex-row  flex-wrap lg:flex-nowrap lg:gap-3 py-5">

      
        <div className="w-1/2 lg:w-1/4">

          <Flashcard
            imageurl={Ultrawide}
            name='Samsung Odyssey G9 49" Curved Monitor'
            description="Dual QHD with 240Hz refresh rate."
            price={1099.99}
          /></div>

        <div className="w-1/2 lg:w-1/4">
          <Flashcard
            imageurl={Headphones}
            name="Sony WH-1000XM5 Headphones"
            description="Industry-leading noise cancellation."
            price={349.99}
          /></div>
        <div className="w-1/2 lg:w-1/4">
          <Flashcard
            imageurl={Mice}
            name="Logitech G Pro X Superlight"
            description="Ultra-lightweight wireless gaming mouse."
            price={129.99}
          /> </div>
        <div className="w-1/2 lg:w-1/4">
          <Flashcard
            imageurl={Mice}
            name="Logitech G Pro X Superlight"
            description="Ultra-lightweight wireless gaming mouse."
            price={129.99}
          />

        </div>
      </div>
      {/* Column 2 */}
   <div>
            <h1 className="   lg:hidden">FLASH SALE TODAY</h1>
        </div>
      <div className="flex  flex-row  flex-wrap lg:flex-nowrap lg:gap-3 py-5">
        <div className="w-1/2 lg:w-1/4">
          <Flashcard
            imageurl={Mice}
            name="Logitech G Pro X Superlight"
            description="Ultra-lightweight wireless gaming mouse."
            price={129.99}
          /> </div>
        <div className="w-1/2 lg:w-1/4">
          <Flashcard
            imageurl={Smartphone}
            name="Samsung Galaxy S21 5G"
            description="8K video, 120Hz AMOLED, 64MP camera."
            price={799.99}
          />   </div>     <div className="w-1/2 lg:w-1/4">
          <Flashcard
            imageurl={Keyboard}
            name="Razer Huntsman V2"
            description="Optical switches, ultra-fast response."
            price={14.99}
          />    </div>    <div className="w-1/2 lg:w-1/4">
          <Flashcard
            imageurl={MousePad}
            name="SteelSeries QcK Prism XL"
            description="RGB-illuminated extra-large mousepad."
            price={59.99}
          />    </div>
      </div>
      {/* Column 3 */}
   <div>
            <h1 className="   lg:hidden">FLASH SALE TODAY</h1>
        </div>
      <div className="flex  flex-row  flex-wrap lg:flex-nowrap lg:gap-3 py-5">
        <div className="w-1/2 lg:1/4">
          <Flashcard
            imageurl={MousePad}
            name="SteelSeries QcK Prism XL"
            description="RGB-illuminated extra-large mousepad."
            price={59.99}
          />    </div>
        <div className="w-1/2 lg:1/4">
          <Flashcard
            imageurl={Controller}
            name="Xbox Series X Wireless Controller"

            description="Responsive triggers and textured grip."
            price={69.99}
          />       </div> <div className="w-1/2 lg:1/4">
          <Flashcard
            imageurl={Charger}
            name="Anker 737 GaN Prime Charger"
            description="100W fast charging for multiple devices."
            price={89.99}
          />      </div>  <div className="w-1/2 lg:1/4">
          <Flashcard
            imageurl={Ultrawide}
            name='LG 34" UltraGear QHD Monitor'
            description="Curved 160Hz display for immersive gaming."
            price={499.99}
          />
        </div>
      </div>
      {/* Column 4 */}
   <div>
            <h1 className="   lg:hidden">FLASH SALE TODAY</h1>
        </div>

      <div className="flex  flex-row  flex-wrap lg:flex-nowrap lg:gap-3 py-5">
        <div className="w-1/2 lg:1/4">
          <Flashcard
            imageurl={Ultrawide}
            name='LG 34" UltraGear QHD Monitor'
            description="Curved 160Hz display for immersive gaming."
            price={499.99}
          />
        </div>
        <div className="w-1/2 lg:1/4">
          <Flashcard
            imageurl={Smartphone}
            name="iPhone 14 Pro"
            description="A16 Bionic, ProMotion, Dynamic Island."
            price={99.99}
          />    </div>
        <div className="w-1/2 lg:1/4">
          <Flashcard
            imageurl={Headphones}
            name="Bose QuietComfort 45"
            description="High-fidelity audio with ANC."
            price={329.99}
          />
        </div>
        <div className="w-1/2 lg:1/4">
          <Flashcard
            imageurl={Keyboard}
            name="Keychron K6 Wireless Keyboard"
            description="Hot-swappable switches, Bluetooth 5.1."
            price={85.99}
          />
        </div>
      </div>
    </div>


  );
};

export default Flashsale;
