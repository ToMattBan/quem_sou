import type { ITextResults } from "@/interfaces/IQuizes";

const title: string = "Qual Seleção da Copa é a Sua Cara?"

const questions: string[] = [
  'Você é uma pessoa popular?',
  'Em um jogo de "transar, casar ou matar" com Frank Ribery, Ronaldinho Gaúcho e o Chewbacca, você transa com o Chewbacca?',
  'Pergunta 2',
  'Pergunta 3',
  'Pergunta 4',
  'Pergunta 5',
  'Pergunta 6',
  'Pergunta 7',
  'Pergunta 8',
  'Pergunta 9',
  'Pergunta 10',
  'Pergunta 11',
  'Pergunta 12',
  'Pergunta 13',
  'Pergunta 14',
  'Pergunta 15',
  'Pergunta 16',
  'Pergunta 17',
  'Pergunta 18',
  'Pergunta 19',
  'Pergunta 20',
  'Pergunta 21',
];

const results: { [key: string]: ITextResults } = {
  "R1": {
    title: 'Argentina',
    desc: 'A campanha ruim nas eliminatórias quase custou a vaga. Precisa provar que tem mais do que só o talento de Messi.',
  },
  "R2": {
    title: 'Brasil',
    desc: 'Chega como um dos favoritos reais após anos. Tem craques e um time unido. Além disso, é a promessa de memes e zoeira.',
  },
  "R3": {
    title: 'Alemanha',
    desc: 'Talvez a maior favorita, ganhou a Copa das Confederações em 2017. Tem um time sério, ágil e eficiente.',
  },
  "R4": {
    title: 'Rússia',
    desc: 'Segura a vodca! A anfitriã só venceu três partidas em 2017. Vai jogar para não pagar o mico de cair na primeira fase.',
  },
  "R5": {
    title: 'Egito',
    desc: 'Aqui tem craque! O atacante muçulmano Mohamed Salah é tão carismático que tem diminuído o preconceito religioso.',
  },
  "R6": {
    title: 'Islândia',
    desc: 'Mascote do torneio, ganhou a simpatia do mundo na Eurocopa. não tem tradição, mas vai ser o Davi contra os Golias.',
  },
}

export default {
  "title": title,
  "questions": questions,
  "results": results,
};