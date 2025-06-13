"use client";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  bgColor: string;
  icon: React.ReactNode;
  onClick: () => void;
};

export function Card({ title, bgColor, icon, onClick }: CardProps) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-xl p-6 relative flex flex-col items-center justify-center text-white"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-20 h-20 mb-4">{icon}</div>

      <h3 className="text-xl text-center font-semibold leading-snug">
        {title}
      </h3>

      <motion.button
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400 }}
        onClick={onClick}
        className="absolute top-2 right-2 bg-white text-gray-800 rounded-full w-7 h-7 flex items-center justify-center shadow"
      >
        <Plus size={16} />
      </motion.button>
    </motion.div>
  );
}