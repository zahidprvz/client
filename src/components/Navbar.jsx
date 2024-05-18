import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isGuidelinesMenuOpen, setIsGuidelinesMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleGuidelinesMenu = () => {
        setIsGuidelinesMenuOpen(!isGuidelinesMenuOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-yellow fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left section */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-grayDark">
                            <p className="text-lg font-bold flex">
                                JCRM
                            </p>
                            <p className="text-xs">
                                Journal of Cancer Research & Medicine
                            </p>
                        </div>
                    </div>
                    {/* Center section */}
                    <div className="hidden md:flex flex-grow justify-center">
                        <div className="flex items-center space-x-4">
                            <NavLink
                                to="/"
                                className="text-black hover:text-white"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/editorial-board"
                                className="text-black hover:text-white"
                            >
                                Editorial Board
                            </NavLink>
                            <NavLink
                                to="/for-authors"
                                className="text-black hover:text-white"
                            >
                                For Authors
                            </NavLink>
                            <NavLink
                                to="/for-reviewers"
                                className="text-black hover:text-white"
                            >
                                For Reviewers
                            </NavLink>
                            <div className="relative">
                                <button
                                    onClick={toggleGuidelinesMenu}
                                    className="flex items-center text-black bg-yellow hover:text-white focus:outline-none"
                                >
                                    <span>Guidelines</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className={`ml-1 h-4 w-4 transition-transform ${isGuidelinesMenuOpen
                                            ? 'transform rotate-180'
                                            : ''
                                            }`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    className={`absolute top-full
                                    left-0 w-48 bg-gray-800 border border-gray-200 rounded-md shadow-lg z-10 ${isGuidelinesMenuOpen
                                            ? 'block'
                                            : 'hidden'
                                        }`}
                                >
                                    <NavLink
                                        to="/ethics-and-policies"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                    >
                                        Ethics and Policies
                                    </NavLink>
                                    <NavLink
                                        to="/publishing-charges"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                    >
                                        Publishing Charges
                                    </NavLink>
                                    <NavLink
                                        to="/submission-guidelines"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                    >
                                        Submission Guidelines
                                    </NavLink>
                                    <NavLink
                                        to="/downloads"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                    >
                                        Downloads
                                    </NavLink>
                                </div>
                            </div>
                            <NavLink
                                to="/contact"
                                className="text-black hover:text-white"
                            >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    {/* Right section */}
                    <div className="hidden md:flex">
                        <div className="flex items-center space-x-4">
                            {/* Login and Register links */}
                            <NavLink
                                to="/login"
                                className="text-black hover:text-white"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="text-black hover:text-white"
                            >
                                Register
                            </NavLink>
                        </div>
                    </div>
                    {/* Mobile menu toggle */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-yellow focus:outline-none focus:bg-gray-700 focus:text-white"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger icon */}
                            <svg
                                className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'
                                    }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l
                                    12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                            <NavLink
                                to="/"
                                className="text-black hover:text-white"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/editorial-board"
                                className="text-black hover:text-white"
                            >
                                Editorial Board
                            </NavLink>
                            <NavLink
                                to="/for-authors"
                                className="text-black hover:text-white"
                            >
                                For Authors
                            </NavLink>
                            <NavLink
                                to="/for-reviewers"
                                className="text-black hover:text-white"
                            >
                                For Reviewers
                            </NavLink>
                            <div className="relative">
                                <button
                                    onClick={toggleGuidelinesMenu}
                                    className="flex items-center text-black bg-yellow hover:text-white focus:outline-none"
                                >
                                    <span>Guidelines</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className={`ml-1 h-4 w-4 transition
                                        -transform ${isGuidelinesMenuOpen
                                                ? 'transform rotate-180'
                                                : ''
                                            }`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    className={`absolute top-full
                                        left-0 w-full bg-gray-700 border border-gray-200 rounded-md shadow-lg z-10 ${isGuidelinesMenuOpen
                                            ? 'block'
                                            : 'hidden'
                                        }`}
                                >
                                    <NavLink
                                        to="/ethics-and-policies"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                    >
                                        Ethics and Policies
                                    </NavLink>
                                    <NavLink
                                        to="/publishing-charges"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                    >
                                        Publishing Charges
                                    </NavLink>
                                    <NavLink
                                        to="/submission-guidelines"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                    >
                                        Submission Guidelines
                                    </NavLink>
                                    <NavLink
                                        to="/downloads"
                                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                                    >
                                        Downloads
                                    </NavLink>
                                </div>
                            </div>
                            <NavLink
                                to="/contact"
                                className="text-black hover:text-white"
                            >
                                Contact
                            </NavLink>
                            {/* Login and Register links */}
                            <NavLink
                                to="/login"
                                className="text-black hover:text-white"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="text-black hover:text-white"
                            >
                                Register
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
