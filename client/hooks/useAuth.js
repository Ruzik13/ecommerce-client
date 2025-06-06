import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const logout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
    
    useEffect(() => {
        async function checkAuth() {
            try {
                const response = await fetch('/api/auth/me');
                const data = await response.json();

                if (data.user) {
                    setUser(data.user);
                } else {
                    router.push('/login');
                }
            } catch (error) {
                console.error('Auth check failed:', error);
                router.push('/login');
            } finally {
                setLoading(false);
            }
        }

        checkAuth();
    }, [router]);

    return { user, loading, logout };
}