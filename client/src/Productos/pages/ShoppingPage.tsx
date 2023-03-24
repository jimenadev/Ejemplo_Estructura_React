import  { ProductButtons, ProductCard, ProductImage, ProductTitle}  from '../components';
import  '../styles/custom-styles.css';
import { useShoppingCart } from '../hooks/useShoppingCart';
import {  useQuery } from '@apollo/client';
import { OBTENER_PRODUCTO } from '../models/queries/QProductos';
import { IProduct } from '../interfaces/IProductCardProps';



export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange} = useShoppingCart();

    const { data } = useQuery(OBTENER_PRODUCTO);

    const  products:IProduct[] = data?.products || [];

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>


           {
            products.map(product => (
                <ProductCard  
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    onChange={ onProductCountChange }
                    value={ shoppingCart[product.id]?.count || 0 }
                    >
                    <ProductImage className="custom-image"/>

                    <ProductTitle className="text-bold"/>

                    <ProductButtons  className="custom-buttons" />    
                </ProductCard>
            ))
            }
           
        </div>
        <div className='shopping-cart'>

            {
                Object.entries( shoppingCart ).map( ([key, product]) =>(
                    
                    <ProductCard 
                        key={key} 
                        product={product}
                        className="bg-dark text-white"
                        style={{width:'100px'}}
                        value={product.count}
                        onChange={onProductCountChange}
                        >
                        <ProductImage className="custom-image"/>
                        <ProductButtons  className="custom-buttons" 
                                        style={{
                                            display:'flex',
                                            justifyContent: 'center'
                                        }}/>    
                    </ProductCard>

                ))
            }
                
        </div>

     </div>
    )
}