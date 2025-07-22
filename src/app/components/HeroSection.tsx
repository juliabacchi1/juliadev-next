"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { Download } from "lucide-react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function HeroSection() {
  return (
    // Background estático (sem animação)
    <section
      id="hero"
      className="w-full min-h-screen bg-custom-gradient flex items-center justify-center px-8 text-gray-800"
    >
      {/* Container animado */}
      <motion.div
        className="container mx-auto max-w-4xl lg:max-w-5xl flex flex-col md:flex-row items-center gap-6 md:gap-12"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Lado esquerdo - Texto */}
        <div className="md:w-1/2 space-y-8">
          <motion.h3
            variants={itemVariants}
            className="block md:hidden text-lg font-semibold"
          >
            Portfolio Julia Bacchi
          </motion.h3>

          <motion.h1
            variants={itemVariants}
            className="leading-[1.15] md:leading-[1.1]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Desenvolvendo{" "}
            <motion.span
              className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              tecnologia
            </motion.span>{" "}
            com cara de lar
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="flex w-3/4 gap-4 ipad-fix"
          >
            <Button
              variant="default"
              className="flex-1"
              data-analytics="sobre_mim_click"
              onClick={() =>
                document
                  .getElementById("sobre")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              sobre mim
            </Button>
            <Button
              variant="gray"
              className="flex-1 hidden md:inline-flex"
              href="/JuliaBacchi_DesenvolvedoraFrontEnd_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="curriculo_click"
            >
              currículo
            </Button>
          </motion.div>
        </div>

        {/* Lado direito - Imagem */}
        <motion.div
          className="hidden md:block md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <div className="relative aspect-square w-full">
            <Image
              src="/computador.webp"
              alt="Computador com código"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Botão flutuante */}
      <motion.div
        className="fixed bottom-4 right-4 md:hidden z-50"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="/JuliaBacchi_DesenvolvedoraFrontEnd_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-analytics="curriculo_floating_click"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 text-white rounded-full shadow-lg text-sm font-medium hover:bg-gray-700 transition"
        >
          <Download size={20} />
          Currículo
        </a>
      </motion.div>
    </section>
  );
}
