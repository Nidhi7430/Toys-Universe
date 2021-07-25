import express from 'express';

const app = express();
const PORT = 5000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/nidhi', (req, res) => {
  console.log('hello nidhi');
  res.send('Nidhi is listening...');
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
