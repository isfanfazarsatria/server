const route = require("express").Router();

const productive_invoiceController = require("../controllers/productive_invoiceController");

route.post("/", productive_invoiceController.createProductiveInvoice);
route.get("/", productive_invoiceController.getAll);


module.exports = route;