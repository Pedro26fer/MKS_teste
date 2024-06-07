import { ProductCartInterface } from "@/src/interfaces/ProductCart.interface"
import { useContext } from "react"
import { CarContext } from "@/src/contexts/Cart"
import Image from 'next/image'
import { ProductCardStyled } from "./productCardStyled"
import { LuShoppingBag } from "react-icons/lu";

const ProductCart = ({id, description, name, photo, price}: ProductCartInterface) => {


    const {addProduct} = useContext(CarContext)

    const handleAddProduct = (id: number) => {
        if (addProduct) {
            addProduct(id);
        }
    };

    
    return(
        <ProductCardStyled>
            <figure>
                <Image src={photo} alt={name} width={128} height={111}></Image>
            </figure>
            <section>
                <h3>{name}</h3>
                <div>R${Math.round(price)}</div>
            </section>
            <span>{description}</span>
            <button onClick={() => handleAddProduct(id)}><LuShoppingBag/> COMPRAR</button>
        </ProductCardStyled>
    )
}

export default ProductCart