<script setup>
defineProps({
  title: String
});
</script>

<template>
  <div class="text-center mb-4">

    <h2 class="text-3xl font-bold">{{ title }}</h2>

    <div class="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>

  </div>
</template>
