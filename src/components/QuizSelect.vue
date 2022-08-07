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
import type { IHome } from "@/localization/interfaces/IHome"
import { userLanguage, Home } from '@/localization/main';
import quizesTexts from '@/localization/Quizes/_quizes';
import QuizBox from './QuizBox.vue';
import quizes from '@/Quizes/_main'

const texts: IHome = Home[userLanguage];
</script>