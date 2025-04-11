'use client';
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from "next/navigation";
import { useTheme  } from "@/app/ThemeProvider";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();

    const menuVariants = {
        hidden: { 
            opacity: 0,
            y: -20,
            transition: { when: "afterChildren" } 
        },
        visible: { 
            opacity: 1,
            y: 0,
            transition: { 
                when: "beforeChildren",
                staggerChildren: 0.1
            } 
        }
    };
    
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const handleHashNavigation = (hash: string) => {
        if (pathname === "/") {
            const element = document.querySelector(hash);
            element?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push(`/${hash}`);
        }
        setMenuOpen(false);
    };

    const menuItems = [
        { name: "Sobre mim", href: "#about" },
        { name: "Habilidades", href: "#skills" },
        { name: "Projetos", href: "#projects" },
        { name: "Contact-me", href: "#contact" }
    ];

    return (
        <header className={`fixed z-10 w-[70%] left-1/2 transform -translate-x-[54%] m-7 flex justify-between items-center bg-amber-900 rounded-full px-10 py-4 transition-colors duration-300 ${theme === 'dark' ? 'dark' : 'light'}`}>

            <button 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
                <motion.span 
                    animate={{ rotate: menuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block color-font-branco-50"
                >
                    {menuOpen ? (
                    <IoMdClose className={`${theme === 'dark' ? '' : 'text-[#121212]'} h-8 w-auto`} />
                    ) : (
                    <RiMenu2Line className={`${theme === 'dark' ? '' : 'text-[#121212]'} h-8 w-auto`} />
                    )}
                </motion.span>
            </button>

            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        className="bg-[#7663F2] h-76 w-50 flex flex-col fixed top-2/12 z-50 rounded-2xl mt-10"
                    >
                        <motion.ul className="w-full h-full flex flex-col justify-between p-5">
                            {menuItems.map((item) => (
                                <motion.li
                                    key={item.href}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button
                                        onClick={() => handleHashNavigation(item.href)}
                                        className="font-bold text-2xl text-white hover:text-[#021D40] transition-colors block py-2 w-full text-left cursor-pointer"
                                    >
                                        {item.name}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.nav>
                )}
            </AnimatePresence>

            <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                aria-label="Alternar tema"
                className="color-font-branco-50"
                onClick={toggleTheme}
            >
                {theme === 'light' ? (
                    <FaMoon className={`w-6 h-6  ${theme === 'light' && 'text-[#121212]'}`} />
                ) : (
                    <FaSun className="w-6 h-6 " />
                )}
            </motion.button>
        </header>
    );
}