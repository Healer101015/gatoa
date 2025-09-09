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
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415031707211530270/Camiseta_Oversized_Makima_Um_corte_minimalista_na_frente_de_uma_grande_arte_atras_Garanta_.jpg?ex=68c1ba79&is=68c068f9&hm=ece31d7aa80bec93b0fbc008e311739fb380047297ce2e863cc340732033db8d&=&format=webp&width=565&height=706",
  },
  {
    _id: "2",
    name: "Makima-Camisa Oversized",
    price: 99.00,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415031467305603072/Camiseta_Oversized-_One_Piece_Entrega_para_todo_o_Brasil_.jpg?ex=68c1ba3f&is=68c068bf&hm=4d61e55d9bac2dd8b3230b6ba83a96c37e08e5312c60f48a246a988ccb7e0d59&=&format=webp&width=565&height=706",
  },
  {
    _id: "3",
    name: "Nika- Camisa Oversized",
    price: 99.00,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415031707211530270/Camiseta_Oversized_Makima_Um_corte_minimalista_na_frente_de_uma_grande_arte_atras_Garanta_.jpg?ex=68c1ba79&is=68c068f9&hm=ece31d7aa80bec93b0fbc008e311739fb380047297ce2e863cc340732033db8d&=&format=webp&width=565&height=706",
  },
  {
    _id: "4",
    name: "Gojo- Camisa Oversized",
    price: 99.00,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023640680071188/Feliz_dia_dos_namorados_ATENCAO-Hoje_e_somente_hoje_leve_2_camisetas_pelo_preco_de_1_e_use_co.jpg?ex=68c1b2f5&is=68c06175&hm=f03d4ebad0a3d10a94c7568fe96689b6816063a6af3936b4116edc50cdabe5d1&=&format=webp&width=565&height=706",
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
        {/* Hero Section 1 */}
        <section
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://media.discordapp.net/attachments/1379159762112876585/1415051990270218382/70af2881c5da1d820e2e2c9e1543ccc6.png?ex=68c1cd5c&is=68c07bdc&hm=d895218a2ebee97149cc8a8df1a0e0f71473e52cdb3d36bddba0c56d3dd5a0f8&=&format=webp&quality=lossless')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
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

          {/* Produtos Novo Drop */}
          <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>

        {/* Hero Section 2 */}
        <section
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://media.discordapp.net/attachments/1379159762112876585/1415051990270218382/70af2881c5da1d820e2e2c9e1543ccc6.png?ex=68c1cd5c&is=68c07bdc&hm=d895218a2ebee97149cc8a8df1a0e0f71473e52cdb3d36bddba0c56d3dd5a0f8&=&format=webp&quality=lossless')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"></div>
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
              {products.concat(products).map((product, index) => (
                <motion.div key={index} variants={itemVariants}>
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
