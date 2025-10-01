// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware pour JSON
app.use(bodyParser.json());

// Route test
app.get('/', (req, res) => {
  res.send('Serveur Express fonctionne !');
});

// Route pour recevoir la position du conducteur
app.post('/api/position', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log('Position reçue:', latitude, longitude);
  res.json({ status: 'OK', message: 'Position reçue' });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur Express lancé sur http://localhost:${PORT}`);
});
