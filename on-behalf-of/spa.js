const express = require('express');
const path = require('path');

const DEFAULT_PORT = process.env.PORT || 3000;

// initialize express.
const app = express();

// Set up a route for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/spa.html'));
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/spa_test.html'));
});

app.listen(DEFAULT_PORT, () => {
    console.log(`Sample app listening on port ${DEFAULT_PORT}!`)
});

module.exports = app;