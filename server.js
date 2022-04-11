const express = require('express');

const server = express();

const cors = require('cors');

server.use(cors());

server.get('/', (req, res) => {
  res.send('Success');
});

server.post('/addUser', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

server.put('/editUser', (req, res) => {
  console.log(req.query);
  res.send('Success');
});

server.listen(3000);
