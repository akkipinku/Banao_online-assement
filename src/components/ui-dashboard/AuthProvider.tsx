import React, { useState, useEffect } from 'react';
import { AuthContext, checkAuthToken } from '../../hooks/useAuth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<{ email: string; name: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = checkAuthToken();
        if (token) {
            setIsAuthenticated(true);
            // Mock user restore
            const savedUser = localStorage.getItem('auth_user');
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            } else {
                setUser({ email: 'user@example.com', name: 'Demo User' });
            }
        }
        setLoading(false);
    }, []);

    const login = (email: string) => {
        localStorage.setItem('auth_token', 'fake_token_' + Date.now());
        const mockUser = { email, name: email.split('@')[0] };
        localStorage.setItem('auth_user', JSON.stringify(mockUser));
        setIsAuthenticated(true);
        setUser(mockUser);
    };

    const logout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        setIsAuthenticated(false);
        setUser(null);
    };

    if (loading) return null; // Or a spinner

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}
