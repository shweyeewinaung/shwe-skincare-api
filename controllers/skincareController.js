const Skincare = require("../models/skincareModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const ApiFeatures = require("../utils/apiFeatures");

exports.getAllSkincares = catchAsync(async (req, res, next) => {
  const findAndFilter = new ApiFeatures(Skincare.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const skincares = await findAndFilter.query;

  res.status(200).json({
    status: "success",
    results: skincares.length,
    data: {
      data: skincares,
    },
  });
});

exports.createSkincare = catchAsync(async (req, res, next) => {
  const newSkincare = await Skincare.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      data: newSkincare,
    },
  });
});

exports.updateSkincare = catchAsync(async (req, res, next) => {
  const updatedSkincare = await Skincare.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedSkincare) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      data: updatedSkincare,
    },
  });
});

exports.deleteSkincare = catchAsync(async (req, res, next) => {
  const skincare = await Skincare.findByIdAndDelete(req.params.id);

  if (!skincare) {
    return next(new AppError("No document found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
