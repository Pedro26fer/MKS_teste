import { useContext } from "react";
import Image from "next/image";
import { CarContext } from "@/src/contexts/Cart";
import { CartItem } from "@/src/interfaces/CartItem.interface";
import { CardCartItem } from "../CartItemCard/cartCardItem";
import { CartStyled } from "./cartStyle";

export const Cart = () => {
  const { car, removeProduct, calulateTotalPrice } = useContext(CarContext);

  if (!car || car.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  if (!calulateTotalPrice) {
    return <p>Calculando o preço total...</p>;
  }

  return (
    <CartStyled>
      <div>
        <h2>Carrinho de compras</h2>
        <button>
          <Image src="/Close_cart.svg" alt="Close" width={37} height={40} ></Image>
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
            />
          </li>
        ))}
      </ul>
      <div>
        <h2>Total:</h2>
        <p>R${Math.round(calulateTotalPrice())}</p>
      </div>
      <button>Finalizar Compra</button>
    </CartStyled>
  );
};
