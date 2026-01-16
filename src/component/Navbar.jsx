import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ShoppingCart, Heart, Search } from "lucide-react";

const Navbar = ({SearchBar}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [darkMode]);

    const menuItems = ["Home", "Shop", "Collections","Services", "About", "Contact"];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="text-2xl font-bold text-black dark:text-white cursor-pointer">
                        <span className="text-blue-500">BOORMAX</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors group"
                            >
                                {item}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                            </a>
                        ))}

                        {/* Search Icon */}
                        {SearchBar ? <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                            <Search size={18} />
                        </button> : ""}

                        {/* Wishlist */}
                        <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-red-500 transition">
                            <Heart size={22} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                1
                            </span>
                        </button>

                        {/* Cart */}
                        <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                            <ShoppingCart size={22} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* Auth Buttons */}
                        <button className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                            Login
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                            Sign Up
                        </button>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-black dark:text-white"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col bg-white dark:bg-gray-900 px-6 py-4 space-y-4">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
                        >
                            {item}
                        </a>
                    ))}

                    {/* Mobile Cart + Wishlist */}
                    <button className="relative w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 transition flex items-center gap-2">
                        <ShoppingCart size={20} /> Cart
                        <span className="ml-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>
                    <button className="relative w-full text-left text-gray-700 dark:text-gray-300 hover:text-red-500 transition flex items-center gap-2">
                        <Heart size={20} /> Wishlist
                        <span className="ml-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            1
                        </span>
                    </button>

                    {/* Auth Buttons */}
                    <button className="w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 transition">
                        Login
                    </button>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition">
                        Sign Up
                    </button>

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        Toggle Theme
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
