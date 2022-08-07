<template>
  <div class="_1/1">
    <img class="resultImage" :src="resultImage" />
    <div class="_fz30 _ttc">{{ resultTitle }}</div>
    <p>{{ resultDesc }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  resultTitle: { type: String, required: true },
  resultImage: { type: String, required: true },
  resultDesc: { type: String, required: true }
})
</script>

<style scoped>
.resultImage {
  max-width: 100%;
  max-height: 40%;
}
</style>