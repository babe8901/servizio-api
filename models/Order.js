const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please provide request initiator's id"],
    length: 24,
  },
  serviceId: {
    type: String,
    required: [true, "Please provide service id"],
    length: 24,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
