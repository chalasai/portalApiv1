const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');

// Constants
const PORT = 8000;
const HOST = 'localhost';

// App
const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.json(["Tony","Lisa","Michael","Ginger","Food"]);
// });
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

const port = parseInt(process.env.PORT, 10) || PORT;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;

// app.listen(PORT, () => {
//   console.log(`Running on http://${HOST}:${PORT}`);
// });
