import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui-dashboard/Button';
import { Input } from '../components/ui-dashboard/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui-dashboard/Card';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Not used for fake auth
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API delay
        const timer = setTimeout(() => {
            login(email);
            navigate(from, { replace: true });
        }, 500);
        return () => clearTimeout(timer);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <Card className="w-full max-w-md border-zinc-800 bg-zinc-950">
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                        Welcome Back
                    </CardTitle>
                    <p className="text-sm text-zinc-400">Enter your email to sign in to your dashboard</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-zinc-900 border-zinc-800 focus:ring-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-zinc-300">Password</label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="bg-zinc-900 border-zinc-800 focus:ring-blue-500"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                            Sign In
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm text-zinc-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-blue-500 hover:text-blue-400 font-medium">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
