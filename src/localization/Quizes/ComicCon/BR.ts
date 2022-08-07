import type { ITextResults } from "@/interfaces/IQuizes";

const title: string = "Quem é você numa Comic Con?"

const questions: string[] = [
  'Você possui sérias restrições orçamentárias?',
  'Ainda assim você pensa 47 vezes antes de gastar seu suado dinheirinho?',
  'Você é bom com trabalhos manuais?',
  'Mas sempre dá um jeitinho de comprar o que quer?',
  'Você sempre sonhou em seu um super-herói?',
  'Você é atraído por promoções como moscas são atraídas para a luz?',
  'Por "trabalhos manuais" você entendeu algo de teor sexual?',
  'Você possui um grande senso competitivo?',
  'A ideia de passar um dia cercado de nerds te horroriza?',
  'Já tentou produzir um roteiro, desenhar uma HQ, gravar um curta ou algo assim?',
  'Mas era regra 34?',
  'Ao ver duas pessoas brigando, você diz "Calma, gente, duas mães se chamam Martha"?',
  'Alguém menciona Apenas um show. Sua reação natural é gritar "Ooooohhh"?',
  ' Você só pega fila se for caso de vida ou morte?',
  'Passar perrengue é só um jeito criativo de fazer amigos?',
  'As pessoas gostam de te dar coisas de graça?',
  'Mostrar sua arte se encaixa como "vida ou morte?"',
  'Curte cosplay?',
  'Tá no inferno, abraça o Demo(lidor)?',
];

const results: { [key: string]: ITextResults } = {
  "R1": {
    title: 'Estrela Constrangida',
    desc: 'Você é obrigado a estar lá e, apesar de se esforçar, nem sempre evita a cara de bunda ',
  },
  "R2": {
    title: 'Fã Insano',
    desc: ' Você se programa meses antes, dorme na fila, espera horas por um autógrafo ou painel e se orgulha disso tudo',
  },
  "R3": {
    title: 'Cosplayer de Deadpool',
    desc: 'No bonde fa zoeira, você se senta na janelinha. HQs e autógrafos? Bah! Você só quer brilhar',
  },
  "R4": {
    title: 'comprador Inveterado',
    desc: 'Você sabe de todas as promoções e lançamentos e vai de bolso cheio. Não é hora da miséria',
  },
  "R5": {
    title: 'Cosplayer Normal',
    desc: 'Suas hablidades de corte, costura e engenharia são sucesso, finalmente. Todos gostam de você',
  },
  "R6": {
    title: 'Vencedor Entediado',
    desc: 'Preso num espaço 3 x 2 m, você aguenta horas de nerdice para pôr comida na mesa. O verdadeiro herói?',
  },
}

export default {
  "title": title,
  "questions": questions,
  "results": results,
};