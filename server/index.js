const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
require("./models/user");

mongoose.connect(config.mongoData);

const app = express();
require("./srvconfig"(app));

app.get("/getusers", ,
);

app.post("/createuser", 
);
app.put("/updateuser/:id",
);
app.delete("/deleteuser/:id", (req, res) =>
  User.deleteOne({ _id: req.params._id })
    .exec()
    .then(() => res.json({ success: true }))
);
app.listen(3100, () => console.log("server started"));
