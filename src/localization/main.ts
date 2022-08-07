import generalTexts from './General/_general';
import homeTexts from './Home/_home';
import quizesTexts from './Quizes/_quizes';

function getUserLanguage() {
  const browserLanguage: string = navigator.language;

  let splitLanguage: string[] = browserLanguage.split('-');
  splitLanguage = splitLanguage.map(lang => lang.toUpperCase());

  if (splitLanguage.length > 1 && availableLanguages.includes(splitLanguage[1]))
    return splitLanguage[1]
  else if (availableLanguages.includes(splitLanguage[0]))
    return splitLanguage[0]
  else
    return "EN";
}

const availableLanguages: string[] = ["BR", "EN"];
const userLanguage: string = getUserLanguage();

export { userLanguage, generalTexts, homeTexts, quizesTexts };