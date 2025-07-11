<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 Informatika',
    link: 'https://home.amikom.ac.id/',
    image: '/amikLogo.png'
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'MAN 2 Yogyakarta',
    major: 'MIPA',
    link: 'https://man2yogyakarta.sch.id/',
    image: 'https://man2yogyakarta.sch.id/public/img/konfigurasi/logo/default.png'
  },
  {
    id: 3,
    period: '2017 - 2020',
    institution: 'SMPIT BIAS Yogyakarta',
    link: 'https://sekolahbias.sch.id/smp/',
    image: '/smp.png'
  },
]);
const API_URL = import.meta.env.PROD ? '/api/education' :
'http://localhost:3000/api/education';
onMounted(async () => {
try {
const response = await axios.get(API_URL);
educationHistory.value = response.data;
} catch (error) {
console.error('Gagal mengambil data pendidikan:', error);
}
});

</script>

<template>
  <section id="pendidikan" class="py-20 bg-transparent">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div v-for="(edu, index) in educationHistory" :key="edu.id" class="timeline-item">

          <div class="timeline-content-container" :class="[index % 2 === 0 ? 'left' : 'right']">
            <div class="timeline-dot"></div>

            <a :href="edu.link" target="_blank" rel="noopener noreferrer" class="timeline-card">
              <div class="flex items-center gap-4">
                <img :src="edu.image" :alt="edu.institution + ' logo'" class="w-16 h-16 object-contain p-1 bg-white rounded-md shadow-sm flex-shrink-0">

                <div class="flex-1">
                  <p class="font-semibold text-blue-600 text-sm">{{ edu.period }}</p>
                  <h3 class="text-xl font-bold text-gray-800">{{ edu.institution }}</h3>
                  <p class="text-gray-600">{{ edu.major }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-container {
  position: relative;
  margin-top: 3rem;
}


.timeline-line {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 2px;
  background-color: #dbeafe;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-content-container {
  position: relative;
  width: 50%;
  padding: 0 2rem;
}


.timeline-content-container.left {
  text-align: right;
  margin-right: auto;
}
.timeline-content-container.left .flex {
  flex-direction: row-reverse;
}


.timeline-content-container.right {
  margin-left: auto;
}

.timeline-dot {
  position: absolute;
  top: 1.25rem;
  z-index: 10;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border: 4px solid #3b82f6;
  border-radius: 50%;
}

.timeline-content-container.left .timeline-dot {
  right: -0.625rem;
}
.timeline-content-container.right .timeline-dot {
  left: -0.625rem;
}

.timeline-card {

  @apply inline-block p-4 md:p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl;
  max-width: 420px;
  width: 100%;
}


@media (max-width: 767px) {
  .timeline-line {
    left: 10px;
    transform: translateX(0);
  }

  .timeline-content-container,
  .timeline-content-container.left,
  .timeline-content-container.right {
    width: 100%;
    margin-left: 0;
    padding-left: 45px;
    padding-right: 0;
    text-align: left;
  }

  .timeline-content-container.left .flex,
  .timeline-content-container.right .flex {
    flex-direction: row;
  }

  .timeline-dot,
  .timeline-content-container.left .timeline-dot,
  .timeline-content-container.right .timeline-dot {
    left: 2px;
  }
}
</style>
