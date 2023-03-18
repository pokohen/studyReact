import React from 'react';
import { useState } from 'react';
import Products from './basic/components/Products';
import {useQueryClient} from "react-query";

export default function AppProducts() {
    
    const [showProducts, setShowProducts] = useState(true);
    const client = useQueryClient();
    
    return (
        <div>
            {showProducts && <Products />}
            <button onClick={()=> setShowProducts((show) => !show)}>Toggle</button>
            <button onClick={()=>{
                client.invalidateQueries(['products', false]).then(r => {
                    console.log(r)
                });
            } }>
                정보가 업데이트 되었음
            </button>
        </div>
    );
}