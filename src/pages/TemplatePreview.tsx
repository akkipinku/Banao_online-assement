import { useState } from 'react';
import { Link } from 'react-router-dom';

// Diamond icon for Silver package
function SilverIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L28 16L16 28L4 16L16 4Z" fill="url(#silverGradient)" />
            <defs>
                <linearGradient id="silverGradient" x1="4" y1="4" x2="28" y2="28">
                    <stop stopColor="#a5b4fc" />
                    <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// Diamond icon for Golden package
function GoldenIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L28 16L16 28L4 16L16 4Z" fill="url(#goldenGradient)" />
            <defs>
                <linearGradient id="goldenGradient" x1="4" y1="4" x2="28" y2="28">
                    <stop stopColor="#fcd34d" />
                    <stop offset="1" stopColor="#f97316" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// Hexagon icon for Premium package
function PremiumIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="url(#premiumGradient)" />
            <defs>
                <linearGradient id="premiumGradient" x1="4" y1="2" x2="28" y2="30">
                    <stop stopColor="#67e8f9" />
                    <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
            </defs>
        </svg>
    );
}

// Check icon for feature list
function CheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// Pricing card component
function PricingCard({
    icon,
    title,
    price,
    features
}: {
    icon: React.ReactNode;
    title: string;
    price: number;
    features: string[];
}) {
    return (
        <div className="bg-[#18181c] rounded-2xl p-6 flex flex-col border border-zinc-800/50 hover:border-zinc-700 transition-colors">
            {/* Icon */}
            <div className="flex justify-center mb-4">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-semibold text-center mb-6">{title}</h3>

            {/* Features */}
            <div className="flex-1 space-y-3 mb-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckIcon />
                        <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                ))}
            </div>

            {/* Price and Button */}
            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-baseline">
                    <span className="text-white text-3xl font-bold">${price}</span>
                    <span className="text-gray-500 text-sm ml-1">/mo</span>
                </div>
                <button
                    className="px-4 py-2 rounded-lg text-white text-sm font-medium"
                    style={{ backgroundImage: 'linear-gradient(to right, rgb(255, 152, 152), rgb(128, 84, 255))' }}
                    onClick={() => alert(`Thank you for selecting the ${title}! Download will start shortly.`)}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

// Template Preview Card - Stats
function StatsCard() {
    return (
        <div className="bg-[#222228] rounded-xl p-4 h-48">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#313139] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="4" fill="#9ca3af" />
                        <circle cx="10" cy="4" r="2" fill="#9ca3af" />
                        <circle cx="16" cy="10" r="2" fill="#9ca3af" />
                        <circle cx="4" cy="10" r="2" fill="#9ca3af" />
                    </svg>
                </div>
                <div className="flex-1">
                    <div className="h-2 bg-[#313139] rounded w-20 mb-2"></div>
                    <div className="h-2 bg-[#313139] rounded w-16"></div>
                </div>
            </div>
            <div className="space-y-2">
                <div className="h-2 bg-[#313139] rounded w-full"></div>
                <div className="h-2 bg-[#313139] rounded w-3/4"></div>
                <div className="h-2 bg-[#313139] rounded w-5/6"></div>
                <div className="h-2 bg-[#313139] rounded w-2/3"></div>
            </div>
        </div>
    );
}

// Template Preview Card - Chart
function ChartCard() {
    return (
        <div className="bg-[#222228] rounded-xl p-4 h-48 flex flex-col items-center justify-center">
            <div className="relative w-24 h-24">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#313139" strokeWidth="8" />
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="url(#chartGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="200"
                        strokeDashoffset="60"
                        transform="rotate(-90 50 50)"
                    />
                    <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF9898" />
                            <stop offset="100%" stopColor="#8054FF" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">70%</span>
                </div>
            </div>
            <div className="mt-4 space-y-1 w-full">
                <div className="h-2 bg-[#313139] rounded w-full"></div>
                <div className="h-2 bg-[#313139] rounded w-2/3 mx-auto"></div>
            </div>
        </div>
    );
}

