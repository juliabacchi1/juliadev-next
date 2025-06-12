"use client";

import Button from "./Button";
import Image from "next/image";

type TechItem = {
  name: string;
  imgSrc: string;
  url: string;
  bgColor: string;
  hoverColor: string;
  iconSize?: string;
};

const technologies: TechItem[] = [
  {
    name: "React",
    imgSrc: "/icons/react.svg",
    url: "https://react.dev",
    bgColor: "bg-sky-500",
    hoverColor: "hover:bg-sky-600",
    iconSize: "w-8 h-8",
  },
  {
    name: "Next.js",
    imgSrc: "/icons/nextdotjs.svg",
    url: "https://nextjs.org",
    bgColor: "bg-gray-400",
    hoverColor: "hover:bg-gray-500",
    iconSize: "w-8 h-8",
  },
  {
    name: "Vite",
    imgSrc: "/icons/vite.svg",
    url: "https://vitejs.dev",
    bgColor: "bg-purple-500",
    hoverColor: "hover:bg-purple-400",
    iconSize: "w-8 h-8",
  },
  {
    name: "TypeScript",
    imgSrc: "/icons/typescript.svg",
    url: "https://www.typescriptlang.org/",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-400",
    iconSize: "w-8 h-8",
  },
  {
    name: "JavaScript",
    imgSrc: "/icons/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    bgColor: "bg-yellow-400",
    hoverColor: "hover:bg-yellow-300",
    iconSize: "w-8 h-8",
  },
  {
    name: "TailwindCSS",
    imgSrc: "/icons/tailwindcss.svg",
    url: "https://tailwindcss.com",
    bgColor: "bg-sky-400",
    hoverColor: "hover:bg-sky-300",
    iconSize: "w-8 h-8",
  },
  {
    name: "ShadCN",
    imgSrc: "/icons/shadcnui.svg",
    url: "https://ui.shadcn.com",
    bgColor: "bg-neutral-800",
    hoverColor: "hover:bg-neutral-400",
    iconSize: "w-8 h-8",
  },
  {
    name: "Figma",
    imgSrc: "/icons/figma.svg",
    url: "https://figma.com",
    bgColor: "bg-pink-500",
    hoverColor: "hover:bg-pink-400",
    iconSize: "w-8 h-8",
  },
];

export default function TechSection() {
  return (
    <section
      id="tecnologias"
      className="w-full min-h-screen relative bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100 flex flex-col items-center justify-center px-6 py-16 space-y-12"
    >
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Topo esquerda */}
        <Image
          src="/images/nuvem.webp"
          width={384}
          height={128}
          className="absolute top-10 left-8 w-48 h-auto sm:w-64 md:w-80 lg:w-96 opacity-40"
          alt="nuvem decorativa"
        />

        {/* Topo direita */}
        <Image
          src="/images/nuvem.webp"
          width={384}
          height={128}
          className="absolute top-24 right-12 w-40 h-auto sm:w-56 md:w-72 lg:w-80 opacity-30 hidden md:block"
          alt="nuvem decorativa"
        />

        {/* Meio esquerda */}
        <Image
          src="/images/nuvem.webp"
          width={384}
          height={128}
          className="absolute top-1/2 left-24 w-36 h-auto sm:w-48 md:w-60 lg:w-72 opacity-25 hidden md:block"
          alt="nuvem decorativa"
        />

        {/* Meio direita mais abaixo */}
        <Image
          src="/images/nuvem.webp"
          width={384}
          height={128}
          className="absolute top-[65%] right-24 w-32 h-auto sm:w-40 md:w-52 lg:w-64 opacity-35"
          alt="nuvem decorativa"
        />

        {/* Centro centralizada */}
        <Image
          src="/images/nuvem.webp"
          width={384}
          height={128}
          className="absolute top-[35%] left-1/2 -translate-x-1/2 w-40 h-auto sm:w-52 md:w-64 lg:w-72 opacity-15"
          alt="nuvem decorativa"
        />
      </div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        <h2 className="md:text-center leading-snug md:leading-tight text-[clamp(2rem,6vw,3.5rem)] md:text-6xl mb-14 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Tecnologias
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
          {technologies.map(
            ({ name, imgSrc, url, bgColor, hoverColor, iconSize }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3"
                aria-labelledby={`tech-${name.toLowerCase()}-title`}
              >
                <span
                  id={`tech-${name.toLowerCase()}-title`}
                  className="sr-only"
                >
                  Visitar site oficial de {name}
                </span>
                <div
                  className={`
  w-14 h-14 rounded-full flex items-center justify-center
  transition-all duration-300 transform group-hover:scale-110
  ${bgColor} ${hoverColor} bg-opacity-10 hover:bg-opacity-20
`}
                >
                  <Image
                    src={imgSrc}
                    alt={`${name} logo`}
                    width={40}
                    height={40}
                    className={`object-contain ${iconSize || "w-10 h-10"}`}
                  />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {name}
                </span>
              </a>
            )
          )}
        </div>

        <div className="mt-16 flex md:justify-center">
          <Button
            variant="default"
            className="w-3/4 md:w-full md:max-w-[200px]"
            onClick={() => {
              const section = document.getElementById("trabalhos");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            trabalhos
          </Button>
        </div>
      </div>
    </section>
  );
}
