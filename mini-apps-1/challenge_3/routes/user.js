const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/user");

router.get("/", ctrl.fetch);
router.post("/", ctrl.create);
// router.put("/", ctrl.update);
// router.delete("/", ctrl.destroy);

module.exports = router;
