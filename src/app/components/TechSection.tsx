"use client";

import Button from "./Button";

type TechItem = {
  name: string;
  imgSrc: string;
  url: string;
  className?: string;
};

const technologies: TechItem[] = [
  {
    name: "React",
    imgSrc: "/icons/react.svg",
    url: "https://react.dev",
    className: "bg-sky-500 hover:bg-sky-600",
  },
  {
    name: "Next.js",
    imgSrc: "/icons/nextdotjs.svg",
    url: "https://nextjs.org",
    className: "bg-gray-400 hover:bg-gray-500",
  },
  {
    name: "Vite",
    imgSrc: "/icons/vite.svg",
    url: "https://vitejs.dev",
    className: "bg-purple-500 hover:bg-purple-600",
  },
  {
    name: "TypeScript",
    imgSrc: "/icons/typescript.svg",
    url: "https://www.typescriptlang.org/",
    className: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "JavaScript",
    imgSrc: "/icons/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    className: "bg-yellow-400 hover:bg-yellow-500",
  },
  {
    name: "TailwindCSS",
    imgSrc: "/icons/tailwindcss.svg",
    url: "https://tailwindcss.com",
    className: "bg-sky-400 hover:bg-sky-500",
  },
  {
    name: "Figma",
    imgSrc: "/icons/figma.svg",
    url: "https://figma.com",
    className: "bg-pink-500 hover:bg-pink-600",
  },
];

export default function TechSection() {
  return (
    <section
      id="tecnologias"
      className="w-full min-h-screen bg-gradient-to-b from-white to-orange-50 flex flex-col items-center justify-center px-6 py-16 space-y-12"
    >
      <div className="max-w-4xl w-full mx-auto">
        <h2 className="md:text-center font-bold leading-snug md:leading-tight font-serif text-abouttext text-[clamp(2rem,6vw,2.75rem)] md:text-6xl mb-12">
          Tecnologias
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 place-items-center">
          {technologies.map(({ name, imgSrc, url, className }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
              aria-label={`${name} website`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center bg-opacity-10 ${className}`}
              >
                <img
                  src={imgSrc}
                  alt={`${name} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                {name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 flex w-3/4 md:w-3/5">
          <Button
            variant="default"
            className="flex-1"
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
