const express = require("express");
const skincareController = require("../controllers/skincareController");

const router = express.Router();

router.route("/").get(skincareController.getAllSkincares);

module.exports = router;
