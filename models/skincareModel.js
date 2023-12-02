const mongoose = require("mongoose");
const slugify = require("slugify");

const skincareSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A skincare must have a name"],
    unique: true,
    trim: true,
    maxlength: [
      40,
      "A skincare name must have less or equal than 40 characters",
    ],
    minlength: [
      10,
      "A skincare name must have more or equal than 10 characters",
    ],
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
  brandInfo: {
    logo: {
      type: String,
      default: "https://shweyeewinaung.com/brand-images/",
    },
    description: {
      type: String,
      trim: true,
      required: [true, "A brand must have a description"],
    },
    slug: String,
  },
  category: {
    type: String,
    required: [true, "A skincare must have a category"],
  },
  image: {
    type: String,
    default: "https://shweyeewinaung.com/skincare-images/",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  mostLoved: {
    type: Boolean,
    default: false,
  },
});

// DOCUMENT MIDDLEWARE: runs before only in .save() and .create()
skincareSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Skincare = mongoose.model("Skincare", skincareSchema);

module.exports = Skincare;
