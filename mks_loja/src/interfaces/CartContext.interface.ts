import { Dispatch, SetStateAction } from "react";
import { CartItem } from "./CartItem.interface";
import { Product } from "./Product.interface";

export interface CarContextInterface {
    car: CartItem[]
    setCar: Dispatch<SetStateAction<CartItem[]>>
    addProduct: ( idProduct: number) => void
    removeProduct: ( id: number) => void
    calulateTotalPrice: () => number
    isVisibleCart: boolean
    setIsVisibleCart: Dispatch<SetStateAction<boolean>>
}