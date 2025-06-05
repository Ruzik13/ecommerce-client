import Header from "@/components/Header"
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import Table from "@/components/Table";
import Input from "@/components/Input";

//Корзина не очищается, исправить

const ColumnsWrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    color: #fff;

    @media screen and (min-width: 768px){
        grid-template-columns: 1.3fr .7fr;
    }
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
  margin-bottom: 4px;
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

const CityHolder = styled.div`
  display: flex;
  gap: 4px;
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postal, setPostal] = useState('');
  const [address, setAddress] = useState('');

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
  };

  const total = products.reduce((sum, product)=>{
    const quantity = cartProducts.filter(id=>id===product.id).length;
    return sum + (product.price * quantity);

  }, 0)


  function increaseProduct(id){
    addProduct(id);
  };
  function decreaseProduct(id){
    removeProduct(id);
  };

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
                  <th>Цена</th>
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
                    <tr>
                      <td />
                      <td />
                      <td><h3>{total}₽</h3></td>
                    </tr>
              </tbody>
            </Table>
            )}
            </Box>
            {!!cartProducts?.length &&(
              <Box>
                <form method="post" action="/api/checkout">
                  <h2>Информация о заказе</h2>

                  <Input type="text" 
                  placeholder="Имя:" 
                  value={name} 
                  name="name"
                  onChange={e=>setName(e.target.value)}/>

                  <Input type="text" 
                  placeholder="Email:" 
                  value={email}
                  name="email"
                  onChange={e=>setEmail(e.target.value)}/>

                  <CityHolder>
                    <Input type="text" 
                    placeholder="Город:"
                    value={city}
                    name="city"
                    onChange={e=>setCity(e.target.value)}/>

                    <Input type="text" 
                    placeholder="Индекс:" 
                    value={postal}
                    name="postal"
                    onChange={e=>setPostal(e.target.value)}/>
                  </CityHolder>

                  <Input type="text" 
                  placeholder="Адрес:" 
                  value={address}
                  name="address"
                  onChange={e=>setAddress(e.target.value)}/>

                  <Button primary={1} block={1} >Перейти к оформлению</Button>
                </form>
              </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
    )
}