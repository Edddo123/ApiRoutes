const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const helmet = require("helmet");
const db = require("./config/db");

const mainRoutes = require("./routes/mainroute");
const { json } = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(helmet);
app.use(mainRoutes);
db.connect()
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT || 3000, () => {
      console.log(" running on port " + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err, "system crashed");
  });
