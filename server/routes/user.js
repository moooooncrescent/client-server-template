const users = require("../controllers/users");

module.exports = (app) => {
  app.get("/getusers", users.getUsers);
  app.get("/getuser", users.getUser);
  app.post("/createuser", users.regUser);
  app.put("/updateuser/:_id", users.updUser);
  app.delete("/deleteuser/:_id", users.delUser);
};
