const express = require("express")
const router = express.Router()
const controller = require("../controllers/taskController")

router.get("/", controller.getTasks)
router.post("/", controller.addTask)
router.put("/:id", controller.completeTask)

module.exports = router