const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my first Node Server!');
});

app.get('/api/info', (req, res) => {
  res.json({
    status: 'learning',
    technologies: ['Node.js', 'Express', 'JavaScript'],
    date: new Date().toLocaleDateString()
  });
});

app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'admin'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});