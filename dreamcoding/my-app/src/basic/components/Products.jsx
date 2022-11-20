import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {

   
    const [checked, setChecked] = useState(false);
    const [loading, error, products] = useProducts({salesOnly : checked});
    const handleChange = ()=> setChecked((prev) => !prev);

    if(loading) return <p>Loading</p>
    if(error) return <p>Error</p>
    
    return (
        <>
            <input id='checkbox' type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>Show salse</label>
            <ul>
                {products.map((product) => (
                    // 키 값으로 re-rendoring 하는 부분을 구분한다. 그러므로 더욱 생산성을 높이기 위해서는 key은 필수
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>  
        </>
    );
}