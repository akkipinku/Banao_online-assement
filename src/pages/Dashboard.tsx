import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui-dashboard/Card';
import { Users, UserPlus, Zap, Activity } from 'lucide-react';

export default function Dashboard() {
    const [userCount, setUserCount] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUserCount(data.length);
                setLoading(false);
            });
    }, []);

    const stats = [
        {
            title: "Total Users",
            value: loading ? "..." : userCount,
            change: "+12% from last month",
            icon: Users,
            color: "text-blue-500"
        },
        {
            title: "New Signups",
            value: "142",
            change: "+18% from last month",
            icon: UserPlus,
            color: "text-green-500"
        },
        {
            title: "Active Now",
            value: "24",
            change: "-2% from last hour",
            icon: Activity,
            color: "text-rose-500"
        },
        {
            title: "Engagement Rate",
            value: "84.2%",
            change: "+4.1% from last week",
            icon: Zap,
            color: "text-yellow-500"
        }
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-zinc-100">Overview</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={index} className="bg-zinc-900/40 border-zinc-800 backdrop-blur-sm">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-zinc-400">
                                    {stat.title}
                                </CardTitle>
                                <Icon className={`h-4 w-4 ${stat.color}`} />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
                                <p className="text-xs text-zinc-500 mt-1">
                                    {stat.change}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-zinc-900/40 border-zinc-800">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[1, 2, 3, 4, 5].map((_, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center">
                                        <span className="text-xs font-bold text-zinc-500">U{i}</span>
                                    </div>
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none text-zinc-200">User logged in</p>
                                        <p className="text-xs text-zinc-500">2 minutes ago</p>
                                    </div>
                                    <div className="ml-auto font-medium text-xs text-green-500 animate-pulse">
                                        Active
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3 bg-zinc-900/40 border-zinc-800">
                    <CardHeader>
                        <CardTitle>Quick Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-zinc-400">Server Status</span>
                                <span className="text-green-500 font-medium">Healthy</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-zinc-400">Database Load</span>
                                <span className="text-blue-500 font-medium">24%</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-zinc-400">Memory Usage</span>
                                <span className="text-purple-500 font-medium">58%</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
