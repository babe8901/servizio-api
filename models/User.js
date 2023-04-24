const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "Please provide first name"],
    minLength: 3,
    maxLength: 50,
  },
  lname: {
    type: String,
    required: [true, "Please provide last name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "PLease provide valid email",
    ],
    unique: true,
  },
  street_address: {
    type: String,
    required: [true, "Please provide street address"],
    minLength: 3,
    maxLength: 200,
  },
  city: {
    type: String,
    required: [true, "Please provide city name"],
    minLength: 3,
    maxLength: 30,
  },
  state: {
    type: String,
    required: [true, "Please provide state name"],
    minLength: 3,
    maxLength: 30,
  },
  pincode: {
    type: String,
    required: [true, "Please provide pincode"],
    length: 6,
  },
  mobile: {
    type: String,
    required: [true, "Please provide mobile number"],
    length: 10,
  },
  country: {
    type: String,
    required: [true, "Please provide country name"],
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
  },
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
