import Header from "@/components/Header"
import withAuth from "@/components/WithAuth"
import { useAuth } from "@/hooks/useAuth";
import styled from "styled-components";
import Button from "@/components/Button";
import Center from "@/components/Center";

const ProfileWrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: .3fr 1.7fr;
    gap: 40px;
`
const Box = styled.div`
    color: white;
    padding: 28px;
    background-color: #2c2c2c;
    border-radius: 12px;
`;

const Name = styled.h1`
    margin:0;
    font-szie: 1.8rem;
    color: #FF00B7;
`

function ProfilePage(){
    const {user, loading, logout} = useAuth();

    if (!user){
        return null;
    }
    return (
        <>
            <Header />
            <Center>
                <ProfileWrapper>
                    <Box>
                        <Name>{user.name}</Name>
                        <Button primary outline size='' onClick = {logout}>Выйти</Button>
                    </Box>
                    <Box>
                        <h2>Мои заказы</h2>
                    </Box>
                </ProfileWrapper>
            </Center>
        </>
    )
}

export default withAuth(ProfilePage);