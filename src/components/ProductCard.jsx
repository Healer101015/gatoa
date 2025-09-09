import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
            <img
                src={product.imageUrl || "https://via.placeholder.com/300x400"}
                alt={product.name}
                className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-grow">
                    {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-xl font-bold text-white">
                        R$ {product.price.toFixed(2)}
                    </p>
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                        Adicionar
                    </button>
                </div>
            </div>
        </motion.div>
    );
}