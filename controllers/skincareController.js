const Skincare = require("../models/skincareModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllSkincares = catchAsync(async (req, res, next) => {
  const skincares = await Skincare.find();

  res.status(200).json({
    status: "success",
    results: skincares.length,
    data: {
      data: skincares,
    },
  });
});
