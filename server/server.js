//Require dotenv
require("dotenv").config();
 
const express = require("express");
const path = require("path");
const cors = require("cors"); 

//Import Router
const mongoose = require("mongoose");
const authRoute = require("./src/routes/authRoute");
const financeRoute = require("./src/routes/financeRoute");
const convent_osfRoute = require("./src/routes/convent_osfRoute");
const convent_invoiceRoute = require("./src/routes/convent_invoiceRoute");
const productive_invoiceRoute = require("./src/routes/productive_invoiceRoute");
const reksadanaRoute = require("./src/routes/reksadanaRoute");
const sbnRoute = require("./src/routes/sbnRoute");

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || " 0.0.0.0 ";
const app = express();

//To read req.body
app.use(express.json()); //Enable req.body JSON type
app.use(express.urlencoded({ extended: false })); //Support urlencode body
app.use(cors());

//Routing API
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/create/finance", financeRoute);
app.use("/api/v1/get/finance", financeRoute);
app.use("/api/v1/create/convent/osf", convent_osfRoute);
app.use("/api/v1/get/convent/osf", convent_osfRoute);
app.use("/api/v1/create/convent/invoice", convent_invoiceRoute);
app.use("/api/v1/get/convent/invoice", convent_invoiceRoute);
app.use("/api/v1/create/productive/invoice", productive_invoiceRoute);
app.use("/api/v1/get/productive/invoice", productive_invoiceRoute);
app.use("/api/v1/create/reksadana", reksadanaRoute);
app.use("/api/v1/get/reksadana", reksadanaRoute);
app.use("/api/v1/create/sbn", sbnRoute);
app.use("/api/v1/get/sbn", sbnRoute);

//Routing Homepage
app.get("/", (req, res) => res.send("AyoReal HomePage update"));

//404 Not found
app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

//Require DB Connection
const dbConnection = require("./database/config/index")();

//Run Server
app.listen(PORT, () => {
  console.log(`Server Running, mode on http://${HOST}:${PORT}`);
});
