const express = require("express");
const serverless = require("serverless-http");

require("dotenv").config({ path: __dirname + "/.env" });

const connectDB = require("./config/db");
connectDB();

const apiRoutes = require("./routes/api");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);

console.log(process.env.MONGO_URI);

module.exports.handler = serverless(app);
