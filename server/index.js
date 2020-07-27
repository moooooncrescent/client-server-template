const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const srvconfig = require("./srvconfig");
const mongoose = require("mongoose");
require("./models/user");

const app = express();
require("./srvconfig")(app);
require("./routes/user")(app);
app.get("/", (req, res) => res.send("back-end!"));

mongoose
  .connect(config.mongoData)
  .then(() =>
    app.listen(config.srvPort, () =>
      console.log(`started on ${config.srvPort}.`)
    )
  )
  .catch((err) =>
    console.error(`check connect to mongo:${config.mongoData}`, err)
  );
