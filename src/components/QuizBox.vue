<template>
  <div class="o-layout__item _1/1 _6/12@tabletV _4/12@tabletH _3/12@laptop _tac quizBox">
    <RouterLink class="_tdn _realBlack" :to="props.link">
      <img class="_cp _1/1 cover" :src="props.cover">
      <p class="_mt0 _cp _tdn">{{ props.title }}</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  cover: { type: String, required: true },
  title: { type: String, required: true },
  link: { type: String, required: true }
})
</script>

<style scoped lang="scss">
.cover {
  object-fit: cover;
  height: 100px;
}

.quizBox {
  transition: all 0.4s ease;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }
}
</style>