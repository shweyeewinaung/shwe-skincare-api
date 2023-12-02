const Skincare = require("../models/skincareModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const ApiFeatures = require("../utils/apiFeatures");
const factory = require("./handlerFactory");

exports.getAllSkincares = factory.getAll(Skincare);

exports.createSkincare = factory.createOne(Skincare);

exports.updateSkincare = factory.updateOne(Skincare);

exports.deleteSkincare = factory.deleteOne(Skincare);

exports.getSkincare = factory.getOne(Skincare);
