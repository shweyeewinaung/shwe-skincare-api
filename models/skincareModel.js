const mongoose = require("mongoose");

const skincareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A skincare must have a name"],
    unique: true,
    trim: true,
    maxlength: [40, "A tour name must have less or equal than 40 characters"],
    minlength: [10, "A tour name must have more or equal than 10 characters"],
  },
  slug: String,
  description: {
    type: String,
    trim: true,
    required: [true, "A skincare must have a description"],
  },
  price: {
    type: Number,
    required: [true, "A skincare must have a price"],
  },
  currency: {
    type: String,
    default: "baht",
  },
  brand: {
    type: String,
    trim: true,
    required: [true, "A skincare must have a brand name"],
  },
  category: {
    type: String,
    required: [true, "A skincare must have a category"],
  },
  images: [String],
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
    set: (val) => Math.round(val * 10) / 10,
  },
});

const Skincare = mongoose.model("Skincare", skincareSchema);

module.exports = Skincare;
