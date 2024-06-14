import { CarContext } from "@/src/contexts/Cart";
import { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { HeaderStyled } from "./headerStyle";

const HeaderPage = () => {
  const { car, setIsVisibleCart } = useContext(CarContext);

  let qutyInCar = 0;

  const handleOpenCart = () => {
    if(setIsVisibleCart){
      setIsVisibleCart(true)
    }
  }
 

  if (car) {
    for (let c = 0; c < car.length; c++) {
      qutyInCar += car[c].quantity;
    }
  }

  return (
    <HeaderStyled>
      <h1>
        MKS <span>Sistemas</span>
      </h1>
      <button onClick={() => handleOpenCart()} name="Shopping" type="button">
        <FaCartShopping />
        {qutyInCar}
      </button>
    </HeaderStyled>
  );
};

export default HeaderPage;
