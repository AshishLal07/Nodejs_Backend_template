const express = require("express");
const apiRoutes = require("./src/routes")

const { ServerConfig, Loggers } = require("./src/config")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRoutes);


app.listen(ServerConfig.PORT, async() => {
    Loggers.info(`Successfully started the server on ${ServerConfig.PORT} `);
})