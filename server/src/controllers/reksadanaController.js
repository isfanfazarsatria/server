const { ReksadanaModel } = require("../../database/models/reksadanaModel");
const mongoose = require("mongoose");

const createReksadana = async (req, res) => {
    try {
        const { name, amount, returns } = req.body;
        if (!req.body) {
            return res.json({
                statusCode: 400,
                statusText: "Not Found",
                message: "Content can not be empty",
            })
            .status(400);
        }
        const newReksadana = await ReksadanaModel.create({ ...req.body,});
        res.json({
            statusCode: 201,
            statusText: "Created",
            message: "Reksadana is created",
            data: newReksadana,
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
      const reksadanas = await ReksadanaModel.find()
  
      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Get all Reksadanas",
        data: reksadanas,
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
    createReksadana,
    getAll
  };