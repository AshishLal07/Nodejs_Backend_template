const express = require("express");

const {ServerConfig, Loggers} = require("./src/config")
const app = express();

app.listen(ServerConfig.PORT, () =>{
    Loggers.info(`Successfully started the server on ${ServerConfig.PORT} `)
} )