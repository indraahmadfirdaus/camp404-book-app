const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
require("./config/db");

const app = express();
const port = 2510;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use(router);

app.listen(port, () => {
  console.log("Server running on port : " + port);
});
