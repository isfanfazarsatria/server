const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const authSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

const hashed_password = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const AuthModel = mongoose.model("Auth", authSchema);

module.exports = { AuthModel, authSchema, hashed_password };
