const { SbnModel } = require("../../database/models/sbnModel");
const mongoose = require("mongoose");

const createSbn = async (req, res) => {
    try {
        const { name, amount, tenor, rate, type } = req.body;
        if (!req.body) {
            return res.json({
                statusCode: 400,
                statusText: "Not Found",
                message: "Content can not be empty",
            })
            .status(400);
        }
        const newSbn = await SbnModel.create({ ...req.body,});
        res.json({
            statusCode: 201,
            statusText: "Created",
            message: "Sbn is created",
            data: newSbn,
        })
        .status(201);
    } catch (error) {
        res.json({
            statusCode: 500,
            statusText: "error",
            message: error.message,
        })
        .status(500);
    }
};

const getAll = async (req, res) => {
    try {
      const sbns = await SbnModel.find()
  
      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Get all sbns",
        data: sbns,
      };
      res.json(resPayload).status(200);
    } catch (error) {
      res
        .json({
          statusCode: 500,
          statusText: "error",
          message: error.message,
        })
        .status(500);
    }
};

module.exports = {
    createSbn,
    getAll
  };