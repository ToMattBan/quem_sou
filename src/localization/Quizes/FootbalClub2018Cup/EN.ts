import type { IOptionQuizes } from "@/localization/interfaces/IQuizes";

const quizTitle = "Qual Seleção da Copa é a Sua Cara?"

const questionsFootbalClub2018CupBr: string[] = [
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

const resultsFootbalClub2018CupBr: IOptionQuizes[] = [
  {
    title: 'Argentina',
    desc: 'A campanha ruim',
  },
  {
    title: 'Brasil',
    desc: 'Chaga como um',
  },
  {
    title: 'Alemanha',
    desc: 'Talvez a maior',
  },
  {
    title: 'Rússia',
    desc: 'Segura a vodca!',
  },
  {
    title: 'Egito',
    desc: 'Aqui tem craque!',
  },
  {
    title: 'Islândia',
    desc: 'Mascote do torneio',
  },
]

export default { 
  "quizTitle": quizTitle,
  "questionsFootbalClub2018CupBr": questionsFootbalClub2018CupBr, 
  "resultsFootbalClub2018CupBr": resultsFootbalClub2018CupBr,
};