import { Outlet } from "react-router-dom";
import Header from "../Components/HomePage/Header/Header";
import Footer from "../Components/HomePage/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}