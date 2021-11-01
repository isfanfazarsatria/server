// const { categoryModel } = require("../../database/models/categoryModel");
// const { CourseModel } = require("../../database/models/courseModel");
// const { ReviewModel } = require("../../database/models/reviewModel");
const { FinanceModel } = require("../../database/models/financeModel");
const mongoose = require("mongoose");

const createFinance = async (req, res) => {
    try {
        const { name, count } = req.body;
        if (!req.body) {
            return res.json({
                statusCode: 400,
                statusText: "Not Found",
                message: "Content can not be empty",
            })
            .status(400);
        }
        const newFinance = await FinanceModel.create({ ...req.body,});
        res.json({
            statusCode: 201,
            statusText: "Created",
            message: "Finance is created",
            data: newFinance,
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
      const finances = await FinanceModel.find()
  
      const resPayload = {
        statusCode: 200,
        statusText: "success",
        message: "Get all Finances",
        data: finances,
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
    createFinance,
    getAll
  };