import Image from "next/image"
import { RxDividerVertical } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CartItemCardStyled } from "./carItemCardStyle";
import { theme } from "@/src/styles/theme";

type PropsCarCard = {
    photo: string
    name: string
    qtd: number
    price: number
}

export const CardCartItem = ({photo, name, qtd, price} : PropsCarCard) => {
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
                    <FaPlus size={11}/>
                    <RxDividerVertical color={theme.colors.footerBackGround}/>
                    {qtd}
                    <RxDividerVertical color={theme.colors.footerBackGround}/>
                    <FaMinus size={11}/>
                </article>
            </div>
            <p className="preco">R${Math.round(price)}</p>
        </CartItemCardStyled>
    )
}