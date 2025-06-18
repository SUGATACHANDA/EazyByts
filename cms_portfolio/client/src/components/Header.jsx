import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 z-40 h-20">
                <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto h-full">
                    <div className="flex items-center">
                        <span className="text-white font-bold text-xl">Sugata</span>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="/" className="text-gray-300 hover:text-white transition-colors">
                            <span className="text-purple-400">#</span>home
                        </a>
                        <a href="/projects" className="text-gray-300 hover:text-white transition-colors">
                            <span className="text-purple-400">#</span>works
                        </a>
                        <a href="/about-me" className="text-gray-300 hover:text-white transition-colors">
                            <span className="text-purple-400">#</span>about-me
                        </a>
                        <a href="/contacts" className="text-gray-300 hover:text-white transition-colors">
                            <span className="text-purple-400">#</span>contacts
                        </a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        {/* Hamburger Menu Button */}
                        <button
                            className="block md:hidden text-white focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-gray-900 z-50 flex flex-col p-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center mb-16">
                    <div className="flex items-center">
                        <span className="text-white font-bold text-xl">Sugata</span>
                    </div>

                    {/* Close Button */}
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Close menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-10 mb-auto">
                    <a
                        href="/"
                        className="text-white text-4xl font-medium hover:text-gray-300 transition-colors"
                        onClick={toggleMenu}
                    >
                        <span className="text-purple-400">#</span>home
                    </a>
                    <a
                        href="/projects"
                        className="text-white text-4xl font-medium hover:text-gray-300 transition-colors"
                        onClick={toggleMenu}
                    >
                        <span className="text-purple-400">#</span>works
                    </a>
                    <a
                        href="/about-me"
                        className="text-white text-4xl font-medium hover:text-gray-300 transition-colors"
                        onClick={toggleMenu}
                    >
                        <span className="text-purple-400">#</span>about-me
                    </a>
                    <a
                        href="/about-me"
                        className="text-white text-4xl font-medium hover:text-gray-300 transition-colors"
                        onClick={toggleMenu}
                    >
                        <span className="text-purple-400">#</span>contacts
                    </a>
                </nav>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-12 mt-auto">
                    <a href="https://github.com/SUGATACHANDA" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href="https://dribbble.com" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                        </svg>
                    </a>
                    <a href="https://figma.com" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117v-6.038H8.148zm7.704 0c-2.476 0-4.49-2.015-4.49-4.491s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.491-4.49 4.491zm0-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02 3.019-1.355 3.019-3.02-1.354-3.019-3.019-3.019zm0 15.019c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49-2.014 4.49-4.49 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.354 3.019-3.019-1.354-3.019-3.019-3.019z" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;