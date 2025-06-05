import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

const ProductCardWrapper = styled.div`
  width: 200px;
  height: auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

const ProductImageBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.6);
  border: 1px solid  #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  img{
    max-width: 200px;
    max-height: 200px;
    border-radius: 12px;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
`

const Price = styled.h3`
  margin: 0px;
  color: #FF00B2;
  font-weight: bold;
`;

const Title = styled.span`
  font-weight: 600;
`


export default function ProductCard({ product }){
  const {addProduct} = useContext(CartContext)
  const url = '/product/' + product.id;
  return (
    <ProductCardWrapper>
      <ProductLink href={url}>
        <ProductImageBox>
          <img src={product.images?.[0] || '/placeholder-product.png'} alt={product.title} />
        </ProductImageBox>
        </ProductLink>
        <div>
          <ProductLink href={url}>
            <Title>{product.title}</Title>
          </ProductLink> 
          <ButtonArea>
            <Price>{product.price}₽</Price>
            <Button primary={1} outline={1} onClick={()=>addProduct(product.id)}>В корзину</Button>
          </ButtonArea>
        </div>
    </ProductCardWrapper>
  )
}
