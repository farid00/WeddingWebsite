const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static('/Users/matthewbrandman/wedding/public'))
const ServerRendererPath = path.join(__dirname, './dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;

app.use(ServerRenderer());

app.set('port', process.env.PORT || 8080);;
app.listen(app.get('port'))