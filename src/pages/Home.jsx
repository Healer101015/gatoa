import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import gatoaLogo from "./gatoa-logo.jpg"; // Importa a imagem do gato

// Dados estáticos das camisetas
const products = [
  {
    _id: "1",
    name: "Camiseta Preta Básica",
    description: "100% algodão, perfeita para o dia a dia.",
    price: 39.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415022494825316413/ULTIMA_CHANCE_Nosso_DROP_1.0_ta_chegando_ao_fim_e_essa_e_sua_ultima_oportunidade_de_garant.jpg?ex=68c1b1e4&is=68c06064&hm=586a98945552e61ec4b73b69b42735391b8f7387719fa0ea8d699a6f4077fa3a&=&format=webp&width=768&height=960",
  },
  {
    _id: "2",
    name: "Camiseta Branca Estampada",
    description: "Estampa exclusiva Gatoa.",
    price: 45.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023171546910730/PROMOCAO_FINAL_DE_ESTOQUE_Chegou_a_hora_de_garantir_as_ultimas_pecas_do_DROP_1.0_Leve_3_1.jpg?ex=68c1b285&is=68c06105&hm=9e0a815f4fa6b0b289fcf7aaa131e47fe87b7ce011e9395e3f1f3d4fa5b63119&=&format=webp&width=768&height=960",
  },
  {
    _id: "3",
    name: "Camiseta Cinza Mescla",
    description: "Conforto e estilo em uma só peça.",
    price: 39.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023417945624639/PRE-VENDA_LIBERADA_O_DROP_2.0_chegou_com_Edicoes_Limitadas_que_vao_fazer_seu_coracao_otaku.jpg?ex=68c1b2c0&is=68c06140&hm=30878746cffe3910544c226af58ceb063dcae9cd278a2efdd1ca7231f9769bc3&=&format=webp&width=768&height=960",
  },
  {
    _id: "4",
    name: "Camiseta Gato Astronauta",
    description: "Para os amantes de gatos e espaço.",
    price: 49.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023640680071188/Feliz_dia_dos_namorados_ATENCAO-Hoje_e_somente_hoje_leve_2_camisetas_pelo_preco_de_1_e_use_co.jpg?ex=68c1b2f5&is=68c06175&hm=f03d4ebad0a3d10a94c7568fe96689b6816063a6af3936b4116edc50cdabe5d1&=&format=webp&width=768&height=960",
  },
];

// Componente de Card de Promoção
function PromotionCard({ title, description, price }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm text-center p-6"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="text-3xl font-extrabold text-white">{price}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans text-white no-scrollbar">
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
          <p className="text-xl md:text-2xl text-gray-400">
            Estilo e conforto em cada peça.
          </p>
          {/* Imagem do gato adicionada aqui */}
          <motion.img
            src={gatoaLogo}
            alt="Logo Gatoa"
            className="mx-auto mt-8 w-48 h-48 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </motion.div>
      </section>

      {/* Seção de Camisetas */}
      <section id="camisetas" className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Nossas Camisetas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
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