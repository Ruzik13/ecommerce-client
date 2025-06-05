import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const StyledHeader = styled.header`
    background-color: #1F1F1F;
    position: fixed;
    left:0;
    top:0;
    right:0;
    z-index: 100;
    box-shadow: 0px 8px 12px #1F1F1F
`;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 16px;
`

const NavLink = styled(Link)`
    color: #aaa;
    text-decoration: none;
`;


export default function Header(){
    const {cartProducts} = useContext(CartContext)
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={"/"}>Ecommerce</Logo>
                    <StyledNav>
                        <NavLink href={"/"}>Главная</NavLink>
                        <NavLink href={"/products"}>Каталог</NavLink>
                        <NavLink href={"/profile"}>Профиль</NavLink>
                        <NavLink href={"/cart"}>Корзина ({cartProducts.length>0 ? cartProducts.length : 0})</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    )
}