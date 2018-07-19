const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static('/Users/matthewbrandman/wedding/dist'))
const ServerRendererPath = path.join(__dirname, './dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;

app.use(ServerRenderer());

app.listen(8081);