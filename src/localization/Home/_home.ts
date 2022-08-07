import type { IHome } from '../../interfaces/IHome';
import BR from './BR';
import EN from './EN';

const homeTexts: { [key: string]: IHome } = {
  "BR": BR,
  "EN": EN,
}

export default homeTexts;