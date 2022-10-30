import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Products() {

    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = ()=> setChecked((prev) => !prev)

    useEffect(()=>{
        fetch(`data/${checked? 'sale_':''}products.json`)
        .then(res => res.json())
        .then(data => {
            console.log('🔥 new data');
            setProducts(data);
        });

        return ()=>{
            console.log('🧹 깨긋하게 청소하는 일들을 합니다.');
        }
    }, [checked]);

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