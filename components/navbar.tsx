'use client';

import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const links = [
        { href: '/movie', title: 'Movie' },
        {
            href: '/tv',
            title: 'Tv Series',
        },
        {
            href: '/search',
            title: 'Search',
        },
    ];

    return (
        <nav className="fixed left-0 top-0 z-10 w-full bg-transparent backdrop-blur-sm">
            <div className="mx-auto px-4 sm:px-6 md:mx-8 md:px-10">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-3xl">
                        Watch.io
                    </Link>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-8">
                            {links.map((l, i) => (
                                <Link
                                    href={l.href}
                                    className="text-white hover:text-primary"
                                    key={i}>
                                    {l.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center rounded-md p-2 text-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open menu</span>
                            {isMenuOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                        {links.map((l, i) => (
                            <Link
                                onClick={toggleMenu}
                                href={l.href}
                                className="block rounded-md px-3 py-2 text-base font-medium hover:text-primary"
                                key={i}>
                                {l.title}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
