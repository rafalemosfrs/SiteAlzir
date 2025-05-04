const express = require('express');
const Parser = require('rss-parser');
const cors = require('cors');

const app = express();
const parser = new Parser();

app.use(cors());

app.get('/api/news', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://www.redbooks.ibm.com/redbooks.nsf/rss/analytics.xml');
    res.json(feed.items);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar RSS' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
