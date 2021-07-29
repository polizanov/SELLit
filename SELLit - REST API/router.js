const { Router } = require("express");
const router = Router();

const productControler = require("./routeControlers/productControler");
const authControler = require("./routeControlers/authControler");

router.use("/", productControler);
router.use("/auth", authControler);

module.exports = router;