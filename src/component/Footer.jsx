import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

                    {/* About Section */}
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">BOORMAX</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Your one-stop shop for trendy products and amazing deals. BOORMAX makes shopping easy and fun!
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="flex-1 flex justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Shop</h3>
                            <ul className="space-y-2">
                                <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
                                <li><a href="#shop" className="hover:text-blue-500 transition">Shop</a></li>
                                <li><a href="#collections" className="hover:text-blue-500 transition">Collections</a></li>
                                <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
                                <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Support</h3>
                            <ul className="space-y-2">
                                <li><a href="#faq" className="hover:text-blue-500 transition">FAQ</a></li>
                                <li><a href="#help" className="hover:text-blue-500 transition">Help Center</a></li>
                                <li><a href="#privacy" className="hover:text-blue-500 transition">Privacy Policy</a></li>
                                <li><a href="#terms" className="hover:text-blue-500 transition">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-3 text-black dark:text-white">Follow Us</h3>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="hover:text-blue-500 transition"><Facebook size={24} /></a>
                            <a href="#" className="hover:text-blue-500 transition"><Twitter size={24} /></a>
                            <a href="#" className="hover:text-blue-500 transition"><Instagram size={24} /></a>
                            <a href="#" className="hover:text-blue-500 transition"><Linkedin size={24} /></a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} BOORMAX. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
