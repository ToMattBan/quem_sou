<template>
  <div class="_tac _df quizFather _fxww">
    <div class="_fw7 _fz30 _mbsm _1/1">{{ quizesTexts[quizName as string][userLanguage].title }}</div>

    <div class="_1/1 _df _fxdc _jcsb" v-if="!quizeEnded">
      <div class="_fz24">
        <span>{{ quizesTexts[quizName as string][userLanguage].questions[questionNumber] }}</span>
      </div>

      <div class="_df _jcse _fxww">
        <button class="_c-btn _c-btn--large _mvxxs _c-btn--confirm" @click="clickPositive">
          {{ generalTexts[userLanguage].yes }}
        </button>
        <button class="_c-btn _c-btn--large _mvxxs _c-btn--deny" @click="clickNegative">
          {{ generalTexts[userLanguage].no }}
        </button>
      </div>
    </div>

    <QuizResult v-else=""
      :resultTitle="quizesTexts[quizName as string][userLanguage].results[resultQuiz].title"
      :resultImage="actualQuiz.resultsCovers[resultQuiz]" 
      :resultDesc="quizesTexts[quizName as string][userLanguage].results[resultQuiz].desc"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
import type { IQuiz } from "@/interfaces/IQuizes";
import { userLanguage, generalTexts, quizesTexts } from '@/localization/main';
import quizes from '@/Quizes/_main';
import QuizResult from '../components/QuizResult.vue';

const route = useRoute();
const quizName = route.params.name;

const actualQuiz: Ref<IQuiz> = ref({ title: '', cover: '', questions: [], resultsCovers: {} });
const questionNumber: Ref<number> = ref(0);
const quizeEnded: Ref<boolean> = ref(false);
const resultQuiz: Ref<string> = ref('');

const findQuiz = quizes.find(quiz => quiz.title == quizName)
if (findQuiz) actualQuiz.value = findQuiz;

function clickPositive() {
  if (actualQuiz) {
    const nextQuestion = actualQuiz.value.questions[questionNumber.value].positiveAwnser;
    if (typeof nextQuestion == 'number')
      questionNumber.value = nextQuestion;
    else
      showResult(nextQuestion);
  }
}

function clickNegative() {
  if (actualQuiz) {
    const nextQuestion = actualQuiz.value.questions[questionNumber.value].negativeAwnser;
    if (typeof nextQuestion == 'number')
      questionNumber.value = nextQuestion;
    else
      showResult(nextQuestion);
  }
}

function showResult(result: string) {
  quizeEnded.value = true;
  resultQuiz.value = result;
}
</script>

<style scoped>
.quizFather {
  height: 100%;
}
</style>