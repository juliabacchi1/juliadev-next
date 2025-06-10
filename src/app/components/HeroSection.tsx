"use client";

import Image from "next/image";
import Button from "./Button";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen bg-custom-gradient flex items-center justify-center px-8 text-gray-800"
    >
      <div className="container mx-auto max-w-4xl lg:max-w-5xl flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Lado esquerdo - Texto e botões */}
        <div className="md:w-1/2 space-y-8">
          <h1
            className="leading-[1.15] md:leading-[1.1]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            Desenvolvendo{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              tecnologia
            </span>{" "}
            com cara de lar
          </h1>

          <div className="flex w-3/4 gap-4">
            <Button
              variant="default"
              className="flex-1"
              onClick={() => {
                const section = document.getElementById("sobre");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              sobre mim
            </Button>

            <Button
              variant="gray"
              className="flex-1 hidden md:inline-flex"
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              currículo
            </Button>
          </div>
        </div>

        {/* Lado direito - Imagem */}
        <div className="md:w-1/2">
          <div className="relative aspect-square w-full">
            <Image
              src="/computador.webp"
              alt="Computador com código"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Sticky botão para baixar currículo - visível só no mobile */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <a
          href="/curriculo.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 text-white rounded-full shadow-lg text-sm font-medium hover:bg-gray-700 transition"
        >
          <Download size={20} />
          Currículo
        </a>
      </div>
    </section>
  );
}
