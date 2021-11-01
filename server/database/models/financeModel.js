const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const financeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    sub: {
      type: String,
      default: null
    },
  },
  { timestamps: true }
);

const FinanceModel = mongoose.model("Finance", financeSchema);

module.exports = { FinanceModel, financeSchema };
