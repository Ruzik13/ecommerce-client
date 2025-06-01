import styled from "styled-components"
import Center from "./Center";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Bg = styled.div`
    margin: 40px 0px;
    padding: 8px;
    background-color: #2c2c2c;
    color: #fff;
    border-radius: 12px;
    h2{
        padding: 0px 12px;
    }
`;

const CardArea=styled.div`
    width: auto;
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
`

export default function NewProducts(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('/api/products/latest')
            .then((res)=>res.json())
            .then((data)=>setProducts(data));
    }, [])
    return(
        <Center>
            <Bg>
                <h2>Новинки</h2>
                    <CardArea>
                        {products.map((product)=>(
                            <ProductCard key={product.id} product={product}/>
                        ))}
                        
                    </CardArea>
            </Bg>
        </Center>
    )
}