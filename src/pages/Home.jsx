import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import logo from '../assets/gatoa-logo.jpg'; // Importando o logo
import { Truck, ShieldCheck, Award } from 'lucide-react';

// Dados estáticos das camisetas (mais produtos adicionados)
const products = [
  {
    _id: "1",
    name: "Camiseta Preta Gatoa",
    description: "100% algodão, perfeita para o dia a dia.",
    price: 49.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415022494825316413/ULTIMA_CHANCE_Nosso_DROP_1.0_ta_chegando_ao_fim_e_essa_e_sua_ultima_oportunidade_de_garant.jpg?ex=68c1b1e4&is=68c06064&hm=586a98945552e61ec4b73b69b42735391b8f7387719fa0ea8d699a6f4077fa3a&=&format=webp&width=768&height=960",
    isNew: true,
    stock: 15,
  },
  {
    _id: "2",
    name: "Camiseta Branca Estampada",
    description: "Estampa exclusiva Gatoa com toque macio.",
    price: 55.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023171546910730/PROMOCAO_FINAL_DE_ESTOQUE_Chegou_a_hora_de_garantir_as_ultimas_pecas_do_DROP_1.0_Leve_3_1.jpg?ex=68c1b285&is=68c06105&hm=9e0a815f4fa6b0b289fcf7aaa131e47fe87b7ce011e9395e3f1f3d4fa5b63119&=&format=webp&width=768&height=960",
    isNew: true,
    stock: 22,
  },
  {
    _id: "3",
    name: "Camiseta Cinza Mescla",
    description: "Conforto e estilo em uma só peça.",
    price: 49.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023417945624639/PRE-VENDA_LIBERADA_O_DROP_2.0_chegou_com_Edicoes_Limitadas_que_vao_fazer_seu_coracao_otaku.jpg?ex=68c1b2c0&is=68c06140&hm=30878746cffe3910544c226af58ceb063dcae9cd278a2efdd1ca7231f9769bc3&=&format=webp&width=768&height=960",
    isNew: false,
    stock: 30,
  },
  {
    _id: "4",
    name: "Camiseta Gato Astronauta",
    description: "Para os amantes de gatos e espaço.",
    price: 59.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415023640680071188/Feliz_dia_dos_namorados_ATENCAO-Hoje_e_somente_hoje_leve_2_camisetas_pelo_preco_de_1_e_use_co.jpg?ex=68c1b2f5&is=68c06175&hm=f03d4ebad0a3d10a94c7568fe96689b6816063a6af3936b4116edc50cdabe5d1&=&format=webp&width=768&height=960",
    isNew: false,
    stock: 12,
  },
  {
    _id: "5",
    name: "Moletom Gatoa Preto",
    description: "Moletom canguru com capuz, flanelado por dentro.",
    price: 129.90,
    imageUrl: "https://media.discordapp.net/attachments/915047339448737802/1415035023714680862/Camiseta_Freedom_de_Attack_on_Titan_E_mais_que_uma_estampa_e_um_grito_por_liberdade_Adqui.jpg?ex=68c1bd8f&is=68c06c0f&hm=6e82780be478df6758b45788ab3eccaf73c4ac88454dd89bcda315fa2c152ba0&=&format=webp&width=768&height=960",
    isNew: true,
    stock: 8,
  },
  {
    _id: "6",
    name: "Camiseta Gato Samurai",
    description: "Estilo oriental com a fofura de um gato.",
    price: 59.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415031707211530270/Camiseta_Oversized_Makima_Um_corte_minimalista_na_frente_de_uma_grande_arte_atras_Garanta_.jpg?ex=68c1ba79&is=68c068f9&hm=ece31d7aa80bec93b0fbc008e311739fb380047297ce2e863cc340732033db8d&=&format=webp&width=768&height=960",
    isNew: false,
    stock: 18,
  },
  {
    _id: "7",
    name: "Camiseta Gato Nerd",
    description: "Para os gateiros que amam tecnologia.",
    price: 55.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415031467305603072/Camiseta_Oversized-_One_Piece_Entrega_para_todo_o_Brasil_.jpg?ex=68c1ba3f&is=68c068bf&hm=4d61e55d9bac2dd8b3230b6ba83a96c37e08e5312c60f48a246a988ccb7e0d59&=&format=webp&width=768&height=960",
    isNew: false,
    stock: 25,
  },
  {
    _id: "8",
    name: "Boné Gatoa",
    description: "Boné de aba curva com logo bordado.",
    price: 39.90,
    imageUrl: "https://media.discordapp.net/attachments/1379159762112876585/1415031048017940611/Camiseta_Oversid_Makima_Adquira_ja_a_sua_em_nosso_site_.jpg?ex=68c1b9db&is=68c0685b&hm=b714297809e9f9a40e091e9709e6e43ff89e0740ce0a75a7355ef4b5dae274af&=&format=webp&width=768&height=960",
    isNew: true,
    stock: 10,
  },
];
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
    <div className="flex flex-col min-h-screen bg-brand-secondary font-sans text-brand-primary no-scrollbar">
      <Navbar />

      <main>
        {/* Hero Section com Logo */}
        <div className="text-center py-16 bg-brand-secondary">
          <img src={logo} alt="Gatoa Logo" className="mx-auto w-48 h-48 object-cover rounded-full shadow-lg border-4 border-brand-accent" />
          <h1 className="text-5xl font-bold mt-6 text-brand-primary">Gatoa</h1>
          <p className="text-lg text-brand-light-gray mt-2">Camisetas com estampas de gatos</p>
        </div>

        {/* Seção de Benefícios */}
        <motion.section
          className="py-12 bg-brand-dark-gray"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <Truck className="h-10 w-10 text-brand-accent mb-2" />
                <h3 className="text-lg font-semibold">Frete Rápido</h3>
                <p className="text-sm text-brand-light-gray">Receba seus produtos em tempo recorde.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <ShieldCheck className="h-10 w-10 text-brand-accent mb-2" />
                <h3 className="text-lg font-semibold">Compra Segura</h3>
                <p className="text-sm text-brand-light-gray">Seus dados protegidos do início ao fim.</p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex flex-col items-center">
                <Award className="h-10 w-10 text-brand-accent mb-2" />
                <h3 className="text-lg font-semibold">Qualidade Garantida</h3>
                <p className="text-sm text-brand-light-gray">Camisetas feitas para durar.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Seção de Camisetas */}
        <section id="camisetas" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nossos Produtos
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

        {/* Seção Sobre Nós */}
        <section className="bg-brand-dark-gray py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold text-brand-primary mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Sobre a Gatoa
            </motion.h2>
            <motion.p
              className="text-lg text-brand-light-gray"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A Gatoa nasceu da paixão por gatos e design. Criamos camisetas e produtos com estampas exclusivas que celebram o universo felino com muito estilo e criatividade. Cada peça é pensada para quem, assim como nós, é louco por gatos.
            </motion.p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}