import { ReactElement } from 'react';

export interface IProductCardProps {
    product: IProduct;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args:IOnChangeArgs) => void;
    value?:number;
}

export interface IProduct {
    id:string;
    title: string;
    img?:string;
}

export interface IOnChangeArgs{
    product:IProduct;
    count: number;
}