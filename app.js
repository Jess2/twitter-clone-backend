const express = require('express');
const postRouter = require('./routes/post');

const app = express();

app.get('/api', (req, res) => {
  res.send('hello api');
});

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/api/post', postRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});