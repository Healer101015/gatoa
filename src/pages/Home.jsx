import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Componente de Card de Promoção
function PromotionCard({ title, description, price }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-brand-white text-brand-black rounded-lg shadow-lg overflow-hidden w-full max-w-sm text-center p-6"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-brand-gray mb-4">{description}</p>
      <div className="text-3xl font-extrabold text-black">{price}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black font-sans text-brand-white no-scrollbar">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Gatoa Camisetas
          </h1>
          <p className="text-xl md:text-2xl text-brand-gray">
            Estilo e conforto em cada peça.
          </p>
        </motion.div>
      </section>

      {/* Seção de Promoções */}
      <section id="promocoes" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Promoções Imperdíveis</h2>
          <div className="flex flex-wrap gap-10 justify-center">
            <PromotionCard
              title="Leve 2, Pague 1.5"
              description="A segunda camiseta sai pela metade do preço!"
              price="R$60,00"
            />
            <PromotionCard
              title="Combo 3 Camisetas"
              description="Três camisetas por um preço especial."
              price="R$89,90"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}