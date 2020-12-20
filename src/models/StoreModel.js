const mongoose = require('mongoose');
const { Schema } = mongoose;
const ItemModel = require('./ItemModel');

const StoreModel = new Schema(
  {
    name: {
      desc: "The store's name.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    owner: {
      desc: "The store's owner",
      trim: true,
      type: String,
      required: true,
    },
    address: {
      desc: "The store's address",
      trim: true,
      type: String,
      required: false,
    },
    rnc: {
      desc: "The store's company identifier",
      type: String,
      required: false,
    },
    items: {
        desc: "The store's related items",
        type: [ItemModel.schema],
        required: false
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);


module.exports = mongoose.model("store", StoreModel);