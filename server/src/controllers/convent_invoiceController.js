const { Convent_invoiceModel } = require("../../database/models/convent_invoiceModel");
const mongoose = require("mongoose");

const createInvoice = async (req, res) => {
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
        const newInvoice = await Convent_invoiceModel.create({ ...req.body});
        res.json({
            statusCode: 201,
            statusText: "Created",
            message: "Invoice is created",
            data: newInvoice,
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
      const convent_invoice = await Convent_invoiceModel.find()
  
      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Get all Convent Invoice",
        data: convent_invoice,
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
    createInvoice,
    getAll
  };