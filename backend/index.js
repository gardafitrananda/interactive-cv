// backend/index.js

// Pesan ini akan muncul jika file ini berhasil dieksekusi oleh Vercel
console.log("--- BACKEND SERVERLESS FUNCTION INITIALIZED ---"); 

const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');
const app = express();

app.use(cors());
console.log("--- Express app created and CORS enabled ---");

app.get('/api/education', (req, res) => {
  // Pesan ini akan muncul jika route ini berhasil diakses
  console.log("--- SUCCESS: Hit the /api/education route ---"); 
  res.json(educationHistory);
});

app.get('/api/skills', (req, res) => {
  console.log("--- SUCCESS: Hit the /api/skills route ---");
  res.json(skills);
});

app.get('/api/projects', (req, res) => {
  console.log("--- SUCCESS: Hit the /api/projects route ---");
  res.json(projects);
});

// Tambahkan route penampung untuk melihat semua request yang masuk
app.use((req, res, next) => {
  console.log(`--- INCOMING REQUEST: Method=${req.method}, URL=${req.originalUrl} ---`);
  next();
});

module.exports = app;