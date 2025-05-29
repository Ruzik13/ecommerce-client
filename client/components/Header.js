import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
    background-color: #1F1F1F;
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
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={"/"}>Ecommerce</Logo>
                    <StyledNav>
                        <NavLink href={"/"}>Каталог</NavLink>
                        <NavLink href={"/products"}>Категории</NavLink>
                        <NavLink href={"/categories"}>Профиль</NavLink>
                        <NavLink href={"/cart"}>Корзина</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    )
}