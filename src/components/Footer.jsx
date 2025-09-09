import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 text-sm">
      <div className="container mx-auto flex flex-row flex-wrap justify-between items-start gap-6 px-4">
        {/* Coluna 1 */}
        <div className="w-[45%] sm:w-[30%]">
          <h4 className="font-semibold text-sky-500 mb-3">Informação</h4>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="/sobre" className="hover:text-sky-600 transition">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="/privacidade" className="hover:text-sky-600 transition">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 2 */}
        <div className="w-[45%] sm:w-[30%]">
          <h4 className="font-semibold text-sky-500 mb-3">Ajuda</h4>
          <ul className="text-gray-600 space-y-2">
            <li>
              <a href="/como-comprar" className="hover:text-sky-600 transition">
                Como comprar
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-sky-600 transition">
                Perguntas frequentes
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-sky-600 transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div className="w-full sm:w-[30%]">
          <h4 className="font-semibold text-sky-500 mb-3">Redes Sociais</h4>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-center gap-2 hover:text-sky-600 transition cursor-pointer">
              <FaInstagram />
              <a
                href="https://instagram.com/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-sky-600 transition cursor-pointer">
              <FaLinkedin />
              <a
                href="https://linkedin.com/in/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-sky-600 transition cursor-pointer">
              <FaWhatsapp />
              <a
                href="https://wa.me/seunumerodetelefone"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-400 mt-10">
        © 2025 Angels. Todos os direitos reservados.
      </p>
    </footer>
  );
}
