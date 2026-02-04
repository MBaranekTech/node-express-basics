const express = require('express');
const app = express();
const PORT = 3000;

let calculationHistory = [];
let nextId = 1; 

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

  switch(operation) {
  case '+':
    result = number1 + number2;
    break;
  
  case '-':
    result = number1 - number2;
    break;
    
  case '*':
    result = number1 * number2;
    break;
    
  case '/':
    if (number2 === 0) {
      return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    result = number1 / number2;
    break;
  
  case '^':
    result = Math.pow(number1, number2);
    break;
  
  case '√':
  if (number1 < 0) {
    return res.status(400).json({ error: 'Square root of negative number is not allowed' });
  }  
  result = Math.sqrt(number1);
  break;

  case '!':
  if (number1 < 0) {
    return res.status(400).json({ error: 'Factorial of negative number is not allowed' });
  }  
  result = 1;
  for (let i = 1; i <= number1; i++) {
    result *= i;
  }
  break;

  case '%':
    if (number2 === 0) {
      return res.status(400).json({ error: 'Modulo by zero is not allowed' });
    }
    result = number1 % number2;
    break;
  
  case 'sin':
    result = Math.sin(number1*(Math.PI/180)); // Convert degrees to radians
    break;
  case 'cos':
    result = Math.cos(number1*(Math.PI/180)); // Convert degrees to radians
    break;
  case 'tan':
    result = Math.tan(number1*(Math.PI/180)); // Convert degrees to radians
    break;

  default:
    return res.status(400).json({ error: 'Invalid operation' });
}

const calculationRecord = {
    id: nextId++, 
    number1: number1,
    number2: number2,
    operation: operation,
    result: result,
    timestamp: new Date().toISOString()
  };

  calculationHistory.push(calculationRecord);

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

app.get('/api/history', (req, res) => {
    res.json({
        count: calculationHistory.length,  
        history: calculationHistory       
    });
});