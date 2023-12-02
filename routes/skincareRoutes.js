const express = require("express");
const skincareController = require("../controllers/skincareController");

const router = express.Router();

router
  .route("/")
  .get(skincareController.getAllSkincares)
  .post(skincareController.createSkincare);

router
  .route("/:id")
  .get(skincareController.getSkincare)
  .delete(skincareController.deleteSkincare)
  .patch(skincareController.updateSkincare);

module.exports = router;
