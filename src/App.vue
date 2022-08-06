<template>
  <main class="_df _aic _jcc" :style="bgStyle">
    <div class="_bdrs4 _bgwhite _bd2 _8/12">
      <QuizSelect v-if="!quizStarted" />
    </div>
  </main>
</template>

<script setup lang="ts">
import backgroundImage from './assets/bg_quiz.jpeg';
import QuizSelect from './components/QuizSelect.vue';

const bgStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

const quizStarted = false;
</script>

<style scoped>
main { height: 100vh }
main div { height: 80% }
</style>
