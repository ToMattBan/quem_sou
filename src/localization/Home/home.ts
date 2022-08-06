import type { IHome } from './home_interface';
import BR from './BR';
import EN from './EN';

const homeTexts: { [key: string]: IHome } = {
  "BR": BR,
  "EN": EN,
}

export default homeTexts;