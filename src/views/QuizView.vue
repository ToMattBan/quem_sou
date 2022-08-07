<template>
  <div>
    Escolheu o quiz {{quizName}}
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const quizName = route.params.name;
</script>