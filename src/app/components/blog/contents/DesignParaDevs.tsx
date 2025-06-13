import { PostFooter } from "../PostFooter";
import ImageWithLoading from "../ImageWithLoading";

export default function DesignParaDevs() {
  return (
    <div className="prose prose-neutral max-w-none">
      <ImageWithLoading
        src="/images/DesignParaDevs.avif"
        alt="Design no front-end"
        className="rounded-xl shadow-lg mb-6 object-cover h-72 w-full"
        width={1200}
        height={600}
      />

      <div className="space-y-6 mb-4">
        <p className="font-semibold">
          Quando comecei no front-end, eu achava que &quot;design&quot; era só
          sobre cor e ícone. Mas aos poucos entendi que saber um pouco de design
          me tornava uma dev mais completa, e que isso fazia TODA a diferença no
          mercado.
        </p>

        <p>
          Não é preciso virar designer, mas entender os fundamentos visuais e de
          experiência do usuário te coloca quilômetros à frente.
        </p>

        <p>
          Aqui vão alguns aprendizados que mudaram meu código (e minha visão):
        </p>
      </div>

      <ul className="list-disc list-inside space-y-6 pl-4 mb-4 marker:text-pink-600 marker:font-bold">
        <li>
          <strong>Espaçamento é organização:</strong> padding e margin trazem
          respiro e equilíbrio visual. Crie um sistema e siga o padrão em todo o
          seu projeto.
        </li>
        <li>
          <strong>Hierarquia visual:</strong> títulos grandes, textos médios,
          detalhes pequenos. Isso guia o olhar.
        </li>
        <li>
          <strong>Tipografia importa:</strong> uma fonte clara, legível, com bom
          espaçamento entre linhas muda tudo.
        </li>
        <li>
          <strong>Alinhamento é elegância:</strong> quando tudo está alinhado,
          transmite cuidado e profissionalismo.
        </li>
        <li>
          <strong>Contraste é acessibilidade:</strong> sem contraste, ninguém
          lê. Pense em quem usa óculos ou está no sol.
        </li>
        <li>
          <strong>Pesquisa enriquece o projeto:</strong> quanto mais nos
          dedicamos ao que estamos fazendo, melhor o resultado. Tire um tempo
          pra rodar a internet, buscar inspiração e ideias de layout antes de
          iniciar qualquer coisa.
        </li>
      </ul>

      <div className="space-y-6 mb-4 border p-4">
        <p className="uppercase font-semibold">
          Quer começar a aprender mais sobre design como dev? Aqui vão alguns
          caminhos:
        </p>
        <ul className="list-disc list-inside space-y-6 pl-4 mb-4 marker:text-pink-600 marker:font-bold">
          <li>
            <strong>Estude UI/UX no seu tempo:</strong> canais como{" "}
            <a
              href="https://www.youtube.com/c/FluxAcademy"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Flux Academy
            </a>{" "}
            ou{" "}
            <a
              href="https://www.youtube.com/c/RefactoringUI"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Refactoring UI
            </a>{" "}
            são ótimos pontos de partida.
          </li>
          <li>
            <strong>Siga perfis no Instagram/Twitter:</strong> como
            @figmadesign, @ui__inspiration, @bradfrost ou @steveschoger.
          </li>
          <li>
            <strong>Use ferramentas visuais:</strong> Figma, Penpot, Whimsical
            ou até extensões como ColorZilla e WhatFont pra estudar sites que
            você ama.
          </li>
          <li>
            <strong>Pratique copiando interfaces:</strong> clone o layout de um
            site no código. Você vai notar padrões incríveis.
          </li>
        </ul>
      </div>

      <div className="space-y-6 mb-4">
        <p>
          💡 <strong>Dica prática:</strong> abra um site que você acha bonito.
          Observe os espaços, tamanhos, fontes. Inspecione e entenda o que foi
          feito ali. E se pergunte: por que isso me agrada visualmente?
        </p>

        <p>
          💬 No mercado, devs que entendem de design são procurados porque criam{" "}
          experiências, e não só funcionalidades. E isso é cada vez mais
          valorizado.
        </p>

        <p>
          ✨ Aprender design é aprender a se comunicar melhor. Como devs, nosso
          trabalho não é só fazer funcionar: <strong>é fazer sentido</strong>.
        </p>
      </div>

      <PostFooter date="13 maio, 2025" />
    </div>
  );
}
