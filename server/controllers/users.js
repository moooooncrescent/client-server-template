const mongoose = require("mongoose");

const User = mongoose.model("User");

const getUsers = (req, res) => {
  User.find //поиск
    .exec() //превращает в промис
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

const regUser = (req, res) => {
  User.create(req.body)
    .then((createdUser) => res.json(createdUser))
    .catch((err) => res.status(500).json(err));
};
const updUser = 