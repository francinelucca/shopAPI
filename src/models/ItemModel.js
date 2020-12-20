const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemModel = new Schema(
  {
    name: {
      desc: "The item's name.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    description: {
      desc: "The item's description.",
      trim: true,
      type: String,
      required: false,
    },
    value: {
      desc: "The item's value ($)",
      trim: true,
      type: Number,
      required: true,
    },
    availability: {
      desc: "The item's availability",
      trim: true,
      type: Number,
      required: false,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);


module.exports = mongoose.model("item", ItemModel);