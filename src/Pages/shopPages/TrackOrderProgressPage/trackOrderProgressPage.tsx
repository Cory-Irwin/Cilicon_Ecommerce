import React from "react";
import Header from "../../../Components/HomePage/Header/Header";
import TrackOrderProgressComponent from "../TrackOrderProgressPage/trackOrderProgressPageComponent";
import BlackFriday from "../../../Components/HomePage/BlackFriday/BlackFriday";
import Categories from "../../../Components/HomePage/Categories/Categories";
import Footer from "../../../Components/HomePage/Footer/Footer";
const TrackOrder = () => {
  return (
    <>
      <BlackFriday />
      <Header />
      <Categories />
      <TrackOrderProgressComponent productHash={"784765947"}
       productQuantity={4} dateDay={"12"} dateMonth={"Dec"} 
       dateYear={""} orderExpectedDay={0} orderExpectedMonth={0} 
       orderExpectedYear={0} totalAmmount={1299.99} timeOrdered={"12:42PM"}/>
      <Footer />
    </>
  );
};

export default TrackOrder;
