import ComicConCover from "@/assets/quizes/comicCon/cover.jpeg";
import R1 from "@/assets/quizes/comicCon/R1.jpeg";
import R2 from "@/assets/quizes/comicCon/R2.jpeg";
import R3 from "@/assets/quizes/comicCon/R3.jpeg";
import R4 from "@/assets/quizes/comicCon/R4.jpeg";
import R5 from "@/assets/quizes/comicCon/R5.jpeg";
import R6 from "@/assets/quizes/comicCon/R6.jpeg";
import type { IQuestions, IQuiz } from "@/interfaces/IQuizes";

const title = "comicCon";

const cover = ComicConCover;

const questions: IQuestions[] = [
  {
    positiveAwnser: 3,
    negativeAwnser: 1,
  },
  {
    positiveAwnser: 4,
    negativeAwnser: 2,
  },
  {
    positiveAwnser: 6,
    negativeAwnser: 7,
  },
  {
    positiveAwnser: 2,
    negativeAwnser: 8,
  },
  {
    positiveAwnser: 9,
    negativeAwnser: 5,
  },
  {
    positiveAwnser: "R4",
    negativeAwnser: 8,
  },
  {
    positiveAwnser: 12,
    negativeAwnser: 7,
  },
  {
    positiveAwnser: 13,
    negativeAwnser: 15,
  },
  {
    positiveAwnser: 18,
    negativeAwnser: 7,
  },
  {
    positiveAwnser: 10,
    negativeAwnser: "R1",
  },
  {
    positiveAwnser: "R3",
    negativeAwnser: "R2",
  },
  {
    positiveAwnser: "R3",
    negativeAwnser: 17,
  },
  {
    positiveAwnser: 11,
    negativeAwnser: 13,
  },
  {
    positiveAwnser: 16,
    negativeAwnser: 14,
  },
  {
    positiveAwnser: 17,
    negativeAwnser: "R2",
  },
  {
    positiveAwnser: "R1",
    negativeAwnser: "R4",
  },
  {
    positiveAwnser: "R5",
    negativeAwnser: "R4",
  },
  {
    positiveAwnser: "R5",
    negativeAwnser: "R2",
  },
  {
    positiveAwnser: "R3",
    negativeAwnser: "R6",
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

const ComicCon: IQuiz = {
  title,
  cover,
  questions,
  resultsCovers
}

export default ComicCon;