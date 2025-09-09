import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import avatar from '../assets/gatoa-logo.jpg'; // Usaremos o logo como avatar

// Dados estáticos das camisetas
const products = [
  {
    _id: "1",
    name: "The Evil. Camisa Oversized",
    price: 99.00,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415022494825316413/ULTIMA_CHANCE_Nosso_DROP_1.0_ta_chegando_ao_fim_e_essa_e_sua_ultima_oportunidade_de_garant.jpg?ex=68c1b1e4&is=68c06064&hm=586a98945552e61ec4b73b69b42735391b8f7387719fa0ea8d699a6f4077fa3a&=&format=webp&width=768&height=960",
  },
  {
    _id: "2",
    name: "Makima-Camisa Oversized",
    price: 99.00,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023171546910730/PROMOCAO_FINAL_DE_ESTOQUE_Chegou_a_hora_de_garantir_as_ultimas_pecas_do_DROP_1.0_Leve_3_1.jpg?ex=68c1b285&is=68c06105&hm=9e0a815f4fa6b0b289fcf7aaa131e47fe87b7ce011e9395e3f1f3d4fa5b63119&=&format=webp&width=768&height=960",
  },
  {
    _id: "3",
    name: "Nika- Camisa Oversized",
    price: 99.00,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023417945624639/PRE-VENDA_LIBERADA_O_DROP_2.0_chegou_com_Edicoes_Limitadas_que_vao_fazer_seu_coracao_otaku.jpg?ex=68c1b2c0&is=68c06140&hm=30878746cffe3910544c226af58ceb063dcae9cd278a2efdd1ca7231f9769bc3&=&format=webp&width=768&height=960",
  },
  {
    _id: "4",
    name: "Gojo- Camisa Oversized",
    price: 99.00,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023640680071188/Feliz_dia_dos_namorados_ATENCAO-Hoje_e_somente_hoje_leve_2_camisetas_pelo_preco_de_1_e_use_co.jpg?ex=68c1b2f5&is=68c06175&hm=f03d4ebad0a3d10a94c7568fe96689b6816063a6af3936b4116edc50cdabe5d1&=&format=webp&width=768&height=960",
  },
];

const feedbacks = [
  {
    name: "Pedro",
    location: "Salvador, BA",
    comment: "Melhor camisa de anime que eu já comprei!! Veste super bem, indico a todos. Melhor loja!!",
    avatar: avatar
  },
  {
    name: "Pedro",
    location: "Salvador, BA",
    comment: "Melhor camisa de anime que eu já comprei!! Veste super bem, indico a todos. Melhor loja!!",
    avatar: avatar
  },
  {
    name: "Pedro",
    location: "Salvador, BA",
    comment: "Melhor camisa de anime que eu já comprei!! Veste super bem, indico a todos. Melhor loja!!",
    avatar: avatar
  },
  {
    name: "Pedro",
    location: "Salvador, BA",
    comment: "Melhor camisa de anime que eu já comprei!! Veste super bem, indico a todos. Melhor loja!!",
    avatar: avatar
  },
]

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans text-white no-scrollbar">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://media.discordapp.net/attachments/1379159762112876585/1415029746781261894/516543702_18412087525098859_7114017648274921577_n.jpg?ex=68c1b8a5&is=68c06725&hm=e7c1923b6569ebaa102a1015654763298eef90a7b52bab66ca2fddcb47b5750b&=&format=webp')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          </div>
        </section>

        {/* Novo Drop Section */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold uppercase" style={{ fontFamily: 'Teko, sans-serif' }}>
              <span className="text-red-600">Não Perca</span> o Novo Drop
            </h2>
            <p className="text-lg mt-2">USE O CUPOM PARA GANHAR 10% DE DESCONTO!</p>
            <p className="text-2xl font-bold text-red-600 mt-2">GATOAIO</p>
          </div>
        </section>


        {/* Mais Vendidos Section */}
        <section id="camisetas" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-extrabold mb-12 uppercase"
              style={{ fontFamily: 'Teko, sans-serif' }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Mais Vendidos <span className="text-red-600">Pra você ficar no estilo</span>
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {products.map((product) => (
                <motion.div key={product._id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Feedbacks Section */}
        <section className="py-16" style={{ backgroundColor: '#d35944' }}>
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl uppercase" style={{ fontFamily: 'Teko, sans-serif' }}>
              CLIENTES
            </h3>
            <h2 className="text-5xl font-extrabold uppercase" style={{ fontFamily: 'Teko, sans-serif' }}>
              FEEDBACKS
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {feedbacks.map((feedback, index) => (
                <motion.div key={index} variants={itemVariants} className="bg-transparent p-6 rounded-lg border border-white flex flex-col justify-between">
                  <p className="text-white italic text-left mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    "{feedback.comment}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={feedback.avatar} alt={feedback.name} className="w-12 h-12 rounded-full bg-black" />
                    <div className="text-left">
                      <p className="font-bold text-white" style={{ fontFamily: 'Teko, sans-serif' }}>{feedback.name}</p>
                      <p className="text-sm text-white" style={{ fontFamily: 'Teko, sans-serif' }}>{feedback.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}