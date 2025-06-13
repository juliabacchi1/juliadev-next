import { PostFooter } from "../PostFooter";
import ImageWithLoading from "../ImageWithLoading";

export default function LeiturasNecessarias() {
  return (
    <div className="prose prose-neutral max-w-none">
      <ImageWithLoading
        src="/images/LeiturasNecessarias.avif"
        alt="Livros sobre tecnologia e sociedade"
        className="rounded-xl shadow-lg mb-6 object-cover h-72 w-full"
        width={1200}
        height={600}
      />
      <div className="space-y-6 mb-4">
        <p className="font-semibold">
          Se você é apaixonado por tecnologia, inovação e o impacto que tudo
          isso causa na nossa mente e sociedade, aqui vão 3 sugestões
          imperdíveis:
        </p>
      </div>
      <ul className="list-decimal list-inside space-y-6 pl-4 marker:text-pink-600 marker:font-bold mb-4">
        <li>
          <strong>Matéria Escura</strong>, de Blake Crouch — Um thriller sobre
          realidades paralelas e escolhas. Veloz, instigante e muito reflexivo.
        </li>
        <li>
          <strong>Uma Breve História do Tempo</strong>, de Stephen Hawking — Um
          clássico para quem quer entender o universo de forma acessível.
        </li>
        <li>
          <strong>Geração Dopamina</strong>, de Dra. Anna Lembke — Essencial pra
          refletir sobre o uso da tecnologia e como ela afeta nosso cérebro.
        </li>
      </ul>
      <div className="space-y-6 mb-4">
        <p>
          🎁 <strong>Bônus:</strong> <em>O Fim da Eternidade</em>, de Isaac
          Asimov — Um mergulho na manipulação do tempo e nas consequências de
          tentar &quot;melhorar&quot; a humanidade.
        </p>
        <p>Uma leitura pra colocar os pés no chão... e ao mesmo tempo voar.</p>
      </div>
      <PostFooter date="02 janeiro, 2025" />
    </div>
  );
}
