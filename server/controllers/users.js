const mongoose = require("mongoose");

const User = mongoose.model("User");

const getUser = (req, res) => {
  User.findOne()
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

const getUsers = (req, res) => {
  User.find() //поиск
    .exec() //превращает в промис
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

const regUser = (req, res) => {
  User.create(req.body)
    .then((createdUser) => res.json(createdUser))
    .catch((err) => res.status(500).json(err));
};
const updUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params._id }, req.body)
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};
const delUser = (req, res) => {
  User.deleteOne({ _id: req.params._id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err));
};
module.exports = { getUser, getUsers, regUser, updUser, delUser };
