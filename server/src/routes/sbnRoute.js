const route = require("express").Router();

const sbnController = require("../controllers/sbnController");

route.post("/", sbnController.createSbn);
route.get("/", sbnController.getAll);


module.exports = route;
