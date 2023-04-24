const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ServiceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    minLenght: 3,
    maxLength: 20,
  },
  name: {
    type: String,
    required: true,
    minLenght: 3,
    maxLength: 30,
  },
  href: {
    type: String,
    required: true,
    minLenght: 3,
    maxLength: 30,
  },
  imageSrc: {
    type: String,
    required: true,
    minLenght: 3,
    maxLength: 30,
  },
  imageAlt: {
    type: String,
    required: true,
    minLenght: 3,
    maxLength: 30,
  },
  price: {
    type: Number,
    required: true,
    minLenght: 3,
    maxLength: 30,
  },
});

module.exports = mongoose.model("Service", ServiceSchema);
// id: 1,
// name: "Haircut for men",
// href: "/services/service-modal",
// imageSrc: process.env.PUBLIC_URL + "/services/haircut.webp",
// imageAlt: "Haircut for Men",
// price: "₹199",
