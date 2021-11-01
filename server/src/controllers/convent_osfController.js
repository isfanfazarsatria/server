const { Convent_osfModel } = require("../../database/models/convent_osfModel");
const mongoose = require("mongoose");

const createOsf = async (req, res) => {
    try {
        const { name, amount, tenor, grade, rate } = req.body;
        if (!req.body) {
            return res.json({
                statusCode: 400,
                statusText: "Not Found",
                message: "Content can not be empty",
            })
            .status(400);
        }
        const newOsf = await Convent_osfModel.create({ ...req.body});
        res.json({
            statusCode: 201,
            statusText: "Created",
            message: "Osf is created",
            data: newOsf,
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
      const convent_osf = await Convent_osfModel.find()
  
      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Get all Convent Osf",
        data: convent_osf,
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
    createOsf,
    getAll
  };