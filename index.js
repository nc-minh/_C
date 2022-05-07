const express = require("express");
const app = express();
const port = process.env.PORT || 2512;
const routers = require("./src/api");
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

//route init
app.use(routers);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});