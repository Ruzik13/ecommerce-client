import {useState} from 'react';
import {useRouter} from 'next/router';
import Input from './Input';
import Button from './Button';
import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
    font-size: 1.5rem;
    color: #FF00B7;
    margin-bottom: 40px;
`;

const FormWrapper = styled.div`
    margin-top: 100px;
    text-align: center;
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledForm = styled.form`
    width:100%
    max-width: 212px;
    background-color: #2c2c2c;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:12px;
`;

const StyledLink = styled(Link)`
    color: #FF00B7;
    text-decoration: none;
`;
const StyledSpan = styled.span`
    margin-top: 12px;
    font-size: 0.8rem;
    color: #fff;
    font-weight: light;
`;

const ErrorMessage = styled.span`
    color: rgb(255,0,0);
    font-size: 0.7rem;
`;

export default function RegisterForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');

        try{
            const response =  await fetch('/api/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password}),
            })
            const data = await response.json();
            if (!response.ok){
                throw new Error(data.message || 'Аутентификация провалена');
            }
            router.push('/profile');
        }catch(error){
            setError(error.message);
        }
    }

    return (
        <FormWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <Title>Вход</Title>
                    <Input placeholder = {'Email:'} value={email} onChange = {(e)=>setEmail(e.target.value)}/>
                    <Input type='password' value={password} placeholder = {'Пароль:'} onChange = {(e)=>setPassword(e.target.value)}/>
                    <ErrorMessage>{error}</ErrorMessage>
                <Button primary>Войти</Button>
                <StyledSpan>Нет профиля? <StyledLink href={'/register'}>Создать</StyledLink></StyledSpan>
            </StyledForm>
        </FormWrapper>
    )
}