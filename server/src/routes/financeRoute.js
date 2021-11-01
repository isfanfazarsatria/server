const route = require("express").Router();

const financeController = require("../controllers/financeController");

route.post("/", financeController.createFinance);
route.get("/", financeController.getAll);

module.exports = route;
