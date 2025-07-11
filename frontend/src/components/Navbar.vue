<template>
  <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">Garda Fitrananda</div>

      <div class="md:hidden">
        <button @click="toggleMenu" aria-label="Open Menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <ul class="hidden md:flex space-x-8">
        <li><a href="#profil" class="nav-link">Profil</a></li>
        <li><a href="#pendidikan" class="nav-link">Pendidikan</a></li>
        <li><a href="#skill" class="nav-link">Skill</a></li>
        <li><a href="#proyek" class="nav-link">Proyek</a></li>
        <li><a href="#kontak" class="nav-link">Kontak</a></li>
      </ul>
    </nav>

    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="md:hidden bg-white shadow-lg">
      <ul class="flex flex-col items-center py-4">
        <li><a href="#profil" @click="closeMenu" class="nav-link-mobile">Profil</a></li>
        <li><a href="#pendidikan" @click="closeMenu" class="nav-link-mobile">Pendidikan</a></li>
        <li><a href="#skill" @click="closeMenu" class="nav-link-mobile">Skill</a></li>
        <li><a href="#proyek" @click="closeMenu" class="nav-link-mobile">Proyek</a></li>
        <li><a href="#kontak" @click="closeMenu" class="nav-link-mobile">Kontak</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// State untuk melacak apakah menu mobile sedang terbuka atau tidak
const isMenuOpen = ref(false);

// Fungsi untuk mengubah state (membuka/menutup menu)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fungsi untuk menutup menu (dipanggil saat link di-klik)
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Menambahkan style untuk link agar lebih rapi */
.nav-link {
  @apply text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 relative;
}

/* Efek garis bawah saat di-hover */
.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #3b82f6; 
  transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link-mobile {
  @apply block text-lg text-gray-700 py-3 px-6 hover:bg-gray-100 w-screen text-center transition-colors duration-200;
}
</style>
