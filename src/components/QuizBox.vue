<template>
  <div class="o-layout__item _6/12 _tac">
    <img class="_cp cover" :src="props.cover">
    <p class="_mt0 _cp">{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  cover: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<style scoped>
.cover {
  object-fit: cover;
  height: 100px;
}
</style>