export interface IOptionQuizes {
  title: string,
  desc: string,
}

export interface IQuestions {
  positiveAwnser: number | string,
  negativeAwnser: number | string
}

export interface ITextResults {
  title: string,
  desc: string
}

export interface IQuiz {
  title: string,
  cover: string,
  questions: IQuestions[],
  resultsCovers: { [key: string]: string }
}

export interface ITextQuiz {
  title: string,
  questions: string[],
  results: { [key: string]: ITextResults }
}