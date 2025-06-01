import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductCardWrapper = styled.div`
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 4px;
  overlay: hidden;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0,0,0,0.25)
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
      <ProductImage src={product.images?.[0] || '/placeholder-product.png'} alt={product.title} />
      <div>
        <Title>{product.title}</Title>
        <ButtonArea>
          <Price>{product.price}₽</Price>
          <Button primary={1} outline={1} onClick={()=>addProduct(product.id)}>В корзину</Button>
        </ButtonArea>
      </div>
    </ProductCardWrapper>
  )
}
