import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui-dashboard/Card';
import { Input } from '../components/ui-dashboard/Input';
import { Button } from '../components/ui-dashboard/Button';
import { useAuth } from '../hooks/useAuth';
import { Moon, Sun } from 'lucide-react';

export default function Settings() {
    const { user } = useAuth();
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
        // Check system theme or stored theme
        const storedTheme = localStorage.getItem('theme') as 'dark' | 'light';
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        } else {
            // Default to dark
            document.documentElement.classList.add('dark');
        }
    }, [user]);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate save
        localStorage.setItem('auth_user', JSON.stringify({ ...user, name, email }));
        setMessage('Profile updated successfully!');
        setTimeout(() => setMessage(''), 3000);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <div className="space-y-6 max-w-2xl">
            <h1 className="text-3xl font-bold text-zinc-100">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSave} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">Display Name</label>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-400">Email Address</label>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="email@example.com"
                            />
                        </div>
                        <div className="pt-2">
                            <Button type="submit">Save Changes</Button>
                        </div>
                        {message && <p className="text-sm text-green-500 animate-in fade-in">{message}</p>}
                    </form>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-zinc-200">Theme Preference</p>
                            <p className="text-sm text-zinc-500">Choose between light and dark mode</p>
                        </div>
                        <Button variant="outline" onClick={toggleTheme} className="w-32 justify-between">
                            <span className="capitalize">{theme}</span>
                            {theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
