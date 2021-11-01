const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const convent_invoiceSchema = new Schema(
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

const Convent_invoiceModel = mongoose.model("Convent_invoice", convent_invoiceSchema);

module.exports = { Convent_invoiceModel, convent_invoiceSchema };
