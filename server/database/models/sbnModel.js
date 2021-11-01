const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sbnSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    tenor: {
        type: Number,
        required: true,
      },
    rate: {
      type: Number,
      required: true,
    },
    type: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
);

const SbnModel = mongoose.model("Sbn", sbnSchema);

module.exports = { SbnModel, sbnSchema };
