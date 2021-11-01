const route = require("express").Router();

const reksadanaController = require("../controllers/reksadanaController");

route.post("/", reksadanaController.createReksadana);
route.get("/", reksadanaController.getAll);


module.exports = route;
