const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productive_invoiceSchema = new Schema(
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
    grade: {
      type: String,
      required: true,
    },
    rate:{
        type: Number,
        required: true,
    },
  },
  { timestamps: true }
);

const Productive_invoiceModel = mongoose.model("Productive_invoice", productive_invoiceSchema);

module.exports = { Productive_invoiceModel, productive_invoiceSchema };
