import express = require('express');
import * as socketio from 'socket.io';
import fs = require('fs');

import webpack = require('webpack');

var app = express();

if(process.env.NODE_ENV=="develop"){
    var webpackConfig = require('./../webpack.config.dev.js');
    var compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));
    app.use(require("webpack-hot-middleware")(compiler));

}

app.get("/bundle.js",(req,rep)=>{
    fs.readFile("./dist/bundle.js",(err,data)=>{
        if(err){
            console.log(err);
        }
        rep.end(data);
    })
})
app.get("/bundle.js.map",(req,rep)=>{
    fs.readFile("./dist/bundle.js.map",(err,data)=>{
        if(err){
            console.log(err);
        }
        rep.end(data);
    })
})

app.get("/",(req,rep)=>{
    fs.readFile("index.html",(err,data)=>{
        if(err){
            console.log(err);
        }
        rep.end(data);
    })
})


const server = app.listen(3000,()=>{
    console.log("listening")
});

var io = socketio(server);

io.on("connection",(socket)=>{
    socket.on('speak',(msg)=>{
        socket.emit('listen',msg);
    })
})

