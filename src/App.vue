<template>
  <main class="_por _df _aic _jcc" :style="bgStyle">

    <RouterLink to="/">
      <img class="_poa _t0 _l0 _m icon" :src="home_icon" />
    </RouterLink>
    <img @click="togglelanguage" class="_poa _t0 _r0 _m icon _cp" :src="language_icon" />

    <div class="_bdrs4 _bgwhite _bd2 _8/12">
      <div class="_m _por frame">
        <RouterView />
      </div>
    </div>
    
    <span class="_poa _b0 _bgred _white _1/1 _fw7 _fz20 _tac">
      {{ generalTexts[userLanguage].disclaimer }}
    </span>
  </main>

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { userLanguage, generalTexts, changeLanguage } from './localization/main';
import home_icon from '@/assets/home_icon.png';
import language_icon from '@/assets/language_icon.png';
import backgroundImage from '@/assets/bg_quiz.jpeg';

const bgStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

function togglelanguage() {
  changeLanguage(userLanguage.value == "BR" ? "EN" : "BR");
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

.frame {
  height: calc(100% - 64px);
}
</style>
