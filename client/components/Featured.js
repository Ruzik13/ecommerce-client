import Center from "./Center"
import styled from "styled-components";
import Button from "./Button";
 
const Bg = styled.div`
    color: #fff;
    background-color:  #1F1F1F;
    padding: 40px 0px;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin:auto;
    align-items: center;
    justify-items: center;
    img {
        max-width: 100%;

    }
`;

const Column = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 3rem;
    color: #FF00B7;
`;
const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
    font-weight: light;
`;

const BtnWrapper = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 12px;
`;


export default function Featured(){
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>Кабинет звука</Title>
                            <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ut nesciunt. Natus impedit qui praesentium, laudantium ipsam facere consequatur deserunt accusamus harum tenetur corrupti obcaecati omnis! Quisquam error dolore fugiat.</Desc>
                            <BtnWrapper>
                                <Button white outline size={"l"}>Подробнее</Button>
                                <Button primary size={"l"}>
                                    В корзину
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </Button>
                            </BtnWrapper>
                        </div>
                    </Column>
                    <div>
                        <img src="/cabinet.svg" alt="" />
                    </div>
                </ColumnsWrapper>
            </Center>
        </Bg>
    )
}
