const route = require("express").Router();

const convent_osfController = require("../controllers/convent_osfController");

route.post("/", convent_osfController.createOsf);
route.get("/", convent_osfController.getAll);


module.exports = route;