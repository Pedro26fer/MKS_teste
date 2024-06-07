import { CartProvider } from "./Cart";

const Providers = ({ children }: any) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers;
