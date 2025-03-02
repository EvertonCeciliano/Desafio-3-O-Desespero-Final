import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { CompareFloat } from "../Components/CompareFloat/CompareFloat";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <CompareFloat />
    </div>
  );
}
