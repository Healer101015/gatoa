import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Cat } from 'lucide-react';

export default function Footer() {
  return (
    // Usando bg-brand-black para garantir o fundo preto e uma borda cinza mais clara
    <footer className="bg-brand-black text-brand-white border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">

          {/* Logo e Nome */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="flex items-center gap-2 text-brand-white">
              <Cat size={32} />
              <span className="text-xl font-bold">Gatoa</span>
            </a>
            <p className="text-sm text-brand-gray mt-2">
              Estilo e conforto em cada peça.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="text-center">
            <h4 className="font-semibold mb-2 uppercase tracking-wider">Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="text-brand-white hover:text-brand-gray transition-colors">Home</a></li>
              <li><a href="#promocoes" className="text-brand-white hover:text-brand-gray transition-colors">Promoções</a></li>
              <li><a href="#" className="text-brand-white hover:text-brand-gray transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-2 uppercase tracking-wider">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Instagram" className="text-2xl text-brand-white hover:text-brand-gray transition-colors">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Whatsapp" className="text-2xl text-brand-white hover:text-brand-gray transition-colors">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="text-center text-brand-gray text-sm mt-8 pt-6 border-t border-gray-800">
          <p>&copy; {new Date().getFullYear()} Gatoa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}