import type { ITextResults } from "@/interfaces/IQuizes";

const title: string = "Qual Seleção da Copa de 2018 é a Sua Cara?"

const questions: string[] = [
  'Você é uma pessoa popular?',
  'Em um jogo de "transar, casar ou matar" com Frank Ribery, Ronaldinho Gaúcho e o Chewbacca, você transa com o Chewbacca?',
  'Você acha injusto quando os favoritos são derrubados por zebras?',
  'Você acha que o Brasil perdeu a Copa de 98 por incompetência (responda "não") ou por algum motivo ainda inexplicado (responda "sim")?',
  'A zoeira é mais importante que o espetáculo?',
  'Mas você curte a festa na rua, o álbum de figurinhas, assistir aos jogos com os amigos, etc.?',
  'Nós também. Aliás, saudades do Fuleco?',
  'Você está torcendo para que a Rússia entre em guerra contra alguém e a Copa volte pro Brasil?',
  'Quando alguém interrompe seu sono, você vira o próprio Canarinho pistola?',
  'Toda vez que o Brasil ganhar, você vai compartilhar o vídeo do Galvão gritando "é tetraaa"?',
  'Você só acomapanha futebol para ver os memes do Neto p*** da vida?',
  'Você já precisou limpar sua imagem após um grande mico?',
  'Vai fazer churrasco e soprar vuvuzela até nos jogos as 9h?',
  'A Argentina está no grupo da Islândia. Você vai torcer para a Islândia, né?',
  'ÔÔÔ-ÊÊ-ÁÁ',
  'Na hora da decisão, você pode até ser ateu, mas vai rezar para Nossa Senhora, Odin, Ganesha e quem mais precisar?',
  'Então você vai torcer para alguma zebra?',
  'Você passa muitas horas no Twitter?',
  'Aliás, se você fosse um time, ia precisar de reza?',
  'Quando sai, você bebe até ficar muito, muito louco?',
  'Você prefere eficiência técnica a talentos individuais?',
  'Frio é melhor que calor?',
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