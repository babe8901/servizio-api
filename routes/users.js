const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUser,
  createUsers,
  deleteUser,
  deleteAllUsers,
  updateUser,
} = require("../controllers/users");

router.route("/").get(getAllUsers).post(createUsers).delete(deleteAllUsers);
router.route("/:id").post(getUser).delete(deleteUser).patch(updateUser);

module.exports = router;
