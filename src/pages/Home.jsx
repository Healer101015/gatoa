import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import SolutionsSection from "../components/SolutionsSection";
import FlyingWings from "../components/FlyingWings";
import BotaoAnimado from "../components/BotaoAnimado";
import blurBackground from "../assets/blur-background.png";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaQuoteLeft,
} from "react-icons/fa";

// Imagens locais
import portfolioImg from "../assets/portfolio.png";
import ecommerceImg from "../assets/ecommerce.png";
import deliveryImg from "../assets/delivery.png";

// Variantes para animações
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -80 : 80,
    y: Math.floor(Math.random() * 50),
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Card no padrão SolutionsSection
function ProductCard({ title, desc, img, custom }) {
  return (
    <motion.div
      variants={itemVariants}
      custom={custom}
      animate={{ y: [0, -4, 0, -2, 0] }}
      transition={{ duration: 5 + custom, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{
        scale: 1.08,
        rotateX: 3,
        rotateY: -3,
        boxShadow: "0 20px 35px rgba(14, 165, 233, 0.35)",
      }}
      whileTap={{ scale: 0.96 }}
      className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden w-full max-w-sm"
    >
      <div className="w-full h-48 overflow-hidden">
        <motion.img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-sky-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{desc}</p>
        <BotaoAnimado href="#contato" className="py-1 px-4 text-sm">
          Saber mais
        </BotaoAnimado>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const projectsData = [
    {
      title: "Portfólio Criativo",
      desc: "Design moderno, velocidade otimizada e excelente UX.",
      img: portfolioImg,
    },
    {
      title: "E-commerce Tech",
      desc: "Plataforma de vendas completa com integrações de pagamento.",
      img: ecommerceImg,
    },
    {
      title: "App de Delivery",
      desc: "Aplicativo intuitivo para conectar restaurantes e clientes.",
      img: deliveryImg,
    },
  ];

  const testimonialsData = [
    {
      quote:
        "O time da Angels entregou meu site em tempo recorde e com qualidade excelente!",
      author: "Ana Silva",
      company: "CEO da TechFlow",
    },
    {
      quote:
        "Profissionalismo e criatividade definem o trabalho. Nosso app ficou incrível!",
      author: "Marcos Lopes",
      company: "Diretor da InovaHealth",
    },
    {
      quote:
        "Superaram nossas expectativas em todos os aspectos do projeto. Recomendo!",
      author: "Juliana Costa",
      company: "Gerente da ArtDecor",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-body text-gray-800 no-scrollbar">
      <Navbar />
      <HeroSection />

      {/* Sobre */}
      <section
        id="sobre"
        className="relative bg-gradient-to-b from-gray-100 via-white to-gray-50 py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-sky-200/30" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <FlyingWings>
              <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-transparent animate-pulse">
                Conectamos Ideias ao Mundo Digital
              </span>
            </FlyingWings>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos a <strong className="text-sky-800">Angels</strong>, uma
              empresa especializada na criação de soluções digitais que
              transformam visões em experiências reais.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nosso propósito é impulsionar negócios e criar conexões autênticas
              entre marcas e pessoas — tudo com estratégia, tecnologia e
              criatividade.
            </p>
            <BotaoAnimado href="#contato">Fale Conosco</BotaoAnimado>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-80 h-80 bg-sky-200/50 rounded-full flex items-center justify-center">
              <motion.svg
                className="w-40 h-40 text-sky-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                animate={{ rotate: [-5, 5, -5] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </motion.svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Soluções */}
      <SolutionsSection />

      {/* Projetos */}
      <section
        id="projetos"
        className="relative bg-gradient-to-b from-gray-100 via-white to-gray-50 py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-sky-200/30" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <FlyingWings>
            <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-transparent animate-pulse">
              Projetos
            </span>
          </FlyingWings>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Confira algumas ideias criadas com inovação, design moderno e foco
            em resultados reais.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-10 justify-center"
          >
            {projectsData.map((item, i) => (
              <ProductCard key={i} {...item} custom={i} />
            ))}
          </motion.div>
        </div>
      </section>


      {/* Oferta Especial */}
      <section
        className="relative bg-gradient-to-b from-gray-100 via-white to-gray-50 py-24 px-8 overflow-hidden rounded-3xl my-0"
      >
        {/* Fundo suave igual ao resto do site */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-sky-200/30 rounded-3xl" />

        {/* Conteúdo em destaque com z-index e largura controlada */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-sky-600 via-sky-400 to-sky-600 bg-clip-text text-transparent animate-pulse">
            Garanta 15% OFF no seu primeiro projeto!
          </h3>

          <p className="text-gray-700 mb-8 text-lg md:text-xl font-light max-w-xl mx-auto">
            Fale com a gente e tire sua ideia do papel com um preço especial.
          </p>

          <BotaoAnimado href="#contato" className="py-1 px-4 text-sm">
            Solicitar Orçamento
          </BotaoAnimado>
        </div>
      </section>






      {/* Depoimentos */}
      <section
        id="depoimentos"
        className="relative bg-gradient-to-b from-gray-100 via-white to-gray-50 py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-sky-200/30" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <FlyingWings>
            <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-transparent animate-pulse">
              O que nossos clientes dizem
            </span>
          </FlyingWings>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap gap-8 justify-center mt-12"
          >
            {testimonialsData.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                custom={i}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg border text-left relative max-w-sm"
              >
                <FaQuoteLeft className="absolute top-4 left-6 text-5xl text-sky-100 -z-0" />
                <p className="relative z-10 text-gray-600 italic mb-6">
                  “{item.quote}”
                </p>
                <div className="font-bold text-sky-700">{item.author}</div>
                <div className="text-sm text-gray-500">{item.company}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="relative bg-gradient-to-b from-gray-100 via-white to-gray-50 py-24 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-transparent to-sky-200/30" />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <FlyingWings>
              <span className="bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 bg-clip-text text-transparent animate-pulse">
                Fale com a gente
              </span>
            </FlyingWings>
            <div className="space-y-4 text-gray-600 mt-6">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-sky-600" /> Av. Paulista, 1765 -
                Bela Vista, São Paulo
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-sky-600" /> contato@angelsdev.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-sky-600" /> (11) 99999-9999
              </p>
              <p className="flex items-center gap-3">
                <FaClock className="text-sky-600" /> Seg a Sex - 09:00 às 18:00
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-80 rounded-lg shadow-xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.145945329153!2d-46.658822385542!3d-23.56302898468165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5994f2e15a2f%3A0x6aaf2490c5a2c4f!2sAv.%20Paulista%2C%201765%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1689298871234!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização AngelsDev"
              className="border-0"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
