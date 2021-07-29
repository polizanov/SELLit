const { Router } = require("express");
const router = Router();

const productControler = require("./routeControlers/productControler")

router.use("/", productControler)

module.exports = router;