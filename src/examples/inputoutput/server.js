const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3001; // Use a different port than your Gulp server

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to serve the JSON file
app.get('/data.json', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading data.json');
      return;
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.json(JSON.parse(data));
  });
});

// Route to handle PUT requests to update the JSON file
app.put('/data.json', (req, res) => {
  fs.writeFile('data.json', JSON.stringify(req.body), 'utf8', err => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to data.json');
      return;
    }

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.json(req.body);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});