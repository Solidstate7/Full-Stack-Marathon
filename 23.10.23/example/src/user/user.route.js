const express = require("express");
const router = express.Router();
const controller = require("./user.controller");

// POST http://localhost:4000/users -> create
router.post("/", controller.create);
// GET http://localhost:4000/users -> findAll
router.get("/", controller.findAll);
// GET http://localhost:4000/users/:id -> findOne
router.get("/:id", controller.findOne);
// PUT http://localhost:4000/users/:id -> update
router.put("/:id", controller.update);
// DELETE http://localhost:4000/users/:id -> destroy
router.delete("/:id", controller.delete);

module.exports = router;
