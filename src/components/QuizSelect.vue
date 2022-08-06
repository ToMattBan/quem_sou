<template>
  <div>
    <h1 class="_tac">{{ texts.selectQuiz }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { IHome } from "@/localization/Home/home_interface"
import { userLanguage, Home } from '@/localization/main';

const texts: IHome = Home[userLanguage];
</script>