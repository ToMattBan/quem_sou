export interface IOptionQuizes {
  title: string,
  desc: string,
}

export interface IQuiz {
  title: string,
  questions: string[],
  results: IOptionQuizes[],
}