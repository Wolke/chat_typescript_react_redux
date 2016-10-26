"use strict";
const express = require('express');
const socketio = require('socket.io');
const fs = require('fs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
// if(process.env.NODE_ENV=="develop"){
var webpackConfig = require('./webpack.config.dev');
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
// }
app.get("/bundle.js", (req, rep) => {
    fs.readFile("./bundle/bundle.js", (err, data) => {
        if (err) {
            console.log(err);
        }
        rep.end(data);
    });
});
app.get("/bundle.js.map", (req, rep) => {
    fs.readFile("./bundle/bundle.js.map", (err, data) => {
        if (err) {
            console.log(err);
        }
        rep.end(data);
    });
});
app.get("/", (req, rep) => {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            console.log(err);
        }
        rep.end(data);
    });
});
const server = app.listen(3000, () => {
    console.log("listening");
});
var io = socketio(server);
io.on("connection", (socket) => {
    socket.on('speak', (msg) => {
        socket.emit('listen', msg);
    });
});
//# sourceMappingURL=main.js.map