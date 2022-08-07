import type { ITextResults } from "@/interfaces/IQuizes";

const title: string = "Wich 2018 World Cup footbal team are you?"

const questions: string[] = [
  "Are you a popular person?",
  "In a game of 'fuck, marry or kill' with Frank Ribery, Ronaldinho Gaúcho and Chewbacca, do you fuck Chewbacca?",
  "Do you think it's unfair when the favorites are knocked down by zebras?",
  "Do you think Brazil lost the '98 World Cup due to incompetence (answer 'no') or for some unexplained reason (answer 'yes')?",
  "Is the uproar more important than the spectacle?",
  "But do you enjoy the street party, the sticker album, watching the games with friends, etc.?",
  "So do we. By the way, do you miss Fuleco",
  "Are you rooting for Russia to go to war with someone and the Cup to return to Brazil?",
  "When someone interrupts your sleep, do you become the Canary Pistol himself?",
  "Every time Brazil wins, will you share the video of Galvão shouting 'é tetraaa'?",
  "Do you only follow football to see Neto p*** da vida memes?",
  "Have you ever needed to clean up your image after a big mico?",
  "Are you going to have a barbecue and blow vuvuzela until the games at 9 am?",
  "Argentina is in Iceland's group. You're rooting for Iceland, right",
  "ÔÔÔ-ÊÊ-ÁÁ",
  "At the time of decision, you may even be an atheist, but will you pray to Our Lady, Odin, Ganesha and whoever else needs it?",
  "So you're going to cheer for some zebra?",
  "Do you spend a lot of hours on Twitter?",
  "By the way, if you were a team, would you need prayers?",
  "When you go out, do you drink until you're really, really crazy",
  "Do you prefer technical efficiency to individual talents?",
  "Is cold better than heat?",
];

const results: { [key: string]: ITextResults } = {
  "R1": {
    title: "Argentina",
    desc: "The bad campaign in the playoffs almost cost the spot. You need to prove that you have more than just Messi's talent.",
  },
  "R2": {
    title: "Brazil",
    desc: "It arrives as one of the royal favorites after years. It has stars and a united team. Plus, it's the promise of memes and banter.",
  },
  "R3": {
    title: "Germany",
    desc: "Perhaps the biggest favourite, it won the Confederations Cup in 2017. It has a serious, agile and efficient team.",
  },
  "R4": {
    title: "Russia",
    desc: "Hold the vodka! The hostess only won three matches in 2017. She's going to play so she doesn't have to fall in the first phase.",
  },
  "R5": {
    title: "Egypt",
    desc: "Here's a crack! Muslim striker Mohamed Salah is so charismatic that he has lessened religious prejudice.",
  },
  "R6": {
    title: "Iceland",
    desc: "Tournament mascot, won the sympathy of the world at Eurocup. it has no tradition, but it will be David against Goliath.",
  },
}

export default {
  "title": title,
  "questions": questions,
  "results": results,
};