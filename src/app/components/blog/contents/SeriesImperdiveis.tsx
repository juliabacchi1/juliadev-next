import Image from "next/image";
import { PostFooter } from "../PostFooter";

export default function SeriesImperdiveis() {
  return (
    <div className="prose prose-neutral max-w-none">
      <Image
        src="/images/SeriesImperdiveis.avif"
        alt="Cenas abstratas representando séries impactantes"
        className="rounded-xl shadow-lg mb-6 object-cover h-72 w-full"
        width={1200}
        height={600}
      />
      <div className="space-y-6 mb-4">
        <p>
          Um suspense existencial aqui, uma distopia acolá. Essas histórias
          mexeram comigo — talvez mexam com você também.
        </p>
        <p className="font-semibold">
          Tem séries que a gente assiste e segue com a vida. E tem outras que
          ficam ecoando na cabeça por dias, e às vezes semanas. Hoje quero
          compartilhar três delas. Todas com um quê de estranhamento, todas
          sobre o que significa estar vivo (ou algo perto disso).
        </p>
      </div>

      <ul className="list-decimal list-inside space-y-6 pl-4 marker:text-pink-600 marker:font-bold mb-4">
        <li>
          <strong>Devs (Apple TV+):</strong> Minimalista, silenciosa e
          hipnotizante. Devs começa como um thriller de tecnologia e vira uma
          meditação sobre livre-arbítrio, física quântica e luto. É daquelas que
          pede silêncio depois do último episódio. E talvez uma caminhada longa.
        </li>
        <li>
          <strong>Severance / Ruptura (Apple TV+):</strong> Você aceitaria
          dividir sua mente entre “trabalho” e “vida pessoal”? Em Severance,
          essa divisão é literal. Uma premissa genial que vai ganhando camadas e
          um desconforto crescente. É sobre trabalho, sim — mas também sobre
          identidade, trauma e fuga.
        </li>
        <li>
          <strong>Station Eleven (HBO Max):</strong> Uma pandemia devasta o
          mundo (sim, a gente passou por isso). Mas em vez de focar no caos,
          essa série olha para o que permanece: arte, memória, conexão. É
          poética, sensível e esperançosa, sem ser ingênua. E o final... nossa.
        </li>
      </ul>

      <div className="space-y-6 mb-4">
        <p>
          🎁 <strong>Bônus:</strong> <em>The Leftovers (HBO Max):</em> Se 2% da
          população mundial simplesmente desaparecesse, como o mundo lidaria?
          The Leftovers não tenta explicar o fenômeno — e isso é o mais
          brilhante. Uma série sobre ausência, fé e o absurdo da existência. É
          pesada, sim. Mas vale cada minuto.
        </p>
        <p>
          Já assistiu alguma dessas? Me conta o que achou, ou me indica outra
          que ficou na sua cabeça por dias — adoro esse tipo de troca!
        </p>
      </div>

      <PostFooter date="20 novembro, 2024" />
    </div>
  );
}
