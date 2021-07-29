const { Router } = require("express");
const router = Router();

router.use("/", (req, res) => {
    res.json("it works");
})

module.exports = router;