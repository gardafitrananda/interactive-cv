
<template>
  <section id="profil" class="relative py-24 lg:py-32 overflow-hidden animated-gradient">
    <div class="relative container mx-auto px-6 flex flex-col md:flex-row items-center z-10">
      <div class="md:w-1/2 mb-12 md:mb-0">
        <div class="hero-animate">
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-800 mb-4 custom-text-shadow">
            Halo, Saya <span class="text-blue-600">Garda</span>
          </h1>
        </div>
        <div class="hero-animate delay-150">
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
          </p>
        </div>
        <div class="hero-animate delay-300">
          <a href="#kontak" class="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 inline-block">
            Hubungi Saya
          </a>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center hero-animate delay-450">
        <img
          src="/fotoProfil.jpeg"
          alt="Foto Profil"
          class="w-80 h-80 rounded-full object-cover shadow-lg transform transition-transform duration-500 hover:scale-105"
        >
      </div>
    </div>
    <div class="absolute inset-0 z-0 overflow-hidden">
        <span class="shape-1"></span>
        <span class="shape-2"></span>
        <span class="shape-3"></span>
    </div>
  </section>
</template>

<style scoped>

.animated-gradient {
  background: linear-gradient(-45deg, #f0f9ff, #e0f2fe, #dbeafe, #c7d2fe);
  background-size: 200% 200%;
  animation: move-gradient 12s ease infinite;
}

@keyframes move-gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}


@keyframes entrance {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-animate {

  animation: entrance 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  opacity: 0;
}


.delay-150 { animation-delay: 150ms; }
.delay-300 { animation-delay: 300ms; }
.delay-450 { animation-delay: 450ms; }


.custom-text-shadow {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}


.shape-1, .shape-2, .shape-3 {
  background-color: rgba(59, 130, 246, 0.07);
  border-radius: 50%;
  position: absolute;
  animation: float 20s infinite linear;
}
.shape-1 { width: 250px; height: 250px; top: 10%; left: 5%; }
.shape-2 { width: 180px; height: 180px; top: 60%; right: 5%; animation-delay: 5s; animation-duration: 25s; }
.shape-3 { width: 100px; height: 100px; bottom: 5%; left: 30%; animation-delay: 2s; animation-duration: 18s; }

@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-40px) rotate(180deg); }
  100% { transform: translateY(0px) rotate(360deg); }
}
</style>
