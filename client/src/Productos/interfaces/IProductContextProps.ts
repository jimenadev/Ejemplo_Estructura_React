import { IProduct } from "./IProductCardProps";

export interface IProductContextProps{
    counter:number;
    product: IProduct;
    increaseBy: (value:number) => void;
}