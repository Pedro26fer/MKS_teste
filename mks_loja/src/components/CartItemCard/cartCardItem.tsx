import Image from "next/image"
import { RxDividerVertical } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CartItemCardStyled } from "./carItemCardStyle";
import { theme } from "@/src/styles/theme";
import { IoCloseCircle } from "react-icons/io5";
import { useContext } from "react";
import { CarContext } from "@/src/contexts/Cart";

type PropsCarCard = {
    photo: string
    name: string
    qtd: number
    price: number
    id: number
}

export const CardCartItem = ({photo, name, qtd, price, id} : PropsCarCard) => {

    const {removeProduct, addProduct} = useContext(CarContext)

    const handleDeleteProduct = (id: number) => {
        if(removeProduct){
            removeProduct(id)
        }
    }

    const handleAddProduct = (id: number) => {
        if(addProduct){
            addProduct(id)
        }
    }

    return(
        <CartItemCardStyled>
            <section>
                <figure>
                    <Image src={photo} alt="Product Image" width={190} height={0}></Image>
                </figure>
                <p>{name}</p>
            </section>
            <div>
                <span>Qtd:</span>
                <article>
                    <FaPlus onClick={() => handleAddProduct(id)} size={11}/>
                    <RxDividerVertical color={theme.colors.footerBackGround}/>
                    {qtd}
                    <RxDividerVertical color={theme.colors.footerBackGround}/>
                    <FaMinus onClick={() => handleDeleteProduct(id)} size={11}/>
                </article>
            </div>
            <p className="preco">R${Math.round(price)}</p>
            <IoCloseCircle onClick={() => handleDeleteProduct(id)} className="delete_product_button" size={22}/>
        </CartItemCardStyled>
    )
}