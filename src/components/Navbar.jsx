import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

// Ícones Dark Mode
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 3v1m0 16v1m8.66-12.66l-.707.707M5.34 18.66l-.707.707M21 12h1M2 12H1m16.95 4.95l.707.707M4.34 5.34l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

// Ícone seta voltar topo
const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none"
    viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
    className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tema inicial
  useEffect(() => {
    if (localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Aplicar tema
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { to: "#", label: "Home" },
    { to: "#solucoes", label: "Soluções" },
    { to: "#projetos", label: "Projetos" },
    { to: "#contato", label: "Contato" },
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
      <nav
        className={`sticky top-0 z-50 py-0.5 border-b transition-all duration-700 ease-in-out ${hasScrolled
          ? "bg-white/30 backdrop-blur-xl border-gray-200 shadow-sm"
          : "bg-transparent border-transparent shadow-none"
          }`}
      >
        <div className="relative container mx-auto flex items-center justify-between px-4 md:px-0">
          {/* LOGO */}
          <a href="#" className="flex items-center gap-2 z-[60]">
            <img src={logo} alt="Logo" className="h-14 md:h-16" />
          </a>

          {/* MENU DESKTOP */}
          <ul className="hidden md:flex gap-2 text-sm font-medium absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-700">
            {navLinks.map((link) => (
              <motion.li key={link.to} className="relative">
                <a href={link.to} className="block px-4 py-2">
                  {link.label}
                </a>
                <motion.div
                  className="absolute bottom-1 left-0 right-0 h-0.5 bg-sky-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0.5 }}
                />
              </motion.li>
            ))}
          </ul>

          {/* Botão Dark Mode Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:flex items-center justify-center p-2 rounded-full z-[60]"
            aria-label="Alternar modo escuro"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* BOTÃO MENU MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-[60]"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((_, index) => (
              <span
                key={index}
                className={`block h-0.5 w-6 transform transition duration-300 ease-in-out rounded-full
                ${index === 0 ? (isOpen ? "rotate-45 translate-y-2" : "") : ""}
                ${index === 1 ? (isOpen ? "opacity-0" : "opacity-100") : ""}
                ${index === 2 ? (isOpen ? "-rotate-45 -translate-y-2" : "") : ""}
                ${"bg-sky-700"}`}
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
                className="absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col gap-2 py-5 md:hidden text-sky-700 font-medium z-40 border-t border-gray-200"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.to} variants={mobileMenuItemVariants}>
                    <a
                      href={link.to}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-center text-base"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                {/* Botão Dark Mode Mobile */}
                <motion.li className="flex justify-center mt-2">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center gap-2 px-4 py-2 rounded-md"
                  >
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                    {darkMode ? "Modo Claro" : "Modo Escuro"}
                  </button>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* BOTÃO VOLTAR AO TOPO */}
      <AnimatePresence>
        {hasScrolled && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.1, backgroundColor: "#0284c7" }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 bg-sky-500 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none"
            aria-label="Voltar ao topo"
          >
            <ArrowUpIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
