const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');
const app = express();
const PORT = 3000;

app.use(cors());
app.get('/education', (req, res) => {
  res.json(educationHistory);
});

app.get('/skills', (req, res) => {
  res.json(skills);
});

app.get('/projects', (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server is running on http://localhost:${PORT}`);
});

module.exports = app;
