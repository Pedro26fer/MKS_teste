import { CarContextInterface } from "@/src/interfaces/CartContext.interface";
import { CartItem } from "@/src/interfaces/CartItem.interface";
import { Product } from "@/src/interfaces/Product.interface";
import { createContext, useState } from "react";
import { fetchProducts } from "@/src/data";
import { QueryParams } from "@/src/interfaces/QueryParams.interface";
import { ProductCartInterface } from "@/src/interfaces/ProductCart.interface";


export const CarContext = createContext<Partial<CarContextInterface>>({});

export const CartProvider = ({ children }: any) => {
    const [car, setCar] = useState<CartItem[]>([]);


    const getProductById = async (id: number, queryParams: QueryParams): Promise<Product> => {
        const data = await fetchProducts({ queryKey: ['products', queryParams], meta: undefined });
        const product = data.products.find((product: ProductCartInterface) => product.id === id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    };

    const addProduct = async (productId: number) => {
        try {
            const queryParams: QueryParams = {
                page: 1,
                rows: 10,
                sortBy: 'name',
                orderBy: 'ASC'
            };
            
            const product = await getProductById(productId, queryParams);
            const productAlreadyExist = car.find((item: CartItem) => item.product.id === product.id);

            if (productAlreadyExist) {
                productAlreadyExist.quantity += 1;
                setCar([...car]); 
            } else {
                const newCar = [
                    {
                        product: product,
                        quantity: 1,
                    },
                    ...car,
                ];
                setCar(newCar);
            }
            console.log(car);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const removeProduct = (id: number) => {        
        const itemToRemove = car.find((item: CartItem) => item.product.id === id)
        if(itemToRemove){
            if(itemToRemove.quantity > 1){
                itemToRemove.quantity --
            }
            else{
                setCar(car.filter( (item: CartItem) => item.product.id !== id))
            }
        }
    }

    const calulateTotalPrice = () => {
        return (
            car.reduce((total: number, item: CartItem) => total + (item.product.price * item.quantity), 0)
        )
    }
    
    return (
        <CarContext.Provider value={{car,setCar, addProduct, removeProduct, calulateTotalPrice}}>
            {children}
        </CarContext.Provider>
    )
}

