import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
    return (
        <motion.div
            whileHover={{ y: -8, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)' }}
            className="bg-brand-dark-gray rounded-lg shadow-card overflow-hidden flex flex-col group relative"
        >
            {product.isNew && (
                <div className="absolute top-3 right-3 bg-brand-accent text-brand-secondary text-xs font-bold px-2 py-1 rounded-full z-10">
                    NOVO
                </div>
            )}
            <div className="overflow-hidden">
                <motion.img
                    src={product.imageUrl || "https://via.placeholder.com/300x400"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1 text-brand-primary">{product.name}</h3>
                <p className="text-sm text-brand-light-gray mb-4 flex-grow">
                    {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-xl font-bold text-brand-primary">
                        R$ {product.price.toFixed(2)}
                    </p>
                    <button className="bg-brand-accent text-brand-secondary px-4 py-2 rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2 font-semibold">
                        <ShoppingCart size={16} />
                        Adicionar
                    </button>
                </div>
                <p className="text-xs text-brand-light-gray mt-2">{product.stock} em estoque</p>
            </div>
        </motion.div>
    );
}