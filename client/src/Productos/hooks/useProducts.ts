import { useEffect, useState } from 'react';
import { IUseProductArgs } from '../interfaces/IUseProductArgs';


export const useProduct = ( {onChange, product, value=0}: IUseProductArgs ) =>{
    const [counter, setCounter] = useState(value);
    
    const increaseBy = (value:number) => {

        const newValue = Math.max(counter + value,0)
        setCounter(newValue);

        onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
    setCounter(value);
    }, [value])


    return {
        counter,
        increaseBy
    }
}