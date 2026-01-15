import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LayoutDashboard, Users, Settings, LogOut, Menu } from 'lucide-react';
import { Button } from '../ui-dashboard/Button';
import { useState } from 'react';
import { cn } from '../../lib/utils';

export default function DashboardLayout() {
    const { isAuthenticated, logout, user } = useAuth();
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    const navItems = [
        { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
        { href: '/dashboard/users', label: 'Users', icon: Users },
        { href: '/dashboard/settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-black text-zinc-100 flex font-sans">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/80 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-64 border-r border-zinc-800 bg-zinc-950 transition-transform md:translate-x-0 md:static",
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex h-16 items-center border-b border-zinc-800 px-6">
                    <Link to="/dashboard" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                        Nexus Admin
                    </Link>
                </div>

                <div className="flex flex-col justify-between h-[calc(100%-4rem)] p-4">
                    <nav className="space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.href || (item.href !== '/dashboard' && location.pathname.startsWith(item.href));

                            return (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-zinc-800 text-white"
                                            : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-100"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="border-t border-zinc-800 pt-4">
                        <div className="px-3 py-2 mb-2">
                            <p className="text-xs font-medium text-zinc-500">Logged in as</p>
                            <p className="text-sm text-zinc-300 truncate">{user?.email}</p>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full justify-start gap-3 border-red-900/30 text-red-500 hover:bg-red-950/30 hover:text-red-400 hover:border-red-900/50"
                            onClick={logout}
                        >
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-black">
                <div className="h-16 border-b border-zinc-800 flex items-center px-4 md:px-8 justify-between md:justify-end sticky top-0 bg-black/80 backdrop-blur-sm z-30">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-4">
                        {/* Top bar content if needed, e.g. breadcrumbs or search */}
                    </div>
                </div>

                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
