import { useState } from "react"; 
import { IProduct } from "../interfaces/IProductCardProps";
import { IProductInCard } from "../interfaces/IProductInCart";

export const useShoppingCart = () =>{

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: IProductInCard}>({});

    const onProductCountChange = ({count, product}:{count:number, product:IProduct}) => {
        setShoppingCart( oldShoppingCart => {

            if(count===0){
                const { [product.id]: toDelete, ...rest} = oldShoppingCart;
                return rest;
            }

            return{
                ...oldShoppingCart,
                [product.id]: {...product, count}
            }

        })
    }

    return{
        shoppingCart,
        onProductCountChange,
    }
}

