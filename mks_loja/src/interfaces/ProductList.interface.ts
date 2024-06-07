import { Dispatch, SetStateAction } from "react";
import { Product } from "./Product.interface";



export interface ProductContextInterface {
    productList: Product[]
    setProductList: Dispatch<SetStateAction<Product[]>>
}