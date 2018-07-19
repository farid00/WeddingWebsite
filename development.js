const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const hogan = require('hogan-express');

app.use('/public', express.static('/Users/matthewbrandman/wedding/public'))
app.use(webpackMiddleware(compiler, {
    publicPath: "/dist/",
    serverSideRender: true
}));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(3000);