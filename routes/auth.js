const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/", (req, res) => res.send("Auth page"));

module.exports = router;
