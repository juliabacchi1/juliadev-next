import { PostFooter } from "../PostFooter";
import ImageWithLoading from "../ImageWithLoading";

export default function FrontEnd() {
  return (
    <div className="prose prose-neutral max-w-none">
      <ImageWithLoading
        src="/images/FrontEnd.avif"
        alt="Front-end criando experiências digitais"
        className="rounded-xl shadow-lg mb-6 object-cover h-72 w-full"
        width={1200}
        height={600}
      />
      <div className="space-y-6 mb-4">
        <p className="font-semibold">
          Ser front-end é criar experiências que conectam pessoas à tecnologia.
        </p>
        <p>
          Se você está começando,ou pensando em transição, aqui vão pontos
          importantes que um front precisa, além da técnica:
        </p>
      </div>

      <ul className="list-decimal list-inside space-y-6 pl-4 marker:text-pink-600 marker:font-bold mb-4">
        <li>
          <strong>Curiosidade constante</strong> — As ferramentas mudam, as
          tendências evoluem. Quem é front precisa gostar de aprender sempre.
        </li>
        <li>
          <strong>Noções de UX/UI</strong> — Não precisa ser designer, mas é
          essencial entender como deixar uma interface agradável, acessível e
          intuitiva.
        </li>
        <li>
          <strong>Lógica e organização</strong> — O código precisa funcionar,
          sim, mas também precisa ser legível, bem estruturado e escalável.
        </li>
        <li>
          <strong>Comunicação</strong> — Front-end é ponte entre várias áreas:
          produto, design, back-end... Saber ouvir e falar é chave.
        </li>
        <li>
          <strong>Olhar para o detalhe</strong> — Margem, sombra, animação,
          tempo de carregamento. Pequenas coisas fazem uma grande diferença.
        </li>
        <li>
          <strong>Cuidado com a performance</strong> — Saber otimizar imagens,
          reduzir requests... Tudo isso ajuda a criar uma web mais rápida e
          sustentável.
        </li>
      </ul>

      <div className="space-y-6 mb-4">
        <p className="font-semibold tracking-wider pl-4">
          E mais do que tudo: sensibilidade. Um bom front-end entende que do
          outro lado da tela tem uma pessoa. E se pergunta sempre: como posso
          facilitar a vida dela?
        </p>
        <div className="space-y-2 border p-4">
          <p className="uppercase font-semibold">Se você está começando:</p>
          <p>
            Comece simples. Entenda a base. Faça projetos reais. Questione.
            Teste. Erre. Aprenda. O caminho é de código, mas também de presença.
          </p>
          <p>
            Depois de aprender o trio base: HTML, CSS e JavaScript, o próximo
            passo natural é explorar ferramentas modernas do ecossistema
            front-end.
          </p>
          <p className="text-sm py-3">
            Uma das mais populares é o <strong className="text-pink-600">React</strong>, uma biblioteca
            JavaScript focada em criar interfaces de forma eficiente e modular.
            Ele é amplamente usado no mercado, tem uma comunidade enorme e se
            integra com ferramentas como Vite, Tailwind CSS, TypeScript, e muito
            mais.
          </p>
        </div>
        <p>
          Se seu foco é trabalhar com desenvolvimento web, React é um ótimo
          caminho — mas também vale conhecer outros frameworks como{" "}
          <strong>Vue</strong> ou <strong>Svelte</strong> e entender os
          fundamentos do <strong>JavaScript</strong> puro, que é a base de tudo.
        </p>
        <p>
          O mais importante é entender como as tecnologias se conectam, e ir
          construindo seu próprio repertório. Com calma, consistência e
          curiosidade 💡
        </p>
      </div>

      <PostFooter date="04 março, 2025" />
    </div>
  );
}
