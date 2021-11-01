const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const convent_osfSchema = new Schema(
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

const Convent_osfModel = mongoose.model("Convent_osf", convent_osfSchema);

module.exports = { Convent_osfModel, convent_osfSchema };
