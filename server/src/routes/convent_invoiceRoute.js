const route = require("express").Router();

const convent_invoiceController = require("../controllers/convent_invoiceController");

route.post("/", convent_invoiceController.createInvoice);
route.get("/", convent_invoiceController.getAll);


module.exports = route;