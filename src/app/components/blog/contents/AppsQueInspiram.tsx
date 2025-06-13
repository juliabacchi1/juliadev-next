import Image from "next/image";
import { PostFooter } from "../PostFooter";

export default function AppsQueInspiram() {
  return (
    <div className="prose prose-neutral max-w-none">
      <Image
        src="/images/Apps.avif"
        alt="Ilustração de apps úteis para devs"
        className="rounded-xl shadow-lg mb-6 object-cover h-72 w-full"
        width={1200}
        height={600}
      />
      <div className="space-y-6 mb-4">
        <p className="font-semibold">
          Não é só sobre codar. Ser dev é também saber organizar ideias, manter
          o foco e cuidar de si.
        </p>
        <p>
          Esses 5 apps viraram parte da minha rotina — e me ajudam tanto no
          desenvolvimento quanto na vida fora das telas:
        </p>
      </div>
      <ul className="list-decimal list-inside space-y-6 pl-4 marker:text-pink-600 marker:font-bold">
        <li>
          <strong>Notion:</strong> meu cérebro digital. Uso pra organizar
          estudos, projetos, ideias, metas e até meu cardápio semanal. Tudo no
          mesmo lugar!
        </li>
        <li>
          <strong>Raycast:</strong> um atalho pra tudo no Mac. Abro apps, busco
          arquivos, faço cálculos e até gerencio meu GitHub sem tirar as mãos do
          teclado. Produtividade nível hard.
        </li>
        <li>
          <strong>Forest:</strong> app de foco com gamificação. Você planta uma
          árvore e ela cresce enquanto você não toca no celular. Ótimo pra
          sessões de estudo ou dev concentrado.
        </li>
        <li>
          <strong>Habitica:</strong> um gerenciador de hábitos com carinha de
          RPG. Perfeito se você gosta de transformar tarefas em missões e
          recompensas. Vicia — no bom sentido.
        </li>
        <li>
          <strong>Figma:</strong> não é só pra designers. Como dev, uso pra
          visualizar interfaces, colaborar com quem tá no design e até montar
          ideias rápidas. É essencial entender o básico!
        </li>
      </ul>
      <div className="space-y-6 mb-4">
        <p className="pt-4">
          📌 Esses apps me ajudam a manter o equilíbrio entre ser produtiva...
        </p>
        <p>
          <strong>Dica:</strong> testou algum app e não funcionou? Tudo bem. O
          segredo é adaptar as ferramentas ao seu estilo, não o contrário.
        </p>
        <p>
          E você, tem algum app que mudou sua rotina?{" "}
          <a
            href="https://linkedin.com/in/juliabacchi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline"
          >
            Me conta lá no LinkedIn
          </a>{" "}
          — adoro descobrir novas ferramentas! 💬
        </p>
      </div>
      <PostFooter date="04 setembro, 2024" />
    </div>
  );
}
