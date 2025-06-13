"use client";

import Image from "next/image";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="w-full min-h-screen flex flex-col md:flex-row text-gray-800"
    >
      {/* Lado esquerdo - Imagem (só desktop) */}
      <div className="hidden md:flex bg-aboutleft w-full md:w-1/2 items-center justify-center p-8">
        <div className="w-4/5 max-w-sm relative">
          <Image
            src="/profile.avif"
            alt="Foto de perfil de Júlia Bacchi"
            width={400}
            height={500}
            className="object-contain rounded-2xl shadow-xl w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Lado direito - Texto (mobile e desktop) */}
      <div className="w-full min-h-screen bg-aboutright md:w-1/2 flex flex-col justify-center p-8">
        <div className="max-w-xl mx-auto space-y-6 text-left py-8 md:py-0">
          {/* Imagem apenas no mobile */}
          <div className="md:hidden w-full flex justify-center">
            <Image
              src="/profile.avif"
              alt="Foto de perfil de Júlia Bacchi"
              width={250}
              height={300}
              className="object-contain rounded-2xl shadow-xl mb-4 w-[clamp(230px,40vw,280px)] devicebig"
            />
          </div>

          <h2 className="font-bold leading-snug md:leading-tight font-serif text-abouttext text-[clamp(2rem,6vw,2.75rem)] md:text-6xl">
            Olá, seja <br className="hidden md:block" />
            bem-vindo
          </h2>

          <p className="text-[clamp(1rem,2.5vw,1.125rem)] md:text-lg leading-relaxed">
            Sou Júlia Bacchi, desenvolvedora front-end, libriana, mãe de pet e
            apaixonada por inovação digital. Acredito que a tecnologia deve ser
            intuitiva, impactante e uma força para o bem.
            <br />
            Vem comigo transformar padrões e repensar a maneira como nos
            conectamos online.
          </p>

          {/* Botões */}
          <div className="flex w-3/4 md:w-3/5 gap-4 ipad-fix">
            <Button
              variant="red"
              className="flex-1"
              onClick={() => {
                const section = document.getElementById("tecnologias");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              tecnologias
            </Button>
            <Button
              variant="pink"
              className="flex-1 hidden md:inline-flex"
              onClick={() => {
                const section = document.getElementById("contato");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              me chama
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
