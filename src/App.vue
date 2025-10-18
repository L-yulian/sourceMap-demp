<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  let testNum = null
  if (testNum.length > 1) {
    console.log('报错了')
  }
})
</script>

<template>
  <div></div>
</template>

<style scoped></style>
