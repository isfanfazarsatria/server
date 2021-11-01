const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reksadanaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    returns: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const ReksadanaModel = mongoose.model("Reksadana", reksadanaSchema);

module.exports = { ReksadanaModel, reksadanaSchema };
