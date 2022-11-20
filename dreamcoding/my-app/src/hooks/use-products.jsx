import { useEffect, useState } from "react";

// 커스텀 훅은 개별적으로 만들어지고, 로직의 재사용이기 때문
export default function useProducts ({salesOnly}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly? 'sale_':''}products.json`)
        .then(res => res.json())
        .then(data => {
            console.log('🔥 new data');
            setProducts(data);
        })
        .catch(e=>setError('에러가 발생했음'))
        .finally(()=>setLoading(false));

        return ()=>{
            console.log('🧹 깨긋하게 청소하는 일들을 합니다.');
        }
    }, [salesOnly]);

    return [loading, error, products];
}