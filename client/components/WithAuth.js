import { useEffect } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken'

export default function withAuth(WrappedPage){
    return (props)=>{
        const router = useRouter();

    useEffect(()=>{
        const checkAuth = async ()=>{
            try {
                const response = await fetch('http://localhost:3000/api/auth/me');
                if (!response.ok){
                    throw new Error('Пользователь не аутентифицирован');
                }
            }catch(error){
                router.push('/login')
            }
        };
        checkAuth();
    }, [router]);

    return <WrappedPage {...props}/>;
    }
};