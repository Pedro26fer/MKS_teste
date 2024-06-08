
import { Cart } from "../components/Cart/cart";
import HeaderPage from "../components/Header/header";
import Products from "../components/ProductList/productList";

export default function Home() {
  return (
    <>
      <HeaderPage/>
      <Products orderBy="ASC" page={1} rows={10} sortBy="name" />
      <Cart/>
    </>
  );
}
