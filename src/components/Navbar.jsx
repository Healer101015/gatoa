import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cat } from 'lucide-react'; // Ícone de gato

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "#promocoes", label: "Promoções" },
    { to: "#", label: "Contato" },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.08 },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-2 bg-brand-black border-b border-brand-gray">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2 z-[60] text-brand-white">
            <Cat size={40} />
            <span className="text-2xl font-bold">Gatoa</span>
          </a>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-4 text-md font-medium text-brand-white">
            {navLinks.map((link) => (
              <motion.li key={link.to} className="relative">
                <a href={link.to} className="block px-4 py-2 hover:text-brand-gray transition-colors">
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* BOTÃO MENU MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-[60]"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((_, index) => (
              <span
                key={index}
                className={`block h-0.5 w-6 transform transition duration-300 ease-in-out rounded-full bg-brand-white
                ${index === 0 ? (isOpen ? "rotate-45 translate-y-2" : "") : ""}
                ${index === 1 ? (isOpen ? "opacity-0" : "opacity-100") : ""}
                ${index === 2 ? (isOpen ? "-rotate-45 -translate-y-2" : "") : ""}
                `}
              />
            ))}
          </button>

          {/* MENU MOBILE */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="absolute top-full left-0 right-0 bg-brand-black shadow-lg flex flex-col gap-2 py-5 md:hidden text-brand-white font-medium z-40 border-t border-brand-gray"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.to} variants={mobileMenuItemVariants}>
                    <a
                      href={link.to}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-center text-base hover:bg-brand-gray"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}