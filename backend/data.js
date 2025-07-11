const educationHistory = [ 
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
    //major: 'MIPA',
    link: 'https://sekolahbias.sch.id/smp/',
    image: '/smp.png' 
  },
];

const skills = [ 
  { name: 'Vue.js'},
  { name: 'JavaScript' },
  { name: 'Tailwind CSS'},
  { name: 'Node.js'},
  { name: 'PostgreSQL'},
  { name: 'Express.js' },
  { name: 'Git & GitHub'},
  { name: 'HTML5 & CSS3'}
 ];
const projects = [  
   {
    title: 'Santapin',
    image: 'Dapur.jpeg',
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Larravel', 'MySQL'],
    link: 'https://github.com/EgidiusDicky/Santapin'
  },
];
module.exports = { educationHistory, skills, projects };