"use client";

import { useState } from "react";
import { Card } from "./blog/Card";
import { DataCards } from "./blog/data/DataCards";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BlogSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleClose = () => {
    setActiveCard(null);
  };

  return (
    <section
      id="blog"
      className="w-full min-h-screen px-6 py-10 relative bg-[#fffdfc]"
    >
      <h2 className="text-4xl md:text-6xl mb-8 text-center">Blog</h2>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${
          activeCard !== null ? 2 : 4
        } gap-4 transition-all duration-300`}
      >
        {DataCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            bgColor={card.bgColor}
            icon={card.icon}
            onClick={() => setActiveCard(index)}
          />
        ))}
      </div>

      {/* Painel lateral */}
      <AnimatePresence>
        {activeCard !== null && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fixed top-0 right-0 w-full md:w-1/2 h-full bg-white shadow-xl z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="text-2xl font-bold uppercase tracking-widest">
                {DataCards[activeCard].title}
              </h3>
              <button onClick={handleClose}>
                <X size={24} />
              </button>
            </div>
            <div className="mt-6 text-gray-700 leading-relaxed overflow-y-auto">
              {DataCards[activeCard].content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
