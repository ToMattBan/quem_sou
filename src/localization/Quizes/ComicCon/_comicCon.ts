import type { ITextQuiz } from '@/interfaces/IQuizes';
import BR from './BR';
import EN from './EN';

const comicConTexts: { [key: string]: ITextQuiz } = {
  "BR": BR,
  "EN": EN,
}

export default comicConTexts;