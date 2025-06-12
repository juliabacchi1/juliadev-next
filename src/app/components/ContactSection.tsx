"use client";

import Image from "next/image";
import Button from "./Button";
import { Headset, Github, Linkedin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="w-full min-h-screen relative flex items-center justify-center text-gray-800 px-6"
    >
      {/* Imagem de fundo */}
      <Image
        src="/background.webp"
        alt="Imagem de fundo"
        fill
        priority
        className="object-cover -z-10"
      />

      <div className="text-center w-full max-w-xl mx-auto">
        <h2 className="font-bold font-serif text-contactstyle leading-tight text-[clamp(2rem,5vw,3.5rem)] mb-3 sm:mb-4">
          E agora?!
        </h2>
        <p className="text-[clamp(1.125rem,3vw,1.75rem)] leading-relaxed mb-6 sm:mb-8">
          Bora trabalhar juntos
        </p>

        {/* Ícones */}
        <div className="flex gap-4 sm:gap-6 justify-center my-6 sm:my-8">
          <a
            href="https://wa.me/48991779743?text=Ol%C3%A1%20Julia%2C%20te%20achei%20atrav%C3%A9s%20do%20seu%20Portfolio%21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contato via WhatsApp"
            className="transition-transform duration-300 hover:scale-110 hover:text-green-500 p-2"
          >
            <Headset className="w-6 h-6 md:w-7 md:h-7" />
          </a>

          <a
            href="https://github.com/juliabacchi1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no GitHub"
            className="transition-transform duration-300 hover:scale-110 hover:text-gray-600 p-2"
          >
            <Github className="w-6 h-6 md:w-7 md:h-7" />
          </a>

          <a
            href="https://www.linkedin.com/in/juliabacchi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn"
            className="transition-transform duration-300 hover:scale-110 hover:text-blue-600 p-2"
          >
            <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
          </a>

          <a
            href="mailto:juliabacchi92@gmail.com"
            aria-label="Enviar e-mail"
            className="transition-transform duration-300 hover:scale-110 hover:text-red-500 p-2"
          >
            <Send className="w-6 h-6 md:w-7 md:h-7" />
          </a>
        </div>

        {/* Botão Blog */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Button
            variant="default"
            className="w-full max-w-[200px] py-3 text-sm md:text-base"
            onClick={() => {
              const section = document.getElementById("blog");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            blog tech
          </Button>
        </div>
      </div>
    </section>
  );
}
