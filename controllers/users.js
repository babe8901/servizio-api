const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");

const getAllUsers = async (req, res) => {
  // res.send("Users page");
  const users = await User.find({});
  res.status(StatusCodes.OK).json({ users });
};

const getUser = async (req, res) => {
  const {
    params: { id: userId },
  } = req;
  const user = await User.findById(userId);
  if (!user) {
    throw new NotFoundError(`No user with id ${userId}`);
  }
  res.status(StatusCodes.OK).json({ user });
};

const createUsers = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.updateOne({ _id: id }, req.body);
  res.status(StatusCodes.ACCEPTED).json({ msg: "successfully updated", user });
};

const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.ACCEPTED).json({ user });
};

const deleteAllUsers = async (req, res) => {
  const ack = await User.deleteMany({});
  res.status(StatusCodes.OK).json({ ack });
};

module.exports = {
  getAllUsers,
  getUser,
  createUsers,
  deleteUser,
  updateUser,
  deleteAllUsers,
};
