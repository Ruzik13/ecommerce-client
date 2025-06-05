import Center from "@/components/Center"
import Header from "@/components/Header"
import styled from "styled-components"
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";

const Title = styled.h1`
    color: #fff;
    font-size: 1.5em;
    margin-bottom: 20px;
`;

const Desription = styled.p`
    line-height: 1.6;
    font-weight: 300;

`;

const ColWrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    color: #fff;

    @media screen and (min-width: 768px){
        grid-template-columns: .8fr 1.2fr;
    }
`;

const Box = styled.div`
    color: white;
    padding: 28px;
    background-color: #2c2c2c;
    border-radius: 12px;
`;

const Price = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
`;

const PriceSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function ProductPage({product}){
    const {addProduct} = useContext(CartContext)
    if (!product){
        return (
            <>
                <Header />
                <Center>
                    <Title>Товар не найден</Title>
                </Center>
            </>
        )
    }
    return (
        <>  
            <Header />
            <Center>
                <ColWrapper>
                        <Box>
                            <ProductImages images={product?.images}/>
                        </Box>
                        <div>
                            <Title>{product.title}</Title>
                            <Desription>{product.description}</Desription>
                            <PriceSection>
                                <Price>{product.price} ₽</Price>
                                <Button primary size='l' onClick={()=>addProduct(product.id)}>В корзину</Button>
                            </PriceSection>
                        </div>
                    </ColWrapper>
            </Center>
        </>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    
    try {
        const response = await fetch('http://localhost:3000/api/products/id', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        
        const product = await response.json();
        
        return {
            props: {
                product,
            },
        };
    } catch (error) {
        return {
            props: {
                product: null,
            },
        };
    }
}