const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
    console.log(res.locals.user)
    res.json("it works");
})

module.exports = router;