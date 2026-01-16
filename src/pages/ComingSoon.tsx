import { Link } from 'react-router-dom';

export default function ComingSoon() {
    const features = [
        'Inner Pages',
        '40+ Sections',
        'HTML/CSS Version',
        'Adobe XD Version',
        'Webflow Template'
    ];

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
            <div className="max-w-md w-full">
                {/* Main Content Card */}
                <div className="bg-black border border-zinc-800 rounded-lg p-12">
                    {/* Coming Soon Heading */}
                    <h1 className="text-white text-4xl font-bold mb-8">Coming soon</h1>

                    {/* Features List */}
                    <div className="space-y-4 mb-12">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 text-gray-400">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="flex-shrink-0"
                                >
                                    <path
                                        d="M6 8h6M8 6v6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Custom Design Section */}
                    <div className="mb-8">
                        <h2 className="text-white text-2xl font-bold mb-4">
                            Need Custom Design,
                            <br />
                            Development or
                            <br />
                            Branding?
                        </h2>
                        <a
                            href="https://www.inkyy.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-lg hover:text-pink-400 transition-colors"
                        >
                            www.inkyy.com
                        </a>
                    </div>
                </div>

                {/* Back Button */}
                <Link
                    to="/"
                    className="mt-6 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M12 5l-5 5 5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
