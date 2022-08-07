<template>
  <div class="o-layout__item _6/12 _tac">
    <div class="_cp" style="width: 100%; height: 100px; background-color: red;"></div>
    <p class="_mt0 _cp">{{ props.title }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
})
</script>