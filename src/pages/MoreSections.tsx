import { Link } from 'react-router-dom';

export default function MoreSections() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Background blur elements */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px]" />

            {/* Header */}
            <nav className="relative z-10 flex items-center justify-between px-8 py-6">
                <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2L2 7L12 12L22 7L12 2Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2 17L12 22L22 17"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M2 12L12 17L22 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span className="text-white font-bold text-xl">Squid</span>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        className="text-gray-400 hover:text-white transition-colors px-4 py-2"
                    >
                        Home
                    </Link>
                    <Link
                        to="/template-preview"
                        className="px-6 py-2 rounded-lg text-white text-sm font-medium"
                        style={{
                            backgroundImage: 'linear-gradient(to right, rgb(255, 152, 152), rgb(128, 84, 255))'
                        }}
                    >
                        Download Template
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-88px)] px-8">
                <h1 className="text-white text-6xl font-bold mb-12">More Sections</h1>

                <Link
                    to="/template-preview"
                    className="px-8 py-3 rounded-lg text-white text-lg font-medium hover:opacity-90 transition-opacity"
                    style={{
                        backgroundImage: 'linear-gradient(to right, rgb(255, 152, 152), rgb(128, 84, 255))'
                    }}
                >
                    Download Template
                </Link>

                {/* Back Button */}
                <Link
                    to="/"
                    className="mt-12 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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
