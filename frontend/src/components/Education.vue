<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';
const educationHistory = ref([]);
onMounted(async () => {
try { const response = await axios.get('http://localhost:3000/api/education'); educationHistory.value = response.data; } catch (error) { console.error(error); }
});
</script>
<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative">
        <div class="absolute h-full border-r-2 border-gray-300" style="left: 50%;"></div>

        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="mb-8 flex justify-between items-center w-full">

          <div v-if="index % 2 === 0" class="w-full flex items-center">
            <div class="w-1/2 pr-8 text-right">
              <a :href="edu.link" target="_blank" rel="noopener noreferrer" class="group inline-block">
                <p class="font-semibold text-blue-600">{{ edu.period }}</p>
                <div class="flex items-center justify-end gap-4 mt-1">
                  <h3 class="text-2xl font-bold text-gray-800 transition-colors group-hover:text-blue-600">{{ edu.institution }}</h3>
                  <img :src="edu.image" :alt="edu.institution + ' logo'" class="w-20 h-20 object-contain rounded-lg bg-white p-1 shadow-md">
                </div>
                <p class="text-gray-600 mt-1">{{ edu.major }}</p>
              </a>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            </div>
          </div>

          <div v-else class="w-full flex items-center">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <a :href="edu.link" target="_blank" rel="noopener noreferrer" class="group inline-block">
                <p class="font-semibold text-blue-600">{{ edu.period }}</p>
                <div class="flex items-center justify-start gap-4 mt-1">
                  <img :src="edu.image" :alt="edu.institution + ' logo'" class="w-25 h-10 object-contain rounded-lg bg-white p-1 shadow-md">
                  <h3 class="text-2xl font-bold text-gray-800 transition-colors group-hover:text-blue-600">{{ edu.institution }}</h3>
                </div>
                <p class="text-gray-600 mt-1">{{ edu.major }}</p>
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </section>
</template>
