const express = require("express");

const skincareRouter = require("./routes/skincareRoutes");

const app = express();

app.use("/api/v1/skincares", skincareRouter);

module.exports = app;
