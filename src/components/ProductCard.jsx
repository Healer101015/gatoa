import { motion } from "framer-motion";

export default function ProductCard({ title, desc, img }) {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="relative max-w-sm w-full rounded-3xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-md border border-white/30 hover:shadow-2xl hover:backdrop-blur-lg group"
        >
            {/* Imagem de fundo */}
            <div
                className="h-56 w-full bg-cover bg-center transition-all duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${img})` }}
            />

            {/* Camada de conteúdo */}
            <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-sky-900 group-hover:text-sky-700 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {desc}
                </p>
            </div>

            {/* Brilho sutil */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-30 transition duration-700 bg-gradient-to-br from-white via-transparent to-white mix-blend-soft-light" />
        </motion.div>
    );
}
