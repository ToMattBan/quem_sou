<template>
  <div>
    <div class="_tac _fw7 _fz30 _mbsm">{{ homeTexts[userLanguage].selectQuiz }}</div>
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
import { userLanguage, homeTexts, quizesTexts } from '@/localization/main';
import quizes from '@/Quizes/_main'
import QuizBox from '../components/QuizBox.vue'
</script>