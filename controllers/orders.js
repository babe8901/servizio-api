const { StatusCodes } = require("http-status-codes");
const Order = require("../models/Order");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  res.status(StatusCodes.OK).json({ orders });
};

const getOrder = async (req, res) => {
  const {
    params: { id: orderId },
  } = req;
  const order = await Order.findById(orderId);
  if (!order) {
    throw new NotFoundError(`No order with id ${orderId}`);
  }
  res.status(StatusCodes.OK).json({ order });
};

const createOrders = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(StatusCodes.CREATED).json({ order });
};

const updateOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order.updateOne({ _id: id }, req.body);
  res.status(StatusCodes.ACCEPTED).json({ msg: "successfully updated", order });
};

const deleteOrder = async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.ACCEPTED).json({ order });
};

const deleteAllOrders = async (req, res) => {
  const ack = await Order.deleteMany({});
  res.status(StatusCodes.OK).json({ ack });
};

module.exports = {
  getAllOrders,
  getOrder,
  createOrders,
  deleteOrder,
  updateOrder,
  deleteAllOrders,
};
