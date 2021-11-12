const express = require("express");
const serverless = require("serverless-http");
const path = require("path");
const cors = require("cors");

require("dotenv").config({ path: __dirname + "/.env" });

const connectDB = require("./config/db");
connectDB();

const apiRoutes = require("./routes/api");

const app = express();
app.use(express.static(path.join(__dirname + "/public")));
console.log(path.join(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
	}),
);

app.use("/api-v1", apiRoutes);

module.exports.handler = serverless(app);
