import Header from "@/components/Header"
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import Table from "@/components/Table";

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

const ProductInfoCell = styled.td`
  padding: 8px;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 8px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.6);
  border: 1px solid  #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 4px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      fetchProducts();
    } else {
      setProducts([]); 
    }
  }, [cartProducts]);

  async function fetchProducts() {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ids: cartProducts
        }),
      });
      
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Ошибка при загрузке товаров:', error);
    }
  }

  function increaseProduct(id){
    addProduct(id);
  }
  function decreaseProduct(id){
    removeProduct(id);
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Корзина</h2>
            {!cartProducts?.length && (
              <div>Корзина пуста</div>
            )}
            {cartProducts?.length > 0 && (
            <Table>
              <thead>
                <tr>
                  <th>Товар</th>
                  <th>Количество</th>
                  <th>Цена  </th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                      <tr key={product.id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={product.images[0]} alt="" />
                          </ProductImageBox>
                          {product.title}
                        </ProductInfoCell>
                        <td>
                          <Button onClick={()=>decreaseProduct(product.id)}>-</Button>
                          <QuantityLabel>
                            {cartProducts.filter(id=> id===product.id).length}
                          </QuantityLabel>
                          <Button onClick={()=>increaseProduct(product.id)}>+</Button>
                        </td>
                        <td>{cartProducts.filter(id=> id===product.id).length * product.price}₽</td>
                      </tr>
                    ))}
              </tbody>
            </Table>
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