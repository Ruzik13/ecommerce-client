import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';

export function useAuth(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(()=>{
        async function checkAuth(){
            try{
                const response = await fetch('http://localhost:3000/api/auth/me');
                const data = await response.json();

                if (data.user){
                    setUser(data.user);
                }else{
                    router.push('/login');
                }
            }catch(error){
                router.push('/login');
            }finally{
                setLoading(false);
            }
        }

        CheckAuth();
    },[router]);

    return {user, loading};
}