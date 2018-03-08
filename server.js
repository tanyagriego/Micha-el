'use strict';

// const pg = require('pg');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// const conString = process.env.DATABASE_URL;
// const conString = 'postgres://tanyagriego@localhost:5432/tanyagriego';
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', function(request, response) {
  response.sendFile('./public/index.html');
});

app.listen(PORT, function() {
  console.log(`Listening on port:${PORT}`);
});
