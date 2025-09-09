import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import logo from "../assets/gatoa-logo.jpg"; // Certifique-se que o caminho do logo está correto

const navLinks = [
  { to: "#", label: "Inicio" },
  { to: "#portfolio", label: "Produtos" },
  { to: "#contact", label: "Contato" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex-shrink-0">
              <img className="h-10 w-auto" src={logo} alt="Gatoa Logo" />
            </a>

            {/* Menu Desktop */}
            <ul className="hidden md:flex items-center gap-8 text-md font-medium text-brand-white">
              {navLinks.map((link) => (
                <motion.li key={link.to} className="relative group">
                  <a href={link.to} className="block px-4 py-2 transition-colors duration-300 hover:text-brand-accent">
                    {link.label}
                  </a>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </motion.li>
              ))}
            </ul>

            {/* Ícones e Botões */}
            <div className="hidden md:flex items-center gap-6">
              <a href="/cart" aria-label="Carrinho de compras">
                <ShoppingCart className="text-gray-300 hover:text-white transition-colors duration-300" />
              </a>
              <a href="/login" aria-label="Perfil do usuário">
                <User className="text-gray-300 hover:text-white transition-colors duration-300" />
              </a>
            </div>

            {/* Botão do Menu Mobile */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleNavbar} aria-label="Abrir menu">
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden z-40"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="absolute top-4 right-4">
              <button onClick={toggleNavbar} aria-label="Fechar menu">
                <X size={30} />
              </button>
            </div>

            <a href="#" className="mb-8">
              <img className="h-12 w-auto" src={logo} alt="Gatoa Logo" />
            </a>

            <ul className="flex flex-col items-center gap-6 text-2xl">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <a href={link.to} className="block px-4 py-2 text-gray-300 hover:text-brand-accent transition-colors duration-300" onClick={toggleNavbar}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-8 mt-8">
              <a href="/cart" aria-label="Carrinho de compras" onClick={toggleNavbar}>
                <ShoppingCart size={28} className="text-gray-300 hover:text-white transition-colors duration-300" />
              </a>
              <a href="/login" aria-label="Perfil do usuário" onClick={toggleNavbar}>
                <User size={28} className="text-gray-300 hover:text-white transition-colors duration-300" />
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;