const express = require("express");
const skincareController = require("../controllers/skincareController");

const router = express.Router();

router
  .route("/")
  .get(skincareController.getAllSkincares)
  .post(skincareController.createSkincare);

router
  .route("/:id")
  .delete(skincareController.deleteSkincare)
  .patch(skincareController.updateSkincare);

module.exports = router;
