import { IProduct, IOnChangeArgs } from './IProductCardProps';

export interface IUseProductArgs{
    product: IProduct;
    onChange?: (args:IOnChangeArgs) => void;
    value?:number;
}