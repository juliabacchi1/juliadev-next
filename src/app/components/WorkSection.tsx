"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const WorkSection = () => {
  const projects = [
    {
      name: "DarkMoon",
      description:
        "Site institucional moderno e responsivo, desenvolvido com foco em performance e identidade visual impactante. Construído com Next.js e TailwindCSS.",
      view: "/images/darkmoon.webp",
      alt: "Visualização DarkMoon",
      link: "https://portal-darkmoon.vercel.app/",
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
      aria-labelledby="works-title"
      className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6"
    >
      <div className="w-full md:w-[30%] my-16 mb-4 md:my-2 md:mx-10 flex flex-col items-center md:items-start text-left">
        <h2 className="leading-snug md:leading-tight text-[clamp(2rem,6vw,3.5rem)] md:text-6xl mb-6">
          Trabalhos
        </h2>
        <p className="text-[clamp(1rem,2.5vw,1.125rem)] md:text-lg leading-relaxed md:text-start text-gray-800 mb-8 max-w-md">
          Projetos selecionados que demonstram minha evolução e abordagem
          criativa
        </p>
        <div className="flex">
          <Button
            variant="pink"
            className="w-3/4 md:w-full md:max-w-[200px]"
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
        <p className="text-sm text-gray-500 mt-6">
          {index + 1}/{projects.length}
        </p>
      </div>

      <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center md:items-start px-4 md:px-8 lg:px-12 gap-6">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src={view}
            alt={alt}
            width={800}
            height={600}
            className="w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-contain"
            priority={index === 0}
          />
        </a>

        <div className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start text-left mt-2 md:mt-8 pr-0 md:pr-4 lg:pr-8">
          <h3 className="text-xl md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">
            {name}
          </h3>
          <p className="text-sm md:text-base text-center md:text-start text-gray-700 pb-6 md:pb-8 lg:pb-10">
            {description}
          </p>
          <div className="flex flex-col">
            <div className="flex w-3/4 gap-4">
              <Button variant="red" className="flex-1" onClick={prevProject}>
                voltar
              </Button>
              <Button variant="red" className="flex-1" onClick={nextProject}>
                próximo
              </Button>
            </div>
            <div>
              <p className="text-sm text-gray-500 mt-6">
                {index + 1}/{projects.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
