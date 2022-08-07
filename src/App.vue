<template>
  <main class="_por _df _aic _jcc" :style="bgStyle">
    <RouterLink to="/">
      <img class="_poa _t0 _l0 _m icon" :src="icon" />
    </RouterLink>
    <img class="_poa _t0 _r0 _m icon" :src="icon" />
    <div class="_bdrs4 _bgwhite _bd2 _8/12">
      <div class="_p">
        <RouterView />
      </div>
    </div>
  </main>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import icon from '@/assets/icon.png';
import backgroundImage from '@/assets/bg_quiz.jpeg';

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

.icon {
  height: 60px;
}
</style>
