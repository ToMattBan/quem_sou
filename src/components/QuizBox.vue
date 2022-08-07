<template>
  <div class="o-layout__item _6/12 _tac">
    <RouterLink :to="props.link">
      <img class="_cp _1/1 cover" :src="props.cover">
      <p class="_mt0 _cp">{{ props.title }}</p>
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

<style scoped>
.cover {
  object-fit: cover;
  height: 100px;
}
</style>