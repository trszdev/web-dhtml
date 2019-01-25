const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const cards = [];
const banks = [];
const requests = [];

app.get('/api/pay-card', function (_, res) {
  res.json(cards);
});

app.get('/api/pay-bank', function (_, res) {
  res.json(banks);
});

app.get('/api/request-payment', function (_, res) {
  res.json(requests);
});

app.post('/api/pay-card', function (req, res) {
  cards.push(req.body);
  console.log('Pay card', req.body);
  res.sendStatus(200);
});

app.post('/api/pay-bank', function (req, res) {
  cards.push(req.body);
  console.log('Pay bank', req.body);
  res.sendStatus(200);
});

app.post('/api/request-payment', function (req, res) {
  cards.push(req.body);
  console.log('Request payment', req.body);
  res.sendStatus(200);
});

app.use('/', express.static('client/dist'));

app.get('/favicon.ico', function (_, res) {
  res.sendFile('client/dist/favicon.ico', { root: __dirname });
});

app.get('*', function (_, res) {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(8080, function () {
  console.log('Running on localhost:8080');
});
