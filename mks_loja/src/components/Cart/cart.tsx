import { useContext } from "react";
import Image from "next/image";
import { CarContext } from "@/src/contexts/Cart";
import { CartItem } from "@/src/interfaces/CartItem.interface";
import { CardCartItem } from "../CartItemCard/cartCardItem";
import { CartStyled } from "./cartStyle";
import { motion, AnimatePresence } from "framer-motion";

export const Cart = () => {
  const {
    car,
    removeProduct,
    calulateTotalPrice,
    isVisibleCart,
    setIsVisibleCart,
  } = useContext(CarContext);

  const handleCloseCart = () => {
    if (setIsVisibleCart) {
      setIsVisibleCart(false);
    }
  };

  if (!car) {
    return <p>Seu carrinho está vazio.</p>;
  }

  if (!calulateTotalPrice) {
    return <p>Calculando o preço total...</p>;
  }

  return (
    <AnimatePresence>
      {isVisibleCart && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 28 }}
          exit={{ width: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <CartStyled>
            <div className="div_cart">
              <h2>Carrinho de compras</h2>
              <button onClick={() => handleCloseCart()}>
                <Image
                  src="/Close_cart.svg"
                  alt="Close"
                  width={37}
                  height={40}
                ></Image>
              </button>
            </div>
            <ul>
              {car.map((item: CartItem) => (
                <li key={item.product.id}>
                  <CardCartItem
                    name={item.product.name}
                    photo={item.product.photo}
                    price={item.product.price}
                    qtd={item.quantity}
                    id={item.product.id}
                  />
                </li>
              ))}
            </ul>
            <div className="total_buys">
              <h2>Total:</h2>
              <h3>R${Math.round(calulateTotalPrice())}</h3>
            </div>
            <button id="pay">Finalizar Compra</button>
          </CartStyled>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
