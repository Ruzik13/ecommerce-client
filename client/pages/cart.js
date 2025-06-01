import Header from "@/components/Header"
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/components/CartContext";

const ColumnsWrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 40px;
`;

const Box = styled.div`
    color: white;
    padding: 32px;
    background-color: #2c2c2c;
    border-radius: 12px;
`;

export default function CartPage(){
    const {cartProducts} = useContext(CartContext);
    const [products, setProducts] = useState([])
    

    useEffect(()=>{
        if (cartProducts.length > 0){
            console.log('asd    ')
        }

    }, [cartProducts])
    return (
        <>
            <Header />
            <Center>
                <ColumnsWrapper>
                    <Box>
                        {!cartProducts?.length && (
                            <div>Корзина пуста</div>
                        ) }
                        {cartProducts?.length &&(
                            <h2>Корзина</h2>
                        )}
                    </Box>
                    {!!cartProducts?.length &&(
                        <Box>
                            <h2>Информация о заказе</h2>
                            <input type="text" placeholder="Адрес:"/>
                            <input type="text" placeholder="Адрес 2:"/>
                            <Button primary={1} block={1}>Перейти к оформлению</Button>
                        </Box>
                    )}
                </ColumnsWrapper>
            </Center>
        </>
    )
}