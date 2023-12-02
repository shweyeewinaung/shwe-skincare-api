const mongoose = require("mongoose");
const slugify = require("slugify");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A brand must have a name"],
    unique: true,
    trim: true,
    maxlength: [40, "A brand name must have less or equal than 40 characters"],
    minlength: [10, "A brand name must have more or equal than 10 characters"],
  },
});

// DOCUMENT MIDDLEWARE: runs before only in .save() and .create()
brandSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
