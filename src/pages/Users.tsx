import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui-dashboard/Card';
import { Input } from '../components/ui-dashboard/Input';
import { Button } from '../components/ui-dashboard/Button';
import { Search, ChevronLeft, ChevronRight, ArrowUpDown, MoreHorizontal, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
    };
}

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const itemsPerPage = 5;

    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch users');
                return res.json();
            })
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch users", err);
                setError('Failed to load users. Please check your internet connection.');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let result = [...users];

        // Search
        if (search) {
            result = result.filter(u =>
                u.name.toLowerCase().includes(search.toLowerCase()) ||
                u.email.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Sort
        result.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1;
            if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredUsers(result);
        setCurrentPage(1); // Reset page on filter change
    }, [users, search, sortOrder]);

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const toggleSort = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
                <h1 className="text-3xl font-bold text-zinc-100">Users</h1>
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
                    <Input
                        placeholder="Search users..."
                        className="pl-9"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-zinc-400">
                        <thead className="bg-zinc-900 text-zinc-100 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-4 font-medium cursor-pointer hover:bg-zinc-800 transition-colors" onClick={toggleSort}>
                                    <div className="flex items-center gap-2">
                                        Name
                                        <ArrowUpDown className="h-3 w-3" />
                                    </div>
                                </th>
                                <th className="px-6 py-4 font-medium">Email</th>
                                <th className="px-6 py-4 font-medium">Company</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-zinc-400">Loading users...</td>
                                </tr>
                            ) : error ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-red-500 font-medium">{error}</td>
                                </tr>
                            ) : paginatedUsers.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center">No users found</td>
                                </tr>
                            ) : (
                                paginatedUsers.map((user) => (
                                    <tr key={user.id} className="border-b border-zinc-800 hover:bg-zinc-800/30 transition-colors">
                                        <td className="px-6 py-4 font-medium text-zinc-200">{user.name}</td>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.company.name}</td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm" onClick={() => setSelectedUser(user)}>
                                                View
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500">
                        Showing {filteredUsers.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to {Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} users
                    </p>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>

            {/* User Details Modal */}
            {selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                        <button
                            className="absolute top-4 right-4 text-zinc-400 hover:text-white"
                            onClick={() => setSelectedUser(null)}
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="space-y-1">
                            <h2 className="text-xl font-bold text-white">{selectedUser.name}</h2>
                            <p className="text-sm text-zinc-400">@{selectedUser.username}</p>
                        </div>

                        <div className="grid gap-3 pt-2">
                            <div className="grid grid-cols-3 text-sm">
                                <span className="text-zinc-500">Email:</span>
                                <span className="col-span-2 text-zinc-200 break-all">{selectedUser.email}</span>
                            </div>
                            <div className="grid grid-cols-3 text-sm">
                                <span className="text-zinc-500">Phone:</span>
                                <span className="col-span-2 text-zinc-200">{selectedUser.phone}</span>
                            </div>
                            <div className="grid grid-cols-3 text-sm">
                                <span className="text-zinc-500">Website:</span>
                                <span className="col-span-2 text-zinc-200 hover:text-blue-400 cursor-pointer">{selectedUser.website}</span>
                            </div>
                            <div className="grid grid-cols-3 text-sm">
                                <span className="text-zinc-500">Company:</span>
                                <span className="col-span-2 text-zinc-200">{selectedUser.company.name}</span>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button onClick={() => setSelectedUser(null)}>Close</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
