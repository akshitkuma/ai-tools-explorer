const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tools = require('./data/tools');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let favorites = [];

app.get('/api/tools', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = tools.filter(tool => tool.category.toLowerCase() === category.toLowerCase());
    return res.json(filtered);
  }
  res.json(tools);
});

app.post('/api/favorites', (req, res) => {
  const { toolId } = req.body;
  if (favorites.includes(toolId)) {
    return res.status(400).json({ message: 'Tool already favorited' });
  }
  favorites.push(toolId);
  res.status(201).json({ message: 'Favorite added' });
});

app.get('/api/favorites', (req, res) => {
  const favTools = tools.filter(tool => favorites.includes(tool.id));
  res.json(favTools);
});

app.delete('/api/favorites/:id', (req, res) => {
  const id = parseInt(req.params.id);
  favorites = favorites.filter(favId => favId !== id);
  res.json({ message: 'Favorite removed' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
