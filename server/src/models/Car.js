const { Schema, Types, model } = require("mongoose");

const carSchema = new Schema({
  make: {
    type: String,
    required: [true, "Make of the car is required."],
    trim: true,
  },
  model: {
    type: String,
    required: [true, "Model of the car is required."],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "Year of the car is required."],
    min: [1990, "Year should be greater than 1990y."],
    max: [
      new Date().getFullYear() + 1,
      `Year should be until ${new Date().getFullYear() + 1}y.`,
    ],
  },
  kilometers: {
    type: Number,
    required: [true, "Kilometers are required."],
    min: [0, "Kilometers shouold be at least 0."],
  },
  transmission: {
    type: String,
    required: [true, "Transmission Type is required."],
    enum: ["Automatic", "Manual"],
  },
  fuelType: {
    type: String,
    required: [true, "Fuel Type is required."],
    enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
  },
  engineSize: {
    type: Number,
    required: [true, "Engine Size is required."],
  },
  price: {
    type: Number,
    required: [true, "Price is required."],
    min: [0, "Price should be at least 0."],
  },
  status: {
    type: String,
    required: [true, "Status is required."],
    enum: ["Available", "Sold", "Reserved"],
    default: "Available",
  },
  color: {
    exterior: {
      type: String,
    },
    interior: {
      type: String,
    },
  },
  features: [{ type: String, trim: true }],
  vin: {
    type: String,
    unique: true,
    required: true,
  },
  bodyType: {
    type: String,
    required: [true, "Body Type is required."],
  },
  images: [
    {
      url: {
        type: String,
        // TODO: add default value if not images
      },
    },
  ],
  description: {
    type: String,
    trim: true,
  },
  condition: {
    type: String,
    required: [true, "Condition is required."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // TODO: think about isSold and isDeleted
  // TODO: creator
});

carSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const CarModel = model("CarModel", carSchema);

module.exports = CarModel;
