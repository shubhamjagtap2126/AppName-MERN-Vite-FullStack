const express = require("express");
// const taskcontrols = require("../controllers/taskController");
// const { authUser } = require("../middleware");

const router = express.Router();

router.route("/")
    .get(getTasks)
    .post(setTasks);


module.exports = router;
