<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error('Gagal memuat data keahlian:', error);
  }
});


const getIcon = (skillName) => {

  const formattedName = skillName
    .toLowerCase()
    .replace('.js', 'js')
    .replace(' & ', '')
    .replace(/\s+/g, '');
  return `/icons/${formattedName}.svg`;
};
</script>

<template>
  <section id="skill" class="py-20 bg-gray-50">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">

        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white p-6 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center justify-start h-full"
        >
          <img
            :src="getIcon(skill.name)"
            :alt="skill.name"
            class="h-16 w-16 mb-5"
            @error="({ target }) => target.style.display = 'none'"
          >

          <h3 class="text-xl font-bold text-gray-800">{{ skill.name }}</h3>

          <p class="text-gray-500 mt-2">{{ skill.level }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.grid > div {
  min-height: 200px;
}
</style>
