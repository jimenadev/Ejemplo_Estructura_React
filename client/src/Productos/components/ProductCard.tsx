import styles  from '../styles/styles.module.css';
import { createContext } from 'react';
import { useProduct } from '../hooks/useProducts';
import { IProductContextProps } from '../interfaces/IProductContextProps';
import { IProductCardProps  } from '../interfaces/IProductCardProps';


export const ProductContext = createContext({} as IProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({children,product, className, style, onChange, value}:IProductCardProps) =>{

    const { counter, increaseBy } = useProduct( {onChange, product, value} );
 
    return(
        <Provider value = {{
            counter,
            product,
            increaseBy
        }}>
            <div className={ `${styles.productCard} ${className}`  }
            style={style}
            >
            {children}
            </div>
        </Provider>
    )
}


