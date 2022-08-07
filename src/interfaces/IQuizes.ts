export interface IOptionQuizes {
  title: string,
  desc: string,
}

export interface IQuestions {
  positiveAwnser: number | string
  negativeAwnser: number | string
}

export interface IQuiz {
  title: string,
  cover: string,
  questions: IQuestions[],
  resultsCovers: {},
}