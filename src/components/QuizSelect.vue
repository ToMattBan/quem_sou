<template>
  <div>
    <div class="_tac _fw7 _fz30 _mbsm">{{ texts.selectQuiz }}</div>
    <div class="_o-layout">
      <QuizBox v-for="quiz in quizes" image="" title="Qual seleção da copa é a sua cara?"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IHome } from "@/localization/interfaces/IHome"
import { userLanguage, Home } from '@/localization/main';

import QuizBox from './QuizBox.vue';

const texts: IHome = Home[userLanguage];

const quizes = ['', '', '', '']
</script>