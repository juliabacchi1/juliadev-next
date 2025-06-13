import Image from "next/image";
import { PostFooter } from "../PostFooter";

export default function LadoConsciente() {
  return (
    <div className="prose prose-neutral max-w-none">
      <Image
        src="/images/LadoConsciente.avif"
        alt="Foguete apontado para cima"
        className="rounded-xl shadow-lg mb-6 object-cover h-72 w-full"
        width={1200}
        height={600}
      />
      <div className="space-y-6 mb-4">
        <p className="font-semibold">
          Quando falamos em sustentabilidade, muita gente pensa em plástico,
          água, transporte… mas e a internet? Pois é: o digital também
          consome energia, emite CO₂ e tem impacto ambiental real.
        </p>

        <p>
          Como devs, a gente pode (e deve) construir produtos mais conscientes.
          E, muitas vezes, isso começa com pequenas escolhas no código. Aqui vão
          algumas ideias:
        </p>
      </div>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Sites mais leves:</strong> cada kb conta. Imagens otimizadas,
          lazy loading, menos dependências e códigos limpos tornam a web mais
          rápida e sustentável.
        </li>
        <li>
          <strong>Dark mode economiza energia:</strong> principalmente em telas
          OLED. Além de ser mais confortável pros olhos, consome menos.
        </li>
        <li>
          <strong>Hospedagem verde:</strong> prefira provedores que usam energia
          renovável. Exemplos: GreenGeeks, Eco Web Hosting, Infomaniak.
        </li>
        <li>
          <strong>Evite autoplay e scripts pesados:</strong> eles aumentam o uso
          de CPU e energia — principalmente em dispositivos móveis.
        </li>
        <li>
          <strong>Use fontes locais ou otimizadas:</strong> carregar fontes
          externas demais pesa o carregamento e aumenta requisições.
        </li>
      </ul>

      <div className="space-y-6 my-6">
        <p>
          🍃 Curiosidade: em 2023, estimou-se que a internet representava{" "}
          <strong>3.7% das emissões globais de carbono</strong> — mais que a
          indústria da aviação. 😮
        </p>

        <p>
          <strong>Ferramentas pra devs conscientes:</strong>
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://www.websitecarbon.com/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Website Carbon Calculator
            </a>{" "}
            — mostra a pegada de carbono do seu site.
          </li>
          <li>
            <a
              href="https://ecograder.com/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              EcoGrader
            </a>{" "}
            — avalia desempenho e sustentabilidade de páginas.
          </li>
          <li>
            <a
              href="https://www.digitalbeacon.co/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Digital Beacon
            </a>{" "}
            — insights para reduzir o impacto digital.
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <p>
          💡 <strong>Dica prática:</strong> comece revisando seu portfólio.
          Pergunte: esse site é leve? Preciso de todas essas fontes e plugins?
          Tem imagens otimizadas? Tem dark mode?
        </p>

        <p>
          🌱 A sustentabilidade digital ainda é pouco falada, mas é um
          diferencial ético e profissional que diz muito sobre a gente como
          devs. E o melhor: você pode começar hoje.
        </p>

        <p>Bora codar um mundo mais leve — em todos os sentidos?</p>
      </div>

      <PostFooter date="12 outubro, 2024" />
    </div>
  );
}
