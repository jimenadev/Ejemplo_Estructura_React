import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'
import { IProductButtonsProps } from '../interfaces/IProductButtonsProps';

export const ProductButtons = ({className, style}: IProductButtonsProps) =>{

    const { counter, increaseBy} = useContext(ProductContext);

    return (
        <div className={ `${styles.buttonsContainer} ${className}` }
            style={style}
        >
        <button className={ styles.buttonMinus}
                onClick={() => increaseBy(-1)}>-</button>

        <div className={ styles.countLabel }>{counter}</div>

        <button className={ styles.buttonAdd  }
                onClick={() => increaseBy(1)}>+</button>
    </div>
    )
}