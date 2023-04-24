const Service = require("../models/Service");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");

const getAllServices = async (req, res) => {
  const services = await Service.find({});
  res.status(StatusCodes.OK).json({ services });
};

const getService = async (req, res) => {
  const {
    params: { id: serviceId },
  } = req;
  const service = await Service.findById(serviceId);
  if (!service) {
    throw new NotFoundError(`No service with id ${serviceId}`);
  }
  res.status(StatusCodes.OK).json({ service });
};

const createServices = async (req, res) => {
  const service = await Service.create(req.body);
  res.status(StatusCodes.CREATED).json({ service });
};

const updateService = async (req, res) => {
  const id = req.params.id;
  const service = await Service.updateOne({ _id: id }, req.body);
  res
    .status(StatusCodes.ACCEPTED)
    .json({ msg: "successfully updated", service });
};

const deleteService = async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.ACCEPTED).json({ service });
};

const deleteAllServices = async (req, res) => {
  const ack = await Service.deleteMany({});
  res.status(StatusCodes.OK).json({ ack });
};

module.exports = {
  getAllServices,
  getService,
  createServices,
  deleteService,
  updateService,
  deleteAllServices,
};
