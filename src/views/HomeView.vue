<template>
  <div>
    <div class="_tac _fw7 _fz30 _mbsm">{{ texts.selectQuiz }}</div>
    <div class="_o-layout">
      <QuizBox
        v-for="quiz in quizes"
        :cover="quiz.cover"
        :title="quizesTexts[quiz.title][userLanguage].title"
        :link="`/quiz/${quiz.title}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IHome } from "@/interfaces/IHome"
import { userLanguage, homeTexts, quizesTexts } from '@/localization/main';
import quizes from '@/Quizes/_main'
import QuizBox from '../components/QuizBox.vue'

const texts: IHome = homeTexts[userLanguage];
</script>