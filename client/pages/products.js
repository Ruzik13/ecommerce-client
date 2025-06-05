import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import ProductCard from "@/components/ProductCard"; 


const Title = styled.h1`
    margin-top: 100px;
    color: #fff;
    font-size: 1.5em;
`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

export default function ProductsPage({products}){
    return(
        <>
            <Header/>
            <Center>
                <Title>Все товары</Title>
                <ProductsGrid>
                    {products?.map(product=>(
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </ProductsGrid>
            </Center>
        </>
    )
}

export async function getServerSideProps(){
    const response = await fetch('http://localhost:3000/api/products/all');
    const products = await response.json();

    return{
        props:{
            products
        }
    };
}