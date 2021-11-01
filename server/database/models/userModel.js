const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
 
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nama: {
        type: String,
        required: true,
    },
    email:{
        type: String,
    },
    phoneNumber: {
      type: String,
      allowNull: false,
    },
    nomorKtp:{
        type: String,
        required: true,
    },
    tempatLahir:{
        type: String,
        required: true,
    },
    tanggalLahir:{
        type: String,
        required: true
    },
    jenisKelamin:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel, userSchema };