const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my first Node Calculator Server!');
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
    name: 'Martin Baranek',
    email: 'martin.baranek@example.com',
    role: 'admin'
  });
});

app.post('/api/calculate', (req, res) => {
  const number1 = parseFloat(req.body.number1);
  const number2 = parseFloat(req.body.number2);
  const operation = req.body.operation;
  
  // value is changing
  let result; 
  if (operation === '+') {
  result = number1 + number2;
  }
  else if (operation === '-') {
    result = number1 - number2;
  } else if (operation === '*') {
    result = number1 * number2;
  } else if (operation === '/') {
    result = number1 / number2;
  } else {
    return res.status(400).json({ error: 'Invalid operation' });
  } 
  res.json ({  
    number1: number1,
    number2: number2,
    operation: operation,
    result: result
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/calculator', (req, res) => {
    res.sendFile(__dirname + '/calculator.html');
});

