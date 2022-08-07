<template>
  <main class="_df _aic _jcc" :style="bgStyle">
    <div class="_bdrs4 _bgwhite _bd2 _8/12">
      <div class="_p">
<!--         <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <RouterView />
      </div>
    </div>
  </main>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import backgroundImage from './assets/bg_quiz.jpeg';

const bgStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
</script>

<style scoped>
main {
  height: 100vh
}

main>div {
  height: 80%
}
</style>
