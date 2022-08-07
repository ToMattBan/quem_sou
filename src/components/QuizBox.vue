<template>
  <div class="o-layout__item _6/12 _tac">
    <img class="_cp cover" :src="props.cover">
    <p class="_mt0 _cp">{{ quizTitle.quizTitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { userLanguage } from '@/localization/main';
import quizesTexts from '@/localization/Quizes/_quizes';

const props = defineProps({
  cover: { type: String, required: true },
  title: { type: String, required: true },
})

const quizTitle = quizesTexts[props.title][userLanguage];
</script>

<style scoped>
.cover {
  object-fit: cover;
  height: 100px;
}
</style>