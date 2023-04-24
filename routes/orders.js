const express = require("express");
const {
  getAllOrders,
  getOrder,
  createOrders,
  deleteOrder,
  deleteAllOrders,
  updateOrder,
} = require("../controllers/orders");
const router = express.Router();

router.route("/").get(getAllOrders).post(createOrders).delete(deleteAllOrders);
router.route("/:id").post(getOrder).delete(deleteOrder).patch(updateOrder);

module.exports = router;
