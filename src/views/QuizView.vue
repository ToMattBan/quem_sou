<template>
  <div class="_tac">
    <div class="_fw7 _fz30 _mbsm">{{ quizTitle }}</div>
    <div v-if="!quizeEnded">
      <div class="_fz24">
        <span>{{ questionNumber + 1 }}. </span>
        <span>{{ actualQuizTexts.questions[questionNumber] }}</span>
      </div>
      <div class="_df _jcse _poa _1/1 _b0">
        <button class="_c-btn _c-btn--confirm _c-btn--large" @click="clickPositive">SIM</button>
        <button class="_c-btn _c-btn--deny _c-btn--large" @click="clickNegative">NÃO</button>
      </div>
    </div>
    <div v-else="">
      Cabou!
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import quizes from '@/Quizes/_main';
import quizesTexts from '@/localization/Quizes/_quizes';
import { userLanguage } from '@/localization/main';
import { ref, type Ref } from 'vue';

const route = useRoute();
const quizName = route.params.name;

const questionNumber: Ref<number> = ref(0);
const quizeEnded: Ref<boolean> = ref(false);

const actualQuiz = quizes.find(quiz => quiz.title == quizName)
const actualQuizTexts = quizesTexts[quizName as string][userLanguage]
const quizTitle = actualQuizTexts.title;


function clickPositive() {
  if (actualQuiz) {
    const nextQuestion = actualQuiz.questions[questionNumber.value].positiveAwnser;
    if (typeof nextQuestion == 'number')
      questionNumber.value = nextQuestion;
    else 
      showResult(nextQuestion);
  }
}

function clickNegative() {
  if (actualQuiz) {
    const nextQuestion = actualQuiz.questions[questionNumber.value].negativeAwnser;
    if (typeof nextQuestion == 'number')
      questionNumber.value = nextQuestion;
    else 
      showResult(nextQuestion);
  }
}

function showResult(result: string) {
  quizeEnded.value = true;
}
</script>