import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: 'How to use the template?',
            answer: 'Download the template files and extract them. Open the project in your preferred code editor and follow the README instructions to get started.'
        },
        {
            question: 'What are your shipping times?',
            answer: 'Digital products are delivered instantly upon purchase. Physical products ship within 2-3 business days.'
        },
        {
            question: 'What is your refund policy?',
            answer: 'We offer a 30-day money-back guarantee for all our products. If you\'re not satisfied, contact our support team.'
        },
        {
            question: 'How will I learn my size?',
            answer: 'Check our detailed size guide available on each product page. Measurements are provided for accurate fitting.'
        },
        {
            question: 'I received the wrong item, what can I do?',
            answer: 'Contact our support team immediately with your order number and photos. We\'ll arrange a replacement or refund right away.'
        },
        {
            question: 'Best web design agency and UI?',
            answer: 'We recommend agencies with proven portfolios in your industry. Check reviews and previous work before deciding.'
        },
        {
            question: 'How can I order web design services?',
            answer: 'Use our contact form or email us directly. We\'ll schedule a consultation to discuss your project requirements.'
        },
        {
            question: 'What are benefits of this template?',
            answer: 'Fully responsive design, well-documented code, regular updates, and professional support included with purchase.'
        },
        {
            question: 'How do I promote the product?',
            answer: 'Leverage social media, content marketing, SEO optimization, and email campaigns. Good photos in the only game changer, according to the product, good design is not only aesthetically pleasing, but also functional.'
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-black py-16 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <h1 className="text-white text-4xl font-bold mb-12">
                    Frequently Asked Questions
                </h1>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#18181c] rounded-lg overflow-hidden transition-all duration-300"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#1f1f23] transition-colors"
                            >
                                <span className="text-white text-sm font-medium pr-4">
                                    {faq.question}
                                </span>
                                <span className="text-gray-400 flex-shrink-0 text-xl">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {/* Answer with Smooth Transition */}
                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                style={{
                                    overflow: 'hidden'
                                }}
                            >
                                <div
                                    className={`px-6 pb-4 text-gray-400 text-sm transition-all duration-700 ${openIndex === index
                                            ? 'shadow-[0_4px_12px_rgba(0,0,0,0.3),0_8px_24px_rgba(0,0,0,0.2),0_12px_36px_rgba(0,0,0,0.1)]'
                                            : ''
                                        }`}
                                >
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
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
