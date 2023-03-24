import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'
import { IProductTitleProps } from '../interfaces/IProductTitleProps';

export const ProductTitle = ({title, className, style}: IProductTitleProps) =>{

    const { product } = useContext(ProductContext);

    return(
        <span className={`${styles.productDescription} ${className}`}
                        style={style}>
            {title ? title : product.title }
        </span>
    )
}
