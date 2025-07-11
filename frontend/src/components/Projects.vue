<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([
   {
    title: 'Santapin',
    image: 'Dapur.jpeg',
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Larravel', 'MySQL'],
    link: 'https://github.com/EgidiusDicky/Santapin'
  },
]);
const API_URL = import.meta.env.PROD ? '/api/projects' :
'http://localhost:3000/api/projects';
onMounted(async () => {
try {
const response = await axios.get(API_URL);
projects.value = response.data;
} catch (error)
{
console.error('Gagal mengambil data proyek:', error);
}
});
</script>

<template>
  <section id="proyek" class="py-20 bg-gray-100">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-8 mt-10">

        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-102 hover:shadow-xl"
        >
          <div class="relative overflow-hidden">
            <img :src="project.image" alt="Gambar Proyek" class="w-full h-56 object-cover transform transition-transform duration-300 hover:scale-110">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="mb-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full"
              >{{ t }}</span>
            </div>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline flex items-center gap-1">
              Lihat Detail
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
