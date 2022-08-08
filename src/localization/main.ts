import { type Ref, ref } from 'vue';
import generalTexts from './General/_general';
import homeTexts from './Home/_home';
import quizesTexts from './Quizes/_quizes';

const userLanguage: Ref<string> = ref('EN');

function getUserLanguage() {
  const browserLanguage: string = navigator.language;

  let splitLanguage: string[] = browserLanguage.split('-');
  splitLanguage = splitLanguage.map(lang => lang.toUpperCase());

  if (splitLanguage.length > 1 && availableLanguages.includes(splitLanguage[1]))
    return splitLanguage[1]
  else (availableLanguages.includes(splitLanguage[0]))
    return splitLanguage[0]
}

function changeLanguage(newLanguage: string) {
  userLanguage.value = newLanguage;
}

const availableLanguages: string[] = ["BR", "EN"];
userLanguage.value = getUserLanguage();

export { userLanguage, changeLanguage, generalTexts, homeTexts, quizesTexts };