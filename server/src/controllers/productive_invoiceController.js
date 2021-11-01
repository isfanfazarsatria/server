const { Productive_invoiceModel } = require("../../database/models/productive_invoiceModel");
const mongoose = require("mongoose");

const createProductiveInvoice = async (req, res) => {
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
        const newProductiveInvoice = await Productive_invoiceModel.create({ ...req.body});
        res.json({
            statusCode: 201,
            statusText: "Created",
            message: "Invoice is created",
            data: newProductiveInvoice,
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
      const productive_invoice = await Productive_invoiceModel.find()
  
      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Get all Productive Invoice",
        data: productive_invoice,
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
    createProductiveInvoice,
    getAll
  };