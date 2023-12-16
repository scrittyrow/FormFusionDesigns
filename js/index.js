
const express = require('express');
const { query } = require('express-validator');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const https = require('https');

// Middleware for parsing JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define HTTPS options and create an HTTPS server
const privateKey = fs.readFileSync('./certificates/server.key', 'utf8');
const certificate = fs.readFileSync('./certificates/server.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };
const httpsServer = https.createServer(credentials, app);

// Start the HTTPS server
const PORT = process.env.PORT || 443;
httpsServer.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});

// Define routes
const routes = require('./routes/index');
app.use('/', routes);
