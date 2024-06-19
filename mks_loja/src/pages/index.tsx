
import { useContext } from "react";
import { Cart } from "../components/Cart/cart";
import HeaderPage from "../components/Header/header";
import Products from "../components/ProductList/productList";
import { CarContext } from "../contexts/Cart";
import Footer from "../components/Footer/footer";

export default function Home() {

  const {isVisibleCart} = useContext(CarContext)

  return (
    <>
      <HeaderPage/>
      <Products orderBy="ASC" page={1} rows={10} sortBy="name" />
      {isVisibleCart && (
          <Cart/>
      )}
      <Footer/>
    </>
  );
}
