import Image from "next/image";
import { PostFooter } from "../PostFooter";

export default function HeroinasDigitais() {
  return (
    <div className="prose prose-neutral max-w-none">
      <Image
        src="/images/HeroinasDigitais.avif"
        alt="Mulheres que marcaram a história da programação"
        className="rounded-xl shadow-lg mb-6 object-cover h-72 w-full"
        width={1200}
        height={600}
      />
      <div className="space-y-6 mb-4">
        <p className="font-semibold">
          Quando pensamos em programação, a imagem que costuma aparecer é
          masculina, mas essa visão não mostra a história toda...
        </p>
        <p>
          Desde o século 19 até hoje, mulheres têm sido fundamentais para o
          avanço da computação, mesmo enfrentando obstáculos enormes.
        </p>
        <p>Conheça algumas dessas figuras inspiradoras:</p>
      </div>
      <ul className="list-decimal list-inside space-y-6 pl-4 marker:text-pink-600 marker:font-bold mb-4">
        <li>
          <strong>Ada Lovelace</strong> — Considerada a primeira programadora da
          história, ela escreveu o primeiro algoritmo e já previa que máquinas
          poderiam ir além dos cálculos.
        </li>
        <li>
          <strong>Grace Hopper</strong> — Almirante da Marinha dos EUA e
          criadora da linguagem COBOL. Também popularizou o termo “bug” na
          programação.
        </li>
        <li>
          <strong>Radia Perlman</strong> — Criadora do protocolo Spanning Tree,
          essencial para o funcionamento da internet como conhecemos.
        </li>
        <li>
          <strong>Angie Jones</strong> — Referência em testes automatizados e
          uma das maiores divulgadoras técnicas da atualidade.
        </li>
        <li>
          <strong>Reshma Saujani</strong> — Fundadora do <em>Girls Who Code</em>
          , uma iniciativa para empoderar a nova geração de meninas
          programadoras.
        </li>
        <li>
          <strong>Gabriela de Queiroz</strong> — Brasileira que se destacou na
          área de dados e criou o movimento <em>R-Ladies</em>.
        </li>
      </ul>
      <div className="space-y-6 mb-4">
        <p>
          É um caminho um tanto quanto mais largo, vamos admitir. Porém estas e outras histórias provam que tecnologia não tem gênero, e que o futuro
          da programação é cada vez mais diverso.
        </p>
        <p>
          🎁 <strong>Bônus:</strong> Se você é mulher e está começando, procure
          comunidades como <em>Reprograma</em>, <em>Rails Girls</em>,{" "}
          <em>Mulheres na Tecnologia</em> ou <em>Technovation</em>. Apoio faz
          toda diferença!
        </p>
        <p>Vamos ocupar esse espaço e mostrar que somos capazes 💪</p>
      </div>
      <PostFooter date="14 setembro, 2024" />
    </div>
  );
}