// Template Preview Card - Users
function UsersCard() {
    const users = [
        { color: '#FF9898' },
        { color: '#FFD700' },
        { color: '#8054FF' },
    ];

    return (
        <div className="bg-[#222228] rounded-xl p-4 h-48">
            <div className="space-y-3">
                {users.map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div
                            className="w-8 h-8 rounded-full"
                            style={{ backgroundColor: user.color }}
                        ></div>
                        <div className="flex-1">
                            <div className="h-2 bg-[#313139] rounded w-24 mb-1"></div>
                            <div className="h-2 bg-[#313139] rounded w-16"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TemplatePreview() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    const features = [
        '100 + Free Template',
        '10 Team Members',
        'Priority Support',
        'Premium Features',
        '50 Integrations',
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* Navigation Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
                <Link to="/" className="text-white font-bold text-xl hover:text-pink-400 transition-colors">
                    Nexus
                </Link>
                <div className="flex gap-4">
                    <Link to="/" className="px-6 py-2 text-white hover:text-pink-400 transition-colors">Home</Link>
                    <Link
                        to="/login"
                        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
                    >
                        Login
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="pt-24 px-8 pb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="mb-8">
                        <p className="text-pink-400 text-sm mb-2">Pricing</p>
                        <h1 className="text-white text-4xl font-bold">Choose Your Plan</h1>
                    </div>

                    {/* Split Layout */}
                    <div className="flex gap-12">
                        {/* Left Side - Template Preview */}
                        <div className="flex-1">
                            <div className="bg-[#131415] rounded-3xl p-8 border border-zinc-800/30">
                                <h2 className="text-white text-xl font-semibold mb-6">Template Preview</h2>
                                <div className="grid grid-cols-3 gap-4">
                                    <StatsCard />
                                    <ChartCard />
                                    <UsersCard />
                                </div>
                                <div className="mt-4">
                                    <div className="bg-[#222228] rounded-xl p-4 h-24">
                                        <div className="flex gap-4">
                                            <div className="h-2 bg-[#313139] rounded flex-1"></div>
                                            <div className="h-2 bg-[#313139] rounded flex-1"></div>
                                            <div className="h-2 bg-[#313139] rounded flex-1"></div>
                                        </div>
                                        <div className="flex gap-4 mt-4">
                                            <div className="h-8 bg-[#313139] rounded flex-1"></div>
                                            <div className="h-8 bg-[#313139] rounded flex-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mt-6 text-center">
                                    A good design is not only aesthetically pleasing, but also functional.
                                    It should be able to solve the problem.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Pricing */}
                        <div className="w-[500px]">
                            {/* Billing Toggle */}
                            <div className="flex justify-end mb-6">
                                <div className="inline-flex bg-[#222228] rounded-full p-1">
                                    <button
                                        onClick={() => setBillingCycle('monthly')}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly'
                                                ? 'text-white'
                                                : 'text-gray-400 hover:text-white'
                                            }`}
                                        style={billingCycle === 'monthly' ? {
                                            backgroundImage: 'linear-gradient(to right, rgb(255, 152, 152), rgb(128, 84, 255))'
                                        } : {}}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        onClick={() => setBillingCycle('yearly')}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'yearly'
                                                ? 'text-white'
                                                : 'text-gray-400 hover:text-white'
                                            }`}
                                        style={billingCycle === 'yearly' ? {
                                            backgroundImage: 'linear-gradient(to right, rgb(255, 152, 152), rgb(128, 84, 255))'
                                        } : {}}
                                    >
                                        Yearly
                                    </button>
                                </div>
                            </div>

                            {/* Pricing Cards */}
                            <div className="space-y-4">
                                <PricingCard
                                    icon={<SilverIcon />}
                                    title="Silver Package"
                                    price={billingCycle === 'monthly' ? 40 : 400}
                                    features={features}
                                />
                                <PricingCard
                                    icon={<GoldenIcon />}
                                    title="Golden Package"
                                    price={billingCycle === 'monthly' ? 70 : 700}
                                    features={features}
                                />
                                <PricingCard
                                    icon={<PremiumIcon />}
                                    title="Premium Package"
                                    price={billingCycle === 'monthly' ? 120 : 1200}
                                    features={features}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
