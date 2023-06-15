require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require('./route/contactRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

app.use(express.static("./portfolio/public"));
  
const port = process.env.PORT || 5000;
app.listen(port, console.log('server listing to port 5000'));
