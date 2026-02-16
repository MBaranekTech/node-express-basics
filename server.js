const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const calcController = require('./controllers/calcController');

app.use(express.json());

app.get('/', calcController.getHome);
app.get('/api/info', calcController.getInfo);
app.get('/api/user', calcController.getUser);
app.post('/api/calculate', calcController.calculate);
app.get('/api/history', calcController.getHistory);
app.get('/calculator', calcController.getCalculatorPage);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});