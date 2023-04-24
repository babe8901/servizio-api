const express = require("express");
const router = express.Router();

const {
  getAllServices,
  getService,
  createServices,
  deleteService,
  deleteAllServices,
  updateService,
} = require("../controllers/services");

router
  .route("/")
  .get(getAllServices)
  .post(createServices)
  .delete(deleteAllServices);
router
  .route("/:id")
  .post(getService)
  .delete(deleteService)
  .patch(updateService);

module.exports = router;
