import type { IOptionQuizes } from "@/interfaces/IQuizes";

const title = "Qual Seleção da Copa é a Sua Cara?"

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

const results = {
  "R1": {
    title: 'Argentina',
    desc: 'A campanha ruim',
  },
  "R2" :{
    title: 'Brasil',
    desc: 'Chaga como um',
  },
  "R3": {
    title: 'Alemanha',
    desc: 'Talvez a maior',
  },
  "R4": {
    title: 'Rússia',
    desc: 'Segura a vodca!',
  },
  "R5": {
    title: 'Egito',
    desc: 'Aqui tem craque!',
  },
  "R6": {
    title: 'Islândia',
    desc: 'Mascote do torneio',
  },
}

export default { 
  "title": title,
  "questions": questions, 
  "results": results,
};