import {Product} from '@/src/interfaces/Product.interface'

export interface CartItem {
    product: Product;
    quantity: number;
}