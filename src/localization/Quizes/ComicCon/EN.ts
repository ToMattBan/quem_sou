import type { ITextResults } from "@/interfaces/IQuizes";

const title: string = "Who are you at Comic Con?"

const questions: string[] = [
  "Do you have serious budget constraints?",
  "You still think 47 times before spending your hard-earned money?",
  "Are you good with manual work?",
  "But do you always find a way to buy what you want?",
  "Have you always dreamed of being a superhero?",
  "Are you attracted to promotions like flies are attracted to light",
  "By 'handwork' do you understand something of a sexual nature?",
  "Do you have a strong competitive sense?",
  "Does the idea of spending a day surrounded by nerds horrify you",
  "Have you ever tried to produce a script, draw a comic, shoot a short or something?",
  "But was it rule 34?",
  "When you see two people fighting, do you say 'Calm down, guys, your mothers are called Martha'?",
  "Someone mentions Regular Show. Your natural reaction is to yell 'Ooooohhh'?",
  "Do you only queue if it's a matter of life or death?",
  "Is passing perrengue just a creative way to make friends?",
  "Do people like to give you things for free",
  "Showing your art fits like 'life or death?'",
  "Do you like cosplay?",
  "Are you in hell, hug the Demo(lidor)?",
];

const results: { [key: string]: ITextResults } = {
  "R1": {
    title: "Embarrassed Star",
    desc: "You are obligated to be there and, despite trying hard, you don't always avoid the ass face",
  },
  "R2": {
    title: "Insane Fan",
    desc: "You schedule months in advance, sleep in line, wait hours for an autograph or panel and you're proud of it all",
  },
  "R3": {
    title: "Deadpool Cosplayer",
    desc: "On the tram, you sit at the little window. Comics and autographs? Nah! You just want to shine",
  },
  "R4": {
    title: "Inveterate Buyer",
    desc: "You know about all the promotions and releases and go with a full pocket. It's not the time for misery",
  },
  "R5": {
    title: "Normal Cosplayer",
    desc: "Your cutting, sewing and engineering skills are finally successful. Everyone likes you."
  },
  "R6": {
    title: "Bored Winner",
    desc: "Stuck in a 3 x 2 m space, you put up with hours of nerdiness to put food on the table. The real hero?",
  },
}

export default {
  "title": title,
  "questions": questions,
  "results": results,
};