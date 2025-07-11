"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      name: "Landing page Oficial",
      description:
        "Landing page dos meus serviços como desenvolvedora. Design focado em conversão, com CMS headless para gestão de conteúdo. Feita com Next.js, TailwindCSS e Sanity CMS.",
      view: "/images/landings.webp",
      alt: "Visualização Landing page Oficial",
      link: "https://landings-julia.vercel.app/",
    },
    {
      name: "Landing page Ebook Tarot",
      description:
        "Landing page para venda de ebook. Design intuitivo, pensado na conexão emocional com o público. Criado em Next.js com integração de analytics e efeitos interativos.",
      view: "/images/ebook.webp",
      alt: "Visualização Landing page Ebook Tarot",
      link: "https://portaldarkmoon.com/ebook-vivenciando-os-arcanos",
    },
    {
      name: "Site MXM Manutenção",
      description:
        "Site institucional para empresa de climatização, focado em apresentar serviços, contato rápido e confiabilidade. Desenvolvido com Next.js para performance e design responsivo.",
      view: "/images/mxm.webp",
      alt: "Visualização do site MXM Manutenção",
      link: "https://mxm-manutencao.vercel.app/",
    },
    {
      name: "Bora!",
      description:
        "App de checklist de viagem com interface visual intuitiva. Organize itens por categorias e facilite o planejamento da sua próxima aventura. Feito com React, Vite e TailwindCSS.",
      view: "/images/bora.webp",
      alt: "Visualização Bora!",
      link: "https://bora-app-jet.vercel.app/",
    },
    {
      name: "DarkMoon",
      description:
        "Site institucional moderno e responsivo, desenvolvido com foco em performance e identidade visual impactante. Construído com Next.js e TailwindCSS.",
      view: "/images/darkmoon.webp",
      alt: "Visualização DarkMoon",
      link: "https://portaldarkmoon.com/",
    },
    {
      name: "Portal Rick and Morty",
      description:
        "Plataforma interativa com quiz, galeria e gamificação. Consome API, usa filtros e gerenciamento de estado global. Experiência divertida e responsiva, feita com React.",
      view: "/images/rickandmorty.webp",
      alt: "Visualização Portal Rick and Morty",
      link: "https://portal-rickandmorty.vercel.app/",
    },
    {
      name: "ecotasks",
      description:
        "Desafios sustentáveis para transformar hábitos e reduzir a pegada de carbono. Focado em ações diárias práticas, com design leve e acessível. Desenvolvido com React.",
      view: "/images/ecotasks.webp",
      alt: "Visualização ecotasks",
      link: "https://ecotasks.vercel.app/",
    },
    {
      name: "Rota Baleia Franca",
      description:
        "Landing page informativa para rota turística no litoral catarinense. Estrutura acessível, responsiva e com carregamento otimizado. Criada com WordPress.",
      view: "/images/rotabaleia.webp",
      alt: "Visualização Baleia Franca",
      link: "https://rotabaleiafranca.com.br/",
    },
    {
      name: "Kitchen Assistant",
      description:
        "Gere receitas com ajuda de IA a partir dos ingredientes disponíveis. Projeto que une criatividade e tecnologia com uso da API da OpenAI. Feito com JavaScript.",
      view: "/images/recipes.webp",
      alt: "Visualização Recipes Generator",
      link: "https://recipes-generator-ai.netlify.app/",
    },
  ];

  const [index, setIndex] = useState(0);
  const { name, description, view, alt, link } = projects[index];

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  useEffect(() => {
    const nextIndex = (index + 1) % projects.length;
    const nextImage = new window.Image();
    nextImage.src = projects[nextIndex].view;
  }, [index]);

  return (
    <section
      id="trabalhos"
      className="w-full min-h-screen bg-white text-gray-800 flex flex-col md:flex-row items-center md:justify-center px-6 py-16 md:py-0"
    >
      <div className="w-full md:w-[30%] md:my-2 md:mx-10 flex flex-col">
        <h2 className="leading-snug md:leading-tight text-[clamp(2rem,6vw,3.5rem)] md:text-6xl mb-6">
          Trabalhos
        </h2>
        <p className="text-[clamp(1rem,2.5vw,1.125rem)] md:text-lg leading-relaxed md:text-start text-gray-800 mb-8 max-w-md">
          Projetos selecionados que demonstram minha evolução e abordagem
          criativa.
        </p>

        {/* Botão "me chama" - visível só no desktop */}
        <div className="hidden md:flex w-full">
          <Button
            variant="work"
            className="w-3/4 md:w-full md:max-w-[200px]"
            data-analytics="work_me_chama_click"
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

      {/* Conteúdo do projeto */}
      <div className="w-full md:w-[70%] flex flex-col md:flex-row md:px-12 gap-6">
        <motion.div
          className="w-full flex flex-col sm:flex-row gap-4 p-4 sm:p-6 rounded-xl bg-gray-50 shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ touchAction: "pan-y" }}
        >
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full sm:w-1/2 h-[200px] sm:h-[250px] md:h-[400px] lg:h-[550px]"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
              data-analytics={`work_project_${name
                .toLowerCase()
                .replace(/\s+/g, "")}_click`}
            >
              <Image
                src={view}
                alt={alt}
                fill
                className="object-contain"
                priority={index === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </a>
          </motion.div>

          {/* Texto + botões */}
          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-semibold mb-3">{name}</h3>
            <p className="text-sm md:text-base">{description}</p>
            <div className="flex flex-col w-full mt-6">
              <div className="flex gap-4 justify-start">
                <Button
                  variant="circle"
                  onClick={prevProject}
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant="circle"
                  onClick={nextProject}
                  aria-label="Próximo projeto"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-600 bg-gray-100 rounded-full px-3 py-1 w-fit">
                  {index + 1} de {projects.length}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Botão "me chama" — visível só no mobile */}
      <div className="flex md:hidden w-full mt-8 justify-center">
        <Button
          variant="work"
          className="w-3/4 max-w-xs"
          data-analytics="work_me_chama_click"
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
    </section>
  );
};

export default WorkSection;
