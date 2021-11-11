const express = require("express");
const serverless = require("serverless-http");
const path = require("path");

require("dotenv").config({ path: __dirname + "/.env" });

const connectDB = require("./config/db");
connectDB();

const apiRoutes = require("./routes/api");

const app = express();
app.use(express.static(path.join(__dirname + "/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api-v1", apiRoutes);

module.exports.handler = serverless(app);
