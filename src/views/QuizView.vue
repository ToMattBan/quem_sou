<template>
  <div class="_tac _df quizFather _fxww">
    <div class="_fw7 _fz30 _mbsm _1/1">{{ quizTitle }}</div>

    <div class="_1/1 _df _fxdc _jcsb" v-if="!quizeEnded">
      <div class="_fz24">
        <span>{{ questionNumber + 1 }}. </span>
        <span>{{ actualQuizTexts.questions[questionNumber] }}</span>
      </div>

      <div class="_df _jcse">
        <button class="_c-btn _c-btn--confirm _c-btn--large" @click="clickPositive">SIM</button>
        <button class="_c-btn _c-btn--deny _c-btn--large" @click="clickNegative">NÃO</button>
      </div>
    </div>

    <div class="_1/1" v-else="">
      <div class="_fz24">{{ actualQuizTexts.results[resultQuiz].title }}</div>
      <img class="resultImage" :src="actualQuiz.resultsCovers[resultQuiz]" />
      <div>{{ actualQuizTexts.results[resultQuiz].desc }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import quizes from '@/Quizes/_main';
import quizesTexts from '@/localization/Quizes/_quizes';
import { userLanguage } from '@/localization/main';
import type { IQuiz } from "@/interfaces/IQuizes";
import { ref, type Ref } from 'vue';

const route = useRoute();
const quizName = route.params.name;

const actualQuiz: Ref<IQuiz> = ref({ title: '', cover: '', questions: [], resultsCovers: {} });
const questionNumber: Ref<number> = ref(0);
const quizeEnded: Ref<boolean> = ref(false);
const resultQuiz: Ref<string> = ref('');

const findQuiz = quizes.find(quiz => quiz.title == quizName)
if (findQuiz) actualQuiz.value = findQuiz;
const actualQuizTexts = quizesTexts[quizName as string][userLanguage]
const quizTitle = actualQuizTexts.title;


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

.resultImage {
  height: 40%;
}
</style>