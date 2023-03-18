import React from 'react';
import { useState } from 'react';
// import useProducts from '../../hooks/use-products';
import {useQuery} from "react-query";

export default function Products() {

   
    const [checked, setChecked] = useState(false);
    // const [loading, error, products] = useProducts({salesOnly : checked});
    // 기본적인 react query 사용
    const {
        isLoading,
        error,
        data : products,
    } = useQuery(['products', checked], async () => {
        console.log('fetching data', checked)
        // react query는 queryKey를 잘 사용하고, 해당 부분을 통해 캐싱을 할 수 있다.
        return fetch(`data/${checked ? 'sale_' : ''}products.json`).then(res => res.json());
        },
{
            staleTime: 1000 * 60 * 5, // 5분
       }
    );
    const handleChange = ()=> setChecked((prev) => !prev);

    if(isLoading) return <p>Loading</p>
    if(error) return <p>Error</p>
    
    return (
        <>
            <input id='checkbox' type="checkbox" value={checked} onChange={handleChange} />
            <label htmlFor='checkbox'>Show sales</label>
            <ul>
                {products.map((product) => (
                    // 키 값으로 re-rendering 하는 부분을 구분한다. 그러므로 더욱 생산성을 높이기 위해서는 key은 필수
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