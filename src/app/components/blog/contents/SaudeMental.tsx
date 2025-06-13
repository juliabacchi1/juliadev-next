import Image from "next/image";
import { PostFooter } from "../PostFooter";

export default function SaudeMental() {
  return (
    <div className="prose prose-neutral max-w-none">
      <Image
        src="/images/SaudeMental.avif"
        alt="Imagem ilustrativa sobre saúde mental"
        className="rounded-xl shadow-lg mb-6 object-cover h-72 w-full"
        width={1200}
        height={600}
      />

      <div className="space-y-6 mb-4">
        <p className="text-xl font-bold">Código compila, e a mente?</p>

        <p>
          Debugamos sistemas o dia todo, mas esquecemos de debugar nosso próprio
          bem-estar. Hoje vou falar sobre burnout, ansiedade e como cuidar da
          mente nesse mundo de prazos apertados e cobranças infinitas. Spoiler:
          você não é um script que roda 24/7!
        </p>

        <ol className="list-decimal list-inside space-y-4 pl-4 marker:text-pink-600 marker:font-bold">
          <li>
            <strong>
              "Ah, mas programador não tem estresse…" (Só que não) 😅
            </strong>
            <p>
              Quem nunca ouviu que "trabalhar sentado é fácil" ou que "ficar no
              ar-condicionado o dia todo não cansa"? Mas a gente sabe: pressão
              por entregas, horas de telas, síndrome do impostor e aquele bug
              que só aparece em produção são combustível perfeito para exaustão
              mental.
            </p>
          </li>

          <li>
            <strong>Os "ERROS" mais comuns (e como evitar)</strong>
            <ul className="list-disc list-inside my-2 space-y-2">
              <li>
                <strong>Burnout:</strong> Aquele cansaço que não passa, mesmo
                depois do fim de semana.
              </li>
              <li>
                <strong>Ansiedade:</strong> "E se meu código quebrar tudo
                amanhã?" (Spoiler: já quebrou antes e você sobreviveu).
              </li>
              <li>
                <strong>Isolamento:</strong> Home office é ótimo, mas virar um
                hermitão afeta até a criatividade.
              </li>
            </ul>
            <div className="border p-2 my-6">
              <p>
                <strong>Dica de dev:</strong> Quebre tarefas em micro-tasks
                (igual fazemos no código), faça pausas (Pomodoro salva vidas!) e
                lembre-se: você não é seu PR (Pull Request).
              </p>
            </div>
          </li>

          <li>
            <strong>Ferramentas para "otimizar" a mente</strong>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>
                <strong>Testes de sanidade mental:</strong> Apps como{" "}
                <a
                  href="https://www.headspace.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Headspace
                </a>{" "}
                ou{" "}
                <a
                  href="https://zenklub.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  Zenklub
                </a>{" "}
                ajudam a meditar ou conversar com profissionais.
              </li>
              <li>
                <strong>Logs de humor:</strong> Anote como se sente no dia (pode
                ser um JSON no Notion, se quiser ser meta).
              </li>
              <li>
                <strong>Pair Programming Social:</strong> Marque um café
                (virtual ou presencial) com outros devs. Às vezes, desabafar com
                quem entende o "commit que não vai" é terapia.
              </li>
            </ul>
          </li>

          <li>
            <strong>Não é fraqueza, é humano 2.0</strong>
            <p>
              Pedir ajuda, fazer terapia ou dizer "hoje não vou codar depois das
              18h" não te faz menos profissional. Pelo contrário: um desenvolvedor com
              mente saudável é mais produtivo, criativo e (de quebra) evita
              aqueles bugs por cansaço.
            </p>
          </li>
        </ol>

        <p className="font-semibold py-6">
          E você? Já parou pra checar como tá sua mente hoje? Se cuidar também é parte do trabalho!
        </p>

        <pre className="bg-neutral-100 p-4 rounded-xl overflow-auto">
          <code>
            {`if mente == "sobrecarregada":
    print("Hora de pausa!")
    take_break()
else:
    print("Bora codar!")`}
          </code>
        </pre>
      </div>

      <PostFooter date="13 junho, 2025" />
    </div>
  );
}
