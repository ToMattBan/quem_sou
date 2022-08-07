import footbalClub2018CupCover from "@/assets/quizes/footbalClub2018Cup/cover.jpeg";
import R1 from "@/assets/quizes/footbalClub2018Cup/R1.jpeg";
import R2 from "@/assets/quizes/footbalClub2018Cup/R2.jpeg";
import R3 from "@/assets/quizes/footbalClub2018Cup/R3.jpeg";
import R4 from "@/assets/quizes/footbalClub2018Cup/R4.jpeg";
import R5 from "@/assets/quizes/footbalClub2018Cup/R5.jpeg";
import R6 from "@/assets/quizes/footbalClub2018Cup/R6.jpeg";
import type { IQuestions, IQuiz } from "@/interfaces/IQuizes";

const title = "footbalClub2018Cup";

const cover = footbalClub2018CupCover;

const questions: IQuestions[] = [
  {
    positiveAwnser: 3,
    negativeAwnser: 1,
  },
  {
    positiveAwnser: 6,
    negativeAwnser: 4
  },
  {
    positiveAwnser: 20,
    negativeAwnser: 7
  },
  {
    positiveAwnser: 2,
    negativeAwnser: 9
  },
  {
    positiveAwnser: 11,
    negativeAwnser: 5
  },
  {
    positiveAwnser: 10,
    negativeAwnser: 17
  },
  {
    positiveAwnser: 13,
    negativeAwnser: 14
  },
  {
    positiveAwnser: 6,
    negativeAwnser: 8
  },
  {
    positiveAwnser: 14,
    negativeAwnser: 12
  },
  {
    positiveAwnser: 15,
    negativeAwnser: 2
  },
  {
    positiveAwnser: 17,
    negativeAwnser: 19
  },
  {
    positiveAwnser: "R2",
    negativeAwnser: 18
  },
  {
    positiveAwnser: "R6",
    negativeAwnser: "R1"
  },
  {
    positiveAwnser: "R2",
    negativeAwnser: "R4"
  },
  {
    positiveAwnser: 18,
    negativeAwnser: 12
  },
  {
    positiveAwnser: 16,
    negativeAwnser: 14
  },
  {
    positiveAwnser: 21,
    negativeAwnser: "R3"
  },
  {
    positiveAwnser: "R2",
    negativeAwnser: "R1"
  },
  {
    positiveAwnser: "R4",
    negativeAwnser: "R2"
  },
  {
    positiveAwnser: "R4",
    negativeAwnser: 21
  },
  {
    positiveAwnser: "R3",
    negativeAwnser: "R5"
  },
  {
    positiveAwnser: "R6",
    negativeAwnser: "R5"
  },
]

const resultsCovers: { [key: string]: string } = {
  "R1": R1,
  "R2": R2,
  "R3": R3,
  "R4": R4,
  "R5": R5,
  "R6": R6
}

const footbalClub2018Cup: IQuiz = {
  title,
  cover,
  questions,
  resultsCovers
}

export default footbalClub2018Cup;